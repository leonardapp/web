
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  MessageSquare,
  MessageCircle,
  Send,
  Sparkles,
  ChevronDown,
} from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ChatAction = {
  label: string;
  url: string;
};

const starterQuestions = [
  "Request a Demo",
  "View Pricing",
  "What hardware do I need?",
];

export default function HoxxesAIWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Parse assistant messages and ACTIONS links
  const parseMessage = (text: string) => {
    const actionMatch = text.match(/ACTIONS:\s*([\s\S]*)/i);

    let cleanText = text;
    let actions: ChatAction[] = [];

    if (actionMatch) {
      cleanText = text.split(/ACTIONS:/i)[0].trim();

      const lines = actionMatch[1]
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      const parsed = lines
        .map((line): ChatAction | null => {
          const match = line.match(
            /(.+?)\s*→\s*(https?:\/\/\S+)/ 
          );

          if (!match) return null;

          return {
            label: match[1].trim(),
            url: match[2].trim(),
          };
        })
        .filter((action): action is ChatAction => action !== null);

      // Remove duplicate URLs
      const seen = new Set<string>();

      actions = parsed.filter((action) => {
        if (seen.has(action.url)) return false;

        seen.add(action.url);
        return true;
      });
    }

    return { cleanText, actions };
  };

  // Scroll to the latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Welcome message
  useEffect(() => {
    if (!open) return;
    if (messages.length !== 0) return;

    setLoading(true);

    const timer = setTimeout(() => {
      setMessages([
        {
          role: "assistant",
          content:
            "👋 Welcome to Hoxxes AI! What would you like to explore today?",
        },
      ]);

      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [open, messages.length]);

  // Send message
  async function sendMessage(customMessage?: string) {
    const text = customMessage ?? input;

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

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data?.message ?? data?.text ?? "",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Connection failed. Please try again later.",
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
      type="button"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.2 }}
      onClick={() => setOpen(true)}
      aria-label="Open Hoxxes AI Chat"
      title="Hoxxes AI Chat"
      className="
        fixed
        bottom-4
        right-4
        md:bottom-6
        md:right-6
        z-[9999]
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-transparent
        bg-transparent
        text-[#88d21a]
        shadow-none
        transition-all
        duration-300
        hover:bg-black/10
        hover:border-white/10
        hover:scale-110
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#88d21a]
        active:scale-95
      "
    >
      {/* CHAT ICON */}
      <MessageCircle
        className="h-9 w-9"
        strokeWidth={2}
        aria-hidden="true"
      />

      {/* AI STATUS INDICATOR */}
      <span
        className="
          absolute
          right-[1px]
          top-[1px]
          h-3
          w-3
          rounded-full
          border-2
          border-white
          bg-[#88d21a]
        "
        aria-hidden="true"
      />
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
              bottom-4
              md:bottom-6
              right-4
              md:right-6
              z-[9999]
              flex
              h-[80vh]
              md:h-[720px]
              w-[calc(100vw-24px)]
              md:w-[420px]
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
            role="dialog"
            aria-label="Hoxxes AI Assistant"
            aria-modal="false"
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

              {/* Close button */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close Hoxxes AI"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-white/70
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5">
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
                        const { cleanText, actions } = parseMessage(
                          message.content
                        );

                        return (
                          <>
                            <div className="whitespace-pre-wrap text-sm leading-relaxed">
                              {cleanText}
                            </div>

                            {actions.length > 0 && (
                              <div className="mt-3 space-y-2">
                                {actions.map((action, i) => (
                                  <a
                                    key={i}
                                    href={action.url}
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
                                      bg-[#88d21a]
                                      text-[#17210c]
                                      text-xs
                                      font-medium
                                      transition
                                      hover:scale-[1.02]
                                      active:scale-[0.98]
                                    "
                                  >
                                    {action.label}
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

                {/* Loading */}
                {loading && (
                  <div className="flex justify-start">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/60">
                      Hoxxes AI is typing...
                    </div>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* STARTER QUESTIONS */}
              {messages.length <= 1 && (
                <div className="mt-8 grid gap-3">
                  {starterQuestions.map((question) => (
                    <button
                      type="button"
                      key={question}
                      onClick={() => sendMessage(question)}
                      disabled={loading}
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
                        hover:border-[#88d21a]/50
                        hover:bg-[#88d21a]/10
                        disabled:opacity-50
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
                    if (e.key === "Enter" && !loading) {
                      sendMessage();
                    }
                  }}
                  placeholder="Ask Hoxxes AI..."
                  aria-label="Message Hoxxes AI"
                  className="
                    min-w-0
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
                  type="button"
                  onClick={() => sendMessage()}
                  disabled={loading || !input.trim()}
                  aria-label="Send message"
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#88d21a]
                    text-[#17210c]
                    transition
                    hover:scale-105
                    disabled:opacity-50
                  "
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              {/* Close Chat */}
              <div className="flex justify-center py-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Minimize Hoxxes AI"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/5
                    text-white/80
                    transition
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  <ChevronDown className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-2 text-center text-[10px] tracking-wide text-white/25">
                POWERED BY HOXXES AI CLOUD
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
