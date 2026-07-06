"use client";

interface PhoneLinkProps {
  children: React.ReactNode;
  className?: string;
}

export default function PhoneLink({ children, className }: PhoneLinkProps) {
  return (
    <a
      href="tel:0735097539"
      className={className}
      onClick={() => {
        if (typeof window !== "undefined" && window.gtag)
          window.gtag("event", "conversion", {
            send_to: "AW-17767684704/qlzLCKfM1JQcEOC0pZhC",
            value: 1.0,
            currency: "RON",
          });
      }}
    >
      {children}
    </a>
  );
}
