import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      company,
      email,
      phone,
      city,
      address,
      businessNumber,
      vatNumber,
      notes,
      product,
      quantity,
      subtotal,
      vat,
      total,
      paymentMethod,
    } = body;

    if (!email || !fullName || !product) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "HOXXES <info@hoxxes.com>",
        to: ["info@hoxxes.com"], // ose sales@hoxxes.com
        reply_to: email,
        subject: `New Hardware Order - ${product}`,
        html: `
          <h2>New Hardware Order</h2>

          <h3>Product Information</h3>

          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Quantity:</strong> ${quantity}</p>

          <hr/>

          <p><strong>Subtotal:</strong> €${subtotal}</p>
          <p><strong>VAT:</strong> €${vat}</p>
          <p><strong>Total:</strong> €${total}</p>

          <hr/>

          <h3>Customer Information</h3>

          <p><strong>Company:</strong> ${company || "-"}</p>
          <p><strong>Business Registration:</strong> ${
            businessNumber || "-"
          }</p>

          <p><strong>VAT Number:</strong> ${vatNumber || "-"}</p>

          <hr/>

          <p><strong>Contact Person:</strong> ${fullName}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone || "-"}</p>

          <hr/>

          <p><strong>City:</strong> ${city || "-"}</p>

          <p><strong>Address:</strong> ${address || "-"}</p>

          <hr/>

          <p><strong>Payment Method:</strong> ${paymentMethod}</p>

          <hr/>

          <p><strong>Additional Notes</strong></p>

          <p>${notes || "-"}</p>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
  console.error("RESEND STATUS:", response.status);
  console.error("RESEND RESPONSE:", data);

  return NextResponse.json(
    {
      error: "Email could not be sent.",
      details: data,
    },
    { status: 500 }
  );
}

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}