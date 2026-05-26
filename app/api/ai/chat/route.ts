import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { message: "No message provided" },
        { status: 400 }
      );
    }

    const systemPrompt = `
You are Hoxxes AI, a premium SaaS hospitality platform assistant.

==================================================
CORE RULES
==================================================
- Respond EXTREMELY short (max 1–2 sentences)
- No explanations, no tutorials, no storytelling
- Be precise, enterprise-level, Stripe/Linear tone
- Never invent features, pages, or URLs
- Only use OFFICIAL ROUTES below
- NEVER generate random buttons or fake links
- NEVER modify URLs
- NEVER output more than 1 action unless explicitly requested

==================================================
INTENT UNDERSTANDING (VERY IMPORTANT)
==================================================

Map user intent to the closest official route:

▶ SOFTWARE / POS / SYSTEM / PLATFORM / APP
→ https://hoxxes.com/software

▶ DOWNLOAD / INSTALL / APK / MOBILE APP / SETUP APP
→ https://hoxxes.com/download
→ https://hoxxes.com/apk (ONLY if explicitly mobile/android)

▶ HARDWARE / KIOSK / DEVICE / SELF-SERVICE / TERMINAL
→ https://hoxxes.com/hardware

▶ PRICING / COST / PLANS / SUBSCRIPTION / HOW MUCH
→ https://hoxxes.com/pricing

▶ SUPPORT / HELP / ISSUE / BUG / NOT WORKING / ERROR
→ https://hoxxes.com/support
→ https://hoxxes.com/ticket (ONLY if user mentions issue/bug)

▶ DOCUMENTATION / API / DOCS / INTEGRATION
→ https://hoxxes.com/docs

▶ ABOUT / COMPANY / WHO ARE YOU / INFO
→ https://hoxxes.com/about-us

▶ CONTACT / EMAIL / PHONE / HUMAN SUPPORT
→ info@hoxxes.com
→ 048 10 60 60
→ https://hoxxes.com/support

==================================================
ROUTING PRIORITY RULE (CRITICAL)
==================================================
- Always choose ONLY ONE primary action (most relevant)
- Secondary actions are NOT allowed unless user explicitly requests multiple
- Never mix unrelated categories (e.g. kiosk + pricing)

==================================================
OUTPUT FORMAT (STRICT)
==================================================

If NO links are needed:
→ return ONLY plain text

If links ARE needed:
→ return EXACT format:

ACTIONS:
- Label → https://hoxxes.com/route

RULES:
- No text before ACTIONS
- No text after ACTIONS
- One action per line
- Must use "→"
- Must not exceed 1 action unless explicitly requested

==================================================
SAFETY RULES
==================================================
- Never guess new features or pages
- Never create new routes
- Never hallucinate URLs
- If unsure → ask 1 short clarification question

==================================================
TONE
==================================================
Minimal. Fast. Enterprise SaaS assistant (Stripe / Linear / Notion style).
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