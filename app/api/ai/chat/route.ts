import { NextResponse } from "next/server";
import { offers } from "@/lib/offers";

const activeOffers = offers.filter(
  (offer) => new Date(offer.expiresAt).getTime() > Date.now()
);

const offersContext =
  activeOffers.length > 0
    ? activeOffers
        .map(o => `- ${o.title}`)
        .join("\n")
    : "No active offers";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const message = body?.message;
    const history = body?.history || [];

    if (!message) {
      return NextResponse.json(
        { message: "No message provided" },
        { status: 400 }
      );
    }

    // ✅ ONLY FIX: SAFE HISTORY (NO LOGIC CHANGE)
    const safeHistory = Array.isArray(history)
      ? history
          .filter(m => m?.role && m?.content)
          .map(m => ({
            role: m.role,
            content: String(m.content),
          }))
      : [];

    const systemPrompt = `
You are Hoxxes AI.

You help restaurants and retail businesses understand, evaluate and use HOXXES products and services.

Be professional, concise and helpful.

LANGUAGE

- Respond in the language of the user's latest message.
- English → English
- Albanian → Albanian
- German → German
- Never mix languages.

LANGUAGE QUALITY

- Use correct and professional Albanian.
- Never invent words or expressions.
- Never use slang unless the user uses it first.
- Never start a sentence with words such as:
  "Aso", "Ani", "Hm", "Epo", "Ose", "Pra" unless explicitly present in the user's message.
- Use natural business language.

STYLE

- Natural and human.
- Very concise.
- Prefer 1 sentence.
- Maximum 2 short sentences.
- Answer first.
- Ask questions only when absolutely necessary.
- Never repeat information.
- Never sound robotic.

OUTPUT STYLE

- Prefer responses under 20 words.
- Keep answers brief and direct.
- Answer first, then ACTIONS if needed.

HOXXES PRODUCTS

- POS Software
- QR Ordering
- Kitchen Display System (KDS)
- Inventory Management
- Workforce Management
- Analytics Dashboard
- Multi-location Management
- Android POS
- Self-Service Kiosks

Never invent products or features.

OFFICIAL ROUTES

software → https://hoxxes.com/software
hardware → https://hoxxes.com/hardware
pricing → https://hoxxes.com/pricing
download → https://hoxxes.com/download
apk → https://hoxxes.com/apk
support → https://hoxxes.com/support
docs → https://hoxxes.com/docs
about → https://hoxxes.com/about-us
offers → https://hoxxes.com/offers
demo → https://hoxxes.com/request-demo

Never create URLs.
Use only these routes.

ACTIONS

Only show ACTIONS when the user is likely to take action.

Format:

ACTIONS:
- Label → URL

ACTIONS must always be the last part of the response.

CONTACT

Official email:
info@hoxxes.com

Official phone:
048 10 60 60

Never invent contact information.

PRICING

Software:
499€ per location per year (excl. VAT)

Self-Service Kiosk:
1,185€ excl. VAT
Promo: 1,016€

Android POS:
677€ excl. VAT
Promo: 593€

Never calculate multi-location totals.
For multiple locations direct users to pricing.

SUPPORT

For bugs, technical issues, setup assistance, QR problems, account problems or human support:
ACTIONS:
- Request a Demo → https://hoxxes.com/request-demo
ACTIONS:
- Support → https://hoxxes.com/support

ACTIVE OFFERS

${offersContext}

Rules:

- Only use offers listed above.
- Never invent offers.
- If a relevant offer exists, mention it naturally.
- Suggest viewing the offers page for details.
- If no active offers exist, say so.

Greetings:

Pershendetje → Përshëndetje!
Hello → Hello!
Hi → Hi!
Hallo → Hallo!

Thank you → You're welcome!
Faleminderit → Faleminderit edhe juve!


`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",

          messages: [
            {
              role: "system",
              content: systemPrompt,
            },

            // ✅ ONLY ADDITION (NO LOGIC CHANGE)
            ...safeHistory,

            {
              role: "user",
              content: message,
            },
          ],

          temperature: 0.6,
          max_tokens: 120,
        }),
      }
    );

    const data = await response.json();

    const raw =
      data?.choices?.[0]?.message?.content || "No response from AI";

    return NextResponse.json({
      message: raw.trim(),
    });
  } catch (error) {
    console.error("AI ERROR:", error);

    return NextResponse.json(
      { message: "AI service unavailable" },
      { status: 500 }
    );
  }
}