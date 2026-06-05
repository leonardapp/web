"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);

    // Ketu mund te inicializosh Google Analytics
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60]">
      <div className="max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-white shadow-xl p-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="font-semibold text-lg">
              Cookie Preferences
            </h3>

            <p className="text-sm text-gray-600 mt-1">
              We use cookies to improve your experience and analyze website
              traffic. Read our{" "}
              <Link
                href="/legal/cookie-policy"
                className="underline"
              >
                Cookie Policy
              </Link>{" "}
              for more information.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
  onClick={rejectCookies}
  className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
>
  Reject Non-Essential
</button>

<button
  onClick={acceptCookies}
  className="w-full sm:w-auto px-4 py-2 rounded-lg bg-black text-white hover:opacity-90"
>
  Accept Cookies
</button>
          </div>
        </div>
      </div>
    </div>
  );
}