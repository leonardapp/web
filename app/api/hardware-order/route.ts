import { NextResponse } from "next/server";
import { products } from "@/lib/products";

export const runtime = "nodejs";

type OrderItemInput = {
  slug: string;
  quantity: number;
};

type PaymentMethod = "Bank Transfer" | "Pay on Collection";

type CalculatedOrderItem = {
  slug: string;
  title: string;
  quantity: number;
  unitPriceCents: number;
  lineSubtotalCents: number;
  vatRate: number;
  lineVatCents: number;
  lineTotalCents: number;
  availability: "Made to Order" | "In Stock";
  leadTime: string;
};

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cleanText(value: unknown, maxLength = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function formatMoney(cents: number): string {
  return (cents / 100).toFixed(2);
}

function moneyToCents(amount: number): number {
  return Math.round(amount * 100);
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Invalid order data." },
        { status: 400 }
      );
    }

    const input = body as Record<string, unknown>;

    const fullName = cleanText(input.fullName, 150);
    const company = cleanText(input.company, 200);
    const email = cleanText(input.email, 254).toLowerCase();
    const phone = cleanText(input.phone, 50);
    const city = cleanText(input.city, 100);
    const address = cleanText(input.address, 300);
    const businessNumber = cleanText(input.businessNumber, 100);
    const vatNumber = cleanText(input.vatNumber, 100);
    const notes = cleanText(input.notes, 2000);

    const paymentMethod = input.paymentMethod as PaymentMethod;

    if (!fullName || !company || !email) {
      return NextResponse.json(
        { error: "Name, company and email are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    if (
      paymentMethod !== "Bank Transfer" &&
      paymentMethod !== "Pay on Collection"
    ) {
      return NextResponse.json(
        { error: "Invalid payment method." },
        { status: 400 }
      );
    }

    const rawItems = input.items;

    if (
      !Array.isArray(rawItems) ||
      rawItems.length === 0 ||
      rawItems.length > 50
    ) {
      return NextResponse.json(
        { error: "Your order contains invalid products." },
        { status: 400 }
      );
    }

    const quantities = new Map<string, number>();

    for (const rawItem of rawItems) {
      if (!rawItem || typeof rawItem !== "object" || Array.isArray(rawItem)) {
        return NextResponse.json(
          { error: "Invalid product or quantity." },
          { status: 400 }
        );
      }

      const item = rawItem as Partial<OrderItemInput>;

      if (
        typeof item.slug !== "string" ||
        !item.slug.trim() ||
        !Number.isSafeInteger(item.quantity) ||
        (item.quantity as number) < 1 ||
        (item.quantity as number) > 1000
      ) {
        return NextResponse.json(
          { error: "Invalid product or quantity." },
          { status: 400 }
        );
      }

      const slug = item.slug.trim();
      const previous = quantities.get(slug) ?? 0;
      const combined = previous + (item.quantity as number);

      if (combined > 1000) {
        return NextResponse.json(
          { error: "Maximum quantity exceeded." },
          { status: 400 }
        );
      }

      quantities.set(slug, combined);
    }

    const orderItems: CalculatedOrderItem[] = [];

    for (const [slug, quantity] of quantities) {
      const product = products.find((entry) => entry.slug === slug);

      if (!product) {
        return NextResponse.json(
          { error: `Invalid product: ${slug}` },
          { status: 400 }
        );
      }

      if (
        !Number.isFinite(product.price) ||
        product.price < 0 ||
        !Number.isFinite(product.vat) ||
        product.vat < 0 ||
        product.vat > 100
      ) {
        console.error("Invalid catalog pricing:", slug);
        return NextResponse.json(
          { error: "Product pricing is currently unavailable." },
          { status: 500 }
        );
      }

      const unitPriceCents = moneyToCents(product.price);
      const lineSubtotalCents = unitPriceCents * quantity;
      const lineVatCents = Math.round(
        lineSubtotalCents * (product.vat / 100)
      );

      // Convert the catalog value to string to support catalog unions
      // that may not explicitly include every availability label.
      const availabilityValue = String(product.availability);
      const madeToOrder =
        availabilityValue === "made-to-order" ||
        availabilityValue === "sold-out" ||
        (typeof product.stock === "number" && product.stock <= 0);

      orderItems.push({
        slug: product.slug,
        title: product.title,
        quantity,
        unitPriceCents,
        lineSubtotalCents,
        vatRate: product.vat,
        lineVatCents,
        lineTotalCents: lineSubtotalCents + lineVatCents,
        availability: madeToOrder ? "Made to Order" : "In Stock",
        leadTime: product.leadTime || "",
      });
    }

    const subtotalCents = orderItems.reduce(
      (sum, item) => sum + item.lineSubtotalCents,
      0
    );

    const vatCents = orderItems.reduce(
      (sum, item) => sum + item.lineVatCents,
      0
    );

    const totalCents = subtotalCents + vatCents;

    if (
      !Number.isSafeInteger(subtotalCents) ||
      !Number.isSafeInteger(vatCents) ||
      !Number.isSafeInteger(totalCents)
    ) {
      return NextResponse.json(
        { error: "Order total is invalid." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Order service is temporarily unavailable." },
        { status: 500 }
      );
    }

    const itemRows = orderItems
      .map(
        (item) => `
          <tr>
            <td style="padding:12px;border-bottom:1px solid #eee">
              <strong>${escapeHtml(item.title)}</strong>
              <br/>
              <small>${escapeHtml(item.slug)}</small>
              <br/>
              <small>${escapeHtml(item.availability)}</small>
              ${
                item.leadTime
                  ? `<br/><small>Estimated lead time: ${escapeHtml(item.leadTime)}</small>`
                  : ""
              }
            </td>
            <td style="padding:12px;text-align:center;border-bottom:1px solid #eee">
              ${item.quantity}
            </td>
            <td style="padding:12px;text-align:right;border-bottom:1px solid #eee">
              €${formatMoney(item.unitPriceCents)}
            </td>
            <td style="padding:12px;text-align:center;border-bottom:1px solid #eee">
              ${escapeHtml(item.vatRate)}%
            </td>
            <td style="padding:12px;text-align:right;border-bottom:1px solid #eee">
              €${formatMoney(item.lineTotalCents)}
            </td>
          </tr>
        `
      )
      .join("");

    const html = `
      <div style="font-family:Arial,sans-serif;color:#17210c;max-width:900px;margin:auto">
        <h2 style="color:#52820f">New HOXXES Hardware Order</h2>
        <p>A new hardware order has been submitted.</p>

        <h3>Order Information</h3>
        <p><strong>Order Type:</strong> Hardware Order</p>
        <p><strong>Payment Method:</strong> ${escapeHtml(paymentMethod)}</p>

        <hr/>

        <h3>Products</h3>
        <div style="overflow-x:auto">
          <table style="width:100%;border-collapse:collapse;font-size:13px">
            <thead>
              <tr style="background:#f3f7ed">
                <th style="padding:12px;text-align:left">Product</th>
                <th style="padding:12px">Qty</th>
                <th style="padding:12px;text-align:right">Unit Price</th>
                <th style="padding:12px">VAT</th>
                <th style="padding:12px;text-align:right">Total incl. VAT</th>
              </tr>
            </thead>
            <tbody>${itemRows}</tbody>
          </table>
        </div>

        <div style="margin-top:24px;text-align:right">
          <p><strong>Subtotal:</strong> €${formatMoney(subtotalCents)}</p>
          <p><strong>VAT:</strong> €${formatMoney(vatCents)}</p>
          <h2>Total: €${formatMoney(totalCents)}</h2>
        </div>

        <hr/>

        <h3>Customer Information</h3>
        <p><strong>Contact Person:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "-")}</p>
        <p><strong>Business Registration:</strong> ${escapeHtml(businessNumber || "-")}</p>
        <p><strong>VAT Number:</strong> ${escapeHtml(vatNumber || "-")}</p>

        <hr/>

        <h3>Delivery / Contact Address</h3>
        <p><strong>City:</strong> ${escapeHtml(city || "-")}</p>
        <p><strong>Address:</strong> ${escapeHtml(address || "-")}</p>

        <hr/>

        <h3>Additional Notes</h3>
        <p style="white-space:pre-wrap">${escapeHtml(notes || "-")}</p>

        <hr/>

        <p style="color:#777;font-size:12px">
          Prices and taxes are calculated from the HOXXES server catalog.
          Fulfillment and availability must be confirmed by the HOXXES Sales Team.
        </p>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "HOXXES <info@hoxxes.com>",
        to: ["info@hoxxes.com"],
        reply_to: email,
        subject: `New Hardware Order - ${orderItems.length} Product(s)`,
        html,
      }),
    });

    const data: unknown = await response.json();

    if (!response.ok) {
      console.error("RESEND STATUS:", response.status);
      console.error("RESEND RESPONSE:", data);
      return NextResponse.json(
        { error: "Order confirmation email could not be sent." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Hardware order submitted successfully.",
    });
  } catch (error) {
    console.error("Hardware order error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
