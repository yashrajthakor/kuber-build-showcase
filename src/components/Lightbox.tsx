import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-fade-up">
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
      >
        <X className="size-6" />
      </button>
      <button
        onClick={onPrev}
        aria-label="Previous"
        className="absolute left-3 md:left-6 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
      >
        <ChevronLeft className="size-7" />
      </button>
      <img
        src={images[index]}
        alt={`Gallery image ${index + 1}`}
        className="max-h-[90vh] max-w-[92vw] object-contain"
      />
      <button
        onClick={onNext}
        aria-label="Next"
        className="absolute right-3 md:right-6 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
      >
        <ChevronRight className="size-7" />
      </button>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-sm">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
