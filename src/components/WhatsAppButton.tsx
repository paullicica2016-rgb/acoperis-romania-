"use client";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3">
      {/* Phone icon only */}
      <a
        href="tel:0735097539"
        className="w-14 h-14 bg-[#0d1547] hover:bg-[#0a1040] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110"
        aria-label="Suna acum"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.6.57 1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.61 22 2 13.39 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.01l-2.2 2.21z"/>
        </svg>
      </a>

      {/* WhatsApp icon */}
      <a
        href="https://wa.me/40735097539"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" width="56" height="56">
          <circle cx="29" cy="29" r="29" fill="#25D366"/>
          <path fill="white" d="M29 13C20.2 13 13 20.2 13 29c0 2.9.8 5.6 2.1 8L13 45l8.3-2.1c2.3 1.2 4.9 1.9 7.7 1.9 8.8 0 16-7.2 16-16S37.8 13 29 13zm8.2 22.2c-.3.9-1.8 1.7-2.5 1.8-.6.1-1.4.1-2.3-.1-.5-.2-1.2-.4-2-.7-3.5-1.5-5.8-5-6-5.2-.2-.2-1.5-2-.8-3.7.5-1.1 1.2-1.7 1.7-2 .4-.3.9-.3 1.2-.3h.8c.3 0 .6.1.9.7l1.2 2.9c.1.3.1.6 0 .9l-.5.8-.4.5c.2.3.8 1.2 1.8 2 1.2 1 2.2 1.3 2.5 1.4.3-.4.9-1.1 1.2-1.4.2-.2.5-.3.7-.2l2.8 1.3c.3.1.5.3.5.5.2.5.1 1.4-.8 2.8z"/>
        </svg>
      </a>
    </div>
  );
}
