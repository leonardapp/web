import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const Abonuesi = formData.get("Abonuesi")?.toString();
    const Email = formData.get("Email")?.toString();
    const Produkt = formData.get("Produkt")?.toString();
    const Pershkrimi = formData.get("Përshkrimi")?.toString();

    if (!Email || !Abonuesi) {
      return Response.json(
        {
          success: false,
          message: "Missing fields",
        },
        { status: 400 }
      );
    }

    // Dërgo email vetëm nëse RESEND_API_KEY ekziston
    if (resend) {
      // Email për ekipin e supportit
      await resend.emails.send({
        from: "Hoxxes Tickets <onboarding@resend.dev>",
        to: "info@hoxxes.com",
        subject: `🎫 New Ticket - ${Produkt || "Support Request"}`,
        html: `
          <h2>New Ticket</h2>
          <p><b>Store:</b> ${Abonuesi}</p>
          <p><b>Email:</b> ${Email}</p>
          <p><b>Product:</b> ${Produkt || "-"}</p>
          <p><b>Description:</b><br/>${Pershkrimi || "-"}</p>
        `,
      });

      // Auto-reply për klientin
      await resend.emails.send({
        from: "Hoxxes Support <onboarding@resend.dev>",
        to: Email,
        subject: "Ticket received 🎫",
        html: `
          <p>Hi ${Abonuesi},</p>
          <p>We received your ticket and will respond as soon as possible.</p>
          <p>Thank you,<br/>Hoxxes Support Team</p>
        `,
      });
    }

    // Nëse s’ka RESEND_API_KEY, ticket konsiderohet i pranuar pa email
    return Response.json({
      success: true,
      message: resend
        ? "Ticket sent successfully"
        : "Ticket received successfully",
    });
  } catch (error) {
    console.error("Ticket API Error:", error);

    return Response.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}