"use client";

import { useState } from "react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; text: string }[]
  >([]);

  async function send() {
    if (!input.trim()) return;

    const userMsg = input;
    setInput("");

    setMessages((m) => [...m, { role: "user", text: userMsg }]);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMsg }),
      });

      const text = await res.text();

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        setMessages((m) => [
          ...m,
          { role: "ai", text: "Invalid server response" },
        ]);
        return;
      }

      if (!res.ok) {
        setMessages((m) => [
          ...m,
          { role: "ai", text: data.error || "AI error" },
        ]);
        return;
      }

      setMessages((m) => [
        ...m,
        { role: "ai", text: data.reply || "No response" },
      ]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: "ai", text: "Network error" },
      ]);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-black text-white px-4 py-3 rounded-full"
      >
        AI
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-[420px] bg-white border rounded-xl flex flex-col">
          <div className="p-3 border-b font-medium">
            HOXXES AI
          </div>

          <div className="flex-1 p-3 overflow-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <div className={m.role === "user"
                  ? "bg-black text-white px-3 py-2 rounded-lg inline-block"
                  : "bg-slate-100 px-3 py-2 rounded-lg inline-block"
                }>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border px-2 py-1 rounded"
              placeholder="Ask..."
            />
            <button
              onClick={send}
              className="bg-black text-white px-3 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}