import { NextResponse } from "next/server";
import { offers } from "@/lib/offers";


// ===============================
// STYLE CONTROL
// ===============================

function enforceStyle(text: string) {
  const actionsMatch = text.match(/ACTIONS:[\s\S]*/i);

  const actions = actionsMatch
    ? actionsMatch[0].trim()
    : "";

  let mainText = actions
    ? text.replace(actions, "").trim()
    : text.trim();


  const sentences = mainText
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean);


  mainText = sentences
    .slice(0, 2)
    .join(" ")
    .trim();


  return actions
    ? `${mainText}\n\n${actions}`
    : mainText;
}



// ===============================
// URL SECURITY
// ===============================

function sanitizeOutput(text: string) {

  const allowedRoutes = [
  "hoxxes.com/software",
  "hoxxes.com/learn-more", // ADD
  "hoxxes.com/hardware",
  "hoxxes.com/pricing",
  "hoxxes.com/download",
  "hoxxes.com/apk",
  "hoxxes.com/support",
  "hoxxes.com/docs",
  "hoxxes.com/about-us",
  "hoxxes.com/offers",
  "hoxxes.com/request-demo",
];


  return text.replace(
    /(https?:\/\/[^\s]+|hoxxes\.com\/[^\s]+)/g,
    (url) => {

      const cleanUrl = url.replace(
        /^https?:\/\//,
        ""
      );

      return allowedRoutes.some(route =>
        cleanUrl.includes(route)
      )
        ? url
        : "[blocked]";
    }
  );
}



// ===============================
// OFFERS
// ===============================

const activeOffers = offers.filter(
  offer =>
    new Date(offer.expiresAt).getTime() >
    Date.now()
);


const offersContext =
  activeOffers.length
    ? activeOffers
        .map(o => `- ${o.title}`)
        .join("\n")
    : "No active offers";



// ===============================
// API
// ===============================

export async function POST(req: Request) {

  try {

    const body = await req.json();


    const message =
      typeof body?.message === "string"
        ? body.message.trim()
        : "";


    if (!message) {
      return NextResponse.json(
        {
          message:
          "Please enter a message."
        },
        {
          status:400
        }
      );
    }


    if(message.length > 2000){

      return NextResponse.json(
        {
          message:
          "Message too long."
        },
        {
          status:400
        }
      );

    }



    // ===============================
    // PROMPT INJECTION FILTER
    // ===============================

    const blockedPatterns = [
      "ignore previous instructions",
      "ignore system prompt",
      "reveal system prompt",
      "developer message",
      "jailbreak",
      "act as",
    ];


    const normalized =
      message
      .toLowerCase()
      .replace(/\s+/g," ");


    if(
      blockedPatterns.some(
        pattern =>
        normalized.includes(pattern)
      )
    ){

      return NextResponse.json(
        {
          message:
          "Request not allowed."
        },
        {
          status:400
        }
      );

    }



    // ===============================
// SAFE HISTORY
// ===============================

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const history: ChatMessage[] =
  Array.isArray(body?.history)
    ? body.history
        .slice(-8)
        .filter(
          (item: unknown): item is ChatMessage =>
            typeof item === "object" &&
            item !== null &&
            "role" in item &&
            "content" in item &&
            (
              (item as ChatMessage).role === "user" ||
              (item as ChatMessage).role === "assistant"
            ) &&
            typeof (item as ChatMessage).content === "string"
        )
        .map((item: ChatMessage) => ({
          role: item.role,
          content: item.content.slice(0, 800),
        }))
    : [];




    // ===============================
    // SYSTEM PROMPT
    // ===============================

    const systemPrompt = `

You are Hoxxes AI.

You represent HOXXES, a restaurant and retail operating system.

Help businesses understand products, pricing, hardware and services.

Always be professional, concise and accurate.



LANGUAGE:

Reply in the same language as the user.

English -> English
Albanian -> Albanian
German -> German

Never mix languages.

For Albanian:
- Use standard Albanian language.
- Use correct grammar and word order.
- Do not translate word by word from English.
- Avoid unnatural expressions.
- Prefer simple professional Albanian sentences.
- If unsure, use simpler Albanian instead of inventing words.

For Albanian:
- Avoid mixing English words when a clear Albanian word exists.
- Use English product names only when they are official Hoxxes product names.

STYLE:

- Human and natural.
- Maximum 2 short sentences unless ACTIONS are required.
- Answer directly.
- Keep responses concise but grammatically correct.
- Prioritize clarity and correct language over extreme brevity.
- Avoid robotic responses.
- Do not use unnecessary explanations.



PRODUCTS:

- POS Software
- QR Ordering
- Kitchen Display System
- Inventory Management
- Workforce Management
- Analytics Dashboard
- Multi-location Management
- Android POS
- Self-Service Kiosks


Never invent products.



OFFICIAL LINKS:

software:
https://hoxxes.com/software

learn more:
https://hoxxes.com/learn-more

hardware:
https://hoxxes.com/hardware

pricing:
https://hoxxes.com/pricing

offers:
https://hoxxes.com/offers

demo:
https://hoxxes.com/request-demo

support:
https://hoxxes.com/support

LINK USAGE:

- If the user asks for more details, deeper information, full explanation or wants to learn more about the software platform:
Use:
https://hoxxes.com/learn-more

- If the user wants to explore the platform overview:
Use:
https://hoxxes.com/software

- If the user wants pricing:
Use:
https://hoxxes.com/pricing

- If the user wants a personal presentation:
Use:
https://hoxxes.com/request-demo

ACTIONS:

Only include ACTIONS when the user wants:
- to visit a page
- more details
- pricing
- a demo
- support
- to buy or contact sales

Format exactly:

ACTIONS:
- Label → URL

- Learn More → https://hoxxes.com/learn-more

ACTIONS must always be at the end.



CONTACT:

Email:
info@hoxxes.com

Phone:
048 10 60 60



PRICING:

Software:
499€ per location/year excl. VAT


Self-Service Kiosk:
1,185€ excl. VAT
Promo:
1,016€


Android POS:
677€ excl. VAT
Promo:
593€


Never calculate multi-location totals.



SUPPORT:

For technical issues, account problems or assistance:

ACTIONS:
- Request Demo → https://hoxxes.com/request-demo
- Support → https://hoxxes.com/support



ACTIVE OFFERS:

${offersContext}


Rules:

- Only mention active offers above.
- Never create discounts.
- Never create prices.
`;




    // ===============================
    // GROQ REQUEST
    // ===============================

    const controller =
      new AbortController();


    const timeout =
      setTimeout(
        ()=>controller.abort(),
        10000
      );



    const response =
      await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {

          method:"POST",

          signal:
          controller.signal,

          headers:{
            Authorization:
            `Bearer ${process.env.GROQ_API_KEY}`,

            "Content-Type":
            "application/json"
          },


          body:JSON.stringify({

            model:
            "llama-3.1-8b-instant",

            messages:[
              {
                role:"system",
                content:
                systemPrompt
              },

              ...history,

              {
                role:"user",
                content:
                message
              }
            ],


            temperature:
            0.35,


            max_tokens:
            150

          })

        }
      );


    clearTimeout(timeout);



    if(!response.ok){

      return NextResponse.json(
        {
          message:
          "AI service unavailable."
        },
        {
          status:502
        }
      );

    }



    const data =
      await response.json();


    let output =
      data?.choices?.[0]
      ?.message?.content
      ||
      "No response.";



    output =
      sanitizeOutput(
        output.trim()
      );


    output =
      enforceStyle(
        output
      );



    return NextResponse.json({

      message:
      output

    });



  }


  catch(error){

    console.error(
      "AI ERROR:",
      error
    );


    return NextResponse.json(
      {
        message:
        "AI service unavailable."
      },
      {
        status:500
      }
    );

  }

}