import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const Abonuesi = formData.get("Abonuesi")?.toString();
    const Email = formData.get("Email")?.toString();
    const Produkt = formData.get("Produkt")?.toString();
    const Pershkrimi = formData.get("Përshkrimi")?.toString();

    if (!Email || !Abonuesi) {
      return Response.json({ success: false, message: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Hoxxes Tickets <onboarding@resend.dev>",
      to: "info@hoxxes.com",
      subject: `🎫 New Ticket - ${Produkt}`,
      html: `
        <h2>New Ticket</h2>
        <p><b>Store:</b> ${Abonuesi}</p>
        <p><b>Email:</b> ${Email}</p>
        <p><b>Product:</b> ${Produkt}</p>
        <p><b>Description:</b><br/>${Pershkrimi}</p>
      `,
    });

    await resend.emails.send({
      from: "Hoxxes Support <onboarding@resend.dev>",
      to: Email,
      subject: "Ticket received 🎫",
      html: `
        <p>Hi ${Abonuesi},</p>
        <p>We received your ticket and will respond soon.</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Ticket sent successfully",
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}