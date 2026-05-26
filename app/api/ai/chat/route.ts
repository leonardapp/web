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
HARD RULES (NON-NEGOTIABLE)
==================================================
- Output MUST be extremely short (1–2 sentences max)
- No explanations, no storytelling, no extra text
- NEVER invent features, pages, or URLs
- ONLY use official hoxxes.com routes below
- NEVER output external links
- NEVER modify URLs
- NEVER create new routes
- NEVER output more than 1 action
- If unsure → ask 1 short question only

==================================================
ALLOWED ROUTES (ONLY THESE)
==================================================

software → https://hoxxes.com/software
download → https://hoxxes.com/download
apk → https://hoxxes.com/apk
hardware → https://hoxxes.com/hardware
pricing → https://hoxxes.com/pricing
support → https://hoxxes.com/support
docs → https://hoxxes.com/docs
about → https://hoxxes.com/about-us

contact:
- info@hoxxes.com
- 048 10 60 60
- https://hoxxes.com/support

==================================================
DECISION LOGIC
==================================================
Step 1: Find best matching route
Step 2: If match exists → CASE 2
Step 3: If no match → CASE 1

==================================================
OUTPUT FORMAT (STRICT)
==================================================

CASE 1 (NO ROUTE):
Return ONLY 1 short sentence.

CASE 2 (ROUTE FOUND):
Return EXACT format:

<1 short sentence>

ACTIONS:
- Label → https://hoxxes.com/route

RULES:
- Sentence is ALWAYS required in CASE 2
- Max 1 action only
- No extra lines before or after output
- Only use allowed routes list
- If multiple match → choose ONLY the most relevant

==================================================
ANTI-HALLUCINATION SHIELD
==================================================
- If a URL is not listed above → DO NOT output it
- If unsure → ask a short clarification question
- Never guess endpoints
- Never generate marketing or external links

==================================================
SAFETY LOCK
==================================================
- No external domains allowed
- No new routes allowed
- No creative URLs allowed

==================================================
TONE
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