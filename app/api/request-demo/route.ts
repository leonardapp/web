import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, company, email, phone, locations, message } = body;

    // 1. EMAIL TEK TI (LEAD NOTIFICATION)
    await resend.emails.send({
      from: "Hoxxes <onboarding@resend.dev>",
      to: "info@hoxxes.com",
      subject: `New Demo Request - ${company || "Unknown Company"}`,
      html: `
        <h2>New Demo Request</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>
        <p><b>Locations:</b> ${locations || "-"}</p>
        <p><b>Message:</b> ${message || "-"}</p>
      `,
    });

    // 2. AUTO-REPLY TEK KLIENTI
    await resend.emails.send({
      from: "Hoxxes <onboarding@resend.dev>",
      to: email,
      subject: "We received your request – Hoxxes Team",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h2 style="color:#111">Thank you for your request, ${name} 👋</h2>

          <p>We have successfully received your demo request for <b>${company}</b>.</p>

          <p>Our team will review your request and contact you shortly to schedule a personalized demo of the Hoxxes platform.</p>

          <br/>

          <p><b>What happens next?</b></p>
          <ul>
            <li>We analyze your business needs</li>
            <li>We prepare a tailored demo</li>
            <li>We contact you within 24–48 hours</li>
          </ul>

          <br/>

          <p>If you need immediate assistance, you can contact us at:</p>
          <p>📧 info@hoxxes.com<br/>📞 +383 48 10 60 60</p>

          <br/>

          <p style="color:#555">
            Best regards,<br/>
            <b>Hoxxes Team</b>
          </p>
        </div>
      `,
    });

    return Response.json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Failed to send emails",
      },
      { status: 500 }
    );
  }
}