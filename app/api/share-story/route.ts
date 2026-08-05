import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      business,
      rating,
      story,
      consent,
    } = body;

    if (!name || !business || !story || !rating) {
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
        to: ["info@hoxxes.com"],
        reply_to: "info@hoxxes.com",
        subject: `⭐ ${rating}/5 Review - ${business}`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto">

            <h2 style="color:#111827;">
              New Customer Review
            </h2>

            <p>
              A new review has been submitted through the HOXXES website.
            </p>

            <hr>

            <p><strong>Business:</strong> ${business}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Rating:</strong> ${rating} / 5 ⭐</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-GB")}</p>

            <hr>

            <h3>Customer Review</h3>

            <p style="font-size:16px;line-height:1.8;">
              ${story}
            </p>

            <hr>

            <p>
              <strong>Permission to publish:</strong>
              ${consent ? "✅ Yes" : "❌ No"}
            </p>

          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend Error:", data);

      return NextResponse.json(
        {
          error: "Email failed",
          details: data,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("Server Error:", error);

    return NextResponse.json(
      {
        error: "Server Error",
      },
      { status: 500 }
    );
  }
}