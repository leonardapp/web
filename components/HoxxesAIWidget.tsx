"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MessageSquare,
  Send,
  X,
  Sparkles,
} from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const starterQuestions = [
  "Product overview",
  "View pricing",
  "I need a kiosk",
  "Download Center",
];

export default function HoxxesAIWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I’m Hoxxes AI — your restaurant infrastructure assistant.\n\nI can help you deploy POS, QR ordering, kiosks, printers, and full restaurant automation at scale.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const parseMessage = (text: string) => {
  const actionMatch = text.match(/ACTIONS:\s*([\s\S]*)/i);

  let cleanText = text;
  let actions: { label: string; url: string }[] = [];

  if (actionMatch) {
  cleanText = text.split(/ACTIONS:/i)[0].trim();

  const lines = actionMatch[1]
    .split("\n")
    .map(l => l.trim())
    .filter(Boolean);

  const parsed = lines.map((line) => {
    const match = line.match(/(.+?)\s*→\s*(https?:\/\/[^\s]+)/);
    if (!match) return null;

    return {
      label: match[1].trim(),
      url: match[2].trim(),
    };
  })
  .filter(Boolean) as { label: string; url: string }[];

  // remove duplicates (VERY IMPORTANT)
  const seen = new Set();
  actions = parsed.filter(a => {
    if (seen.has(a.url)) return false;
    seen.add(a.url);
    return true;
  });
}

  return { cleanText, actions };
};

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage(customMessage?: string) {
    const text = customMessage || input;

    if (!text.trim() || loading) return;

    const userMessage: Message = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          history: messages,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data?.message ?? data?.text ?? ""
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Connection failed. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* FLOATING AI BUTTON */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 40 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            onClick={() => setOpen(true)}
            className="
              fixed
              bottom-6
              right-6
              z-[9999]
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/90
              text-white
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
              backdrop-blur-2xl
              transition-all
              duration-300
              hover:scale-110
              hover:shadow-[0_20px_100px_rgba(255,255,255,0.08)]
            "
          >
            {/* GLOW */}
            <div className="absolute inset-0 rounded-full bg-white/5 blur-xl" />

            {/* PULSE */}
            <div className="absolute h-full w-full animate-ping rounded-full bg-white/5 opacity-20" />

            <Sparkles className="relative h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* CHAT PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              bottom-6
              right-6
              z-[9999]
              flex
              h-[720px]
              w-[420px]
              max-w-[calc(100vw-24px)]
              flex-col
              overflow-hidden
              rounded-[34px]
              border
              border-white/10
              bg-black/95
              text-white
              shadow-[0_30px_120px_rgba(0,0,0,0.65)]
              backdrop-blur-2xl
            "
          >
            {/* TOP BAR */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                  <span className="text-sm font-medium">
                    Hoxxes AI
                  </span>
                </div>

                <p className="mt-1 text-xs text-white/40">
                  Restaurant operating system assistant
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white/60
                  transition
                  hover:bg-white/[0.08]
                  hover:text-white
                "
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto px-5 py-5">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`
                        max-w-[85%]
                        rounded-[24px]
                        px-4
                        py-3
                        text-[14px]
                        leading-relaxed
                        ${
                          message.role === "user"
                            ? "bg-white text-black"
                            : "border border-white/10 bg-white/[0.04] text-white"
                        }
                      `}
                    >
                      {(() => {
  const { cleanText, actions } = parseMessage(message.content);

  return (
    <>
      <div className="whitespace-pre-wrap text-sm leading-relaxed">
        {cleanText}
      </div>

      {actions.length > 0 && (
        <div className="mt-3 space-y-2">
          {actions.map((a, i) => (
  <a
    key={i}
    href={a.url}
    target="_blank"
    rel="noreferrer"
    className="
      inline-flex
      w-full
      items-center
      justify-center
      px-4
      py-2
      rounded-full
      bg-white
      text-black
      text-xs
      font-medium
      transition
      hover:scale-[1.02]
      active:scale-[0.98]
    "
  >
    {a.label}
  </a>
))}
        </div>
      )}
    </>
  );
})()}
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/60">
                      Thinking...
                    </div>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* STARTERS */}
              {messages.length <= 1 && (
                <div className="mt-8 grid gap-3">
                  {starterQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => sendMessage(question)}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-4
                        py-4
                        text-left
                        text-sm
                        text-white/80
                        transition
                        hover:border-white/20
                        hover:bg-white/[0.06]
                      "
                    >
                      <MessageSquare className="h-4 w-4 shrink-0" />

                      <span>{question}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* INPUT */}
            <div className="border-t border-white/10 p-5">
              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-2
                "
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage();
                    }
                  }}
                  placeholder="Ask Hoxxes AI..."
                  className="
                    flex-1
                    bg-transparent
                    px-2
                    py-2
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-white/30
                  "
                />

                <button
                  onClick={() => sendMessage()}
                  disabled={loading}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-black
                    transition
                    hover:scale-105
                    disabled:opacity-50
                  "
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-3 text-center text-[10px] tracking-wide text-white/25">
                POWERED BY HOXXES AI CLOUD
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}