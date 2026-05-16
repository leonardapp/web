import { NextResponse } from "next/server";
import OpenAI from "openai";
import { HOXXES_KB } from "@/lib/hoxxes-kb";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "No message provided" },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: HOXXES_KB },
        { role: "user", content: message },
      ],
    });

    return NextResponse.json({
      reply: response.choices[0].message.content || "",
    });

  } catch (err: any) {
    console.error(err);

    return NextResponse.json(
      { error: "AI failed", details: err?.message },
      { status: 500 }
    );
  }
}