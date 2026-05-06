"use client";

import { useEffect } from "react";

export default function ClickGuard() {
  useEffect(() => {
    // Track this visit
    fetch("/api/click-guard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "visit" }),
    }).catch(() => {});

    // Track conversions: phone clicks, form submits, WhatsApp clicks
    function trackConversion() {
      fetch("/api/click-guard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "conversion" }),
      }).catch(() => {});
    }

    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      // Phone click or WhatsApp click = real user
      if (href.startsWith("tel:") || href.includes("wa.me") || href.includes("whatsapp")) {
        trackConversion();
      }
    }

    function handleSubmit() {
      trackConversion();
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("submit", handleSubmit);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("submit", handleSubmit);
    };
  }, []);

  return null;
}
