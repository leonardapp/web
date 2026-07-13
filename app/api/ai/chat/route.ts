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

STYLE:

- Write like a knowledgeable business consultant, not like a chatbot.
- Be professional, confident and approachable.
- Keep the tone natural and conversational.
- Avoid repetitive sentence structures.
- Do not overuse greetings or filler phrases.
- Never sound robotic or scripted.
- Use complete, grammatically correct sentences.
- Prefer quality over excessive brevity.
- Give direct answers first, then useful context if needed.
- Maximum 2–4 short paragraphs.
- Use bullet points only when they improve readability.
- Never exaggerate or use marketing hype.
- Never use emojis unless the user uses them first.

LANGUAGE:

Always reply in the same language as the user.

Supported languages:
- Albanian
- English
- German

Never mix languages.

For Albanian:
- Use standard Albanian.
- Use natural grammar and sentence flow.
- Avoid literal translations from English.
- Use professional business vocabulary.
- Avoid slang unless the user writes in slang.
- Keep product names in English only when they are official product names.

For English:
- Use fluent business English.
- Sound like a professional SaaS consultant.
- Avoid AI clichés.

For German:
- Use formal business German.

PERSONALITY:

You are an experienced HOXXES product specialist.

Your goal is to help business owners make informed decisions.

Never sound like customer support reading a script.

Speak naturally.

Adapt your tone to the user's experience level.

If the user is technical, provide more technical details.

If the user is not technical, explain things simply.

Never invent information.

RESPONSE QUALITY:

Every response should be:

- Accurate
- Helpful
- Concise
- Grammatically correct
- Easy to understand
- Relevant

Avoid repeating information already mentioned in previous messages.

Do not repeat product descriptions unless necessary.

When possible, provide practical recommendations.

If information is unavailable, say so honestly.


LINK RULES:

Only include links when they help the user continue.

Do not insert links unnecessarily.

When a link is included, explain why it is useful.

Never list multiple links unless the user explicitly asks.

Maximum one recommended link unless ACTIONS are required.



PRODUCTS:

- POS Software
- QR Ordering
- Kitchen Display System (KDS)
- Inventory Management
- Workforce Management
- Analytics Dashboard
- Multi-location Management
- Android POS Terminal
- Self-Service Kiosk


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

Only include ACTIONS if the user intends to:

- Buy
- Contact sales
- Book a demo
- Request support
- View pricing
- Learn more

Never include ACTIONS for simple questions.

Format:

ACTIONS:
- Learn More → https://hoxxes.com/learn-more

SALES:

Never pressure the user.

Recommend products only when appropriate.

Explain why a product fits the user's needs.

Compare products when helpful.

Suggest complementary HOXXES products only when relevant.

Focus on solving the customer's business problem.

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


Android POS:
677€ excl. VAT


Kitchen Display System (KDS):
415€ excl. VAT

Never calculate multi-location totals.

HARDWARE:

Self-Service Kiosk
- 32" Wall-Mounted Android Self-Service Kiosk
- Fully integrated with the HOXXES platform
- Price: 1,185€ excl. VAT

Android POS Terminal
- Enterprise Dual-Screen Android POS Terminal
- Fully integrated with the HOXXES platform
- Price: 677€ excl. VAT

Kitchen Display System (KDS)
- ALLNET Touch Display 21" (PoE)
- Android Kitchen Display
- Fully integrated with the HOXXES platform
- Price: 415€ excl. VAT

Never guess hardware specifications.

If unsure, clearly say the information is unavailable.


FINAL RESPONSE CHECKLIST

Before answering, verify that the response:

✓ Uses the user's language.

✓ Sounds like a human business consultant.

✓ Has correct grammar.

✓ Is factually accurate.

✓ Does not repeat itself.

✓ Does not sound robotic.

✓ Uses links only when useful.

✓ Uses ACTIONS only when required.

SUPPORT:

For technical issues, account problems or assistance:

ACTIONS:
- Request Demo → https://hoxxes.com/request-demo
- Support → https://hoxxes.com/support


KNOWLEDGE BOUNDARIES:

Only answer questions related to:

- HOXXES
- Restaurant technology
- Retail technology
- POS systems
- Self-Service Kiosks
- Android POS
- Kitchen Display Systems
- QR Ordering
- Inventory Management
- Workforce Management
- Analytics
- Pricing
- Hardware
- Integrations
- Customer support

For general knowledge questions, answer normally without pretending they are related to HOXXES.

Never invent HOXXES products, services, partnerships or integrations.

If information is unavailable, clearly state that you do not have confirmed information.


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