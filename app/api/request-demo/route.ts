import { NextResponse } from "next/server";
import { spacing, text, layout } from "@/app/design-system";
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, phone, locations, message } = body;

    if (!email || !name) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Missing API key" }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Hoxxes <info@hoxxes.com>",
        to: ["info@hoxxes.com"],
        reply_to: email,
        subject: "New Demo Request",
        html: `
          <h2>New Request Demo</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Company:</b> ${company || "-"}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "-"}</p>
          <p><b>Locations:</b> ${locations || "-"}</p>
          <p><b>Message:</b> ${message || "-"}</p>
        `,
      }),
    });

    let data;
    try {
      data = await res.json();
    } catch {
      data = { error: "Invalid JSON response from Resend" };
    }

    if (!res.ok) {
      console.log("RESEND ERROR:", data);
      return NextResponse.json(
        { error: "Email failed", details: data },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.log("SERVER ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}