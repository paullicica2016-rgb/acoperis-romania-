"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = "cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
        analytics_storage: "granted",
        functionality_storage: "granted",
        personalization_storage: "granted",
      });
    }
    setVisible(false);
  }

  function reject() {
    try {
      localStorage.setItem(STORAGE_KEY, "rejected");
    } catch {}
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
      });
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consimțământ cookie-uri"
      className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4"
    >
      <div className="mx-auto max-w-5xl rounded-xl bg-[#0d1547] text-white shadow-2xl ring-1 ring-white/10">
        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="text-sm leading-relaxed text-gray-200">
            Folosim cookie-uri pentru a analiza traficul și a îmbunătăți
            experiența ta (Google Analytics, Google Ads). Poți accepta toate
            cookie-urile sau le poți refuza pe cele de marketing. Detalii în{" "}
            <Link
              href="/politica-de-cookies"
              className="font-semibold text-white underline underline-offset-2 hover:text-gray-300"
            >
              Politica de Cookie-uri
            </Link>
            .
          </p>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={reject}
              className="rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Refuz
            </button>
            <button
              type="button"
              onClick={accept}
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#0d1547] transition-colors hover:bg-gray-200"
            >
              Accept toate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
