declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Track phone call click conversion */
export function trackPhoneConversion(url: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17767684704/qlzLCKfM1JQcEOC0pZhC",
      value: 1.0,
      currency: "RON",
      event_callback: () => {
        window.location.href = url;
      },
    });
    return false;
  }
  return true;
}

/** Track form submission conversion */
export function trackFormConversion() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17767684704/lsnvCKrM1JQcEOC0pZhC",
      value: 1.0,
      currency: "RON",
    });
  }
}
