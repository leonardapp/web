import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, phone, locations, message } = body;

    if (!email || !name) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Hoxxes <no-reply@hoxxes.com>",
        to: ["info@hoxxes.com"],
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

    const data = await res.json();

    if (!res.ok) {
      console.log("RESEND ERROR:", data);
      return NextResponse.json({ error: "Email failed", details: data }, { status: 500 });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}