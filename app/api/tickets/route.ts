import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body;

    // 1. EMAIL TEK TI
    await resend.emails.send({
      from: "Hoxxes Tickets <onboarding@resend.dev>",
      to: "info@hoxxes.com",
      subject: `🎫 New Ticket: ${subject}`,
      html: `
        <h2>New Support Ticket</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    // 2. AUTO-REPLY CLIENT
    await resend.emails.send({
      from: "Hoxxes Support <onboarding@resend.dev>",
      to: email,
      subject: "We received your ticket 🎫",
      html: `
        <div style="font-family:Arial">
          <h2>Hi ${name},</h2>
          <p>We received your support ticket:</p>

          <p><b>${subject}</b></p>

          <p>Our team will respond shortly.</p>

          <hr/>
          <p>Hoxxes Support Team</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}