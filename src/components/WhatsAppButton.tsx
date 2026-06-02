import { company } from "@/data/site";

export function WhatsAppButton() {
  const href = `https://wa.me/${company.phoneDigits}?text=${encodeURIComponent(
    company.whatsappMessage,
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-[#25D366] text-white shadow-elegant flex items-center justify-center animate-float-slow hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="size-7 fill-current" aria-hidden="true">
        <path d="M19.11 17.36c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.15-1.33-.8-.71-1.33-1.59-1.49-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 4C9.94 4 5 8.94 5 15.02c0 2.16.63 4.17 1.72 5.86L5 28l7.31-1.92a10.95 10.95 0 003.71.64h.01C22.1 26.72 27 21.78 27 15.7 27 8.94 22.1 4 16.02 4z" />
      </svg>
    </a>
  );
}
