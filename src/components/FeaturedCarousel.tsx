import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { projects } from "@/data/site";
import { ArrowRight } from "lucide-react";

const featured = projects.slice(0, 5);

export function FeaturedCarousel() {
  const [i, setI] = useState(0);
  
  return (
    <div 
      className="relative overflow-hidden rounded-3xl shadow-elegant bg-brand-dark"
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {featured.map((p) => (
          <div key={p.id} className="relative min-w-full aspect-[16/9] md:aspect-[21/9]">
            <img
              src={p.cover}
              alt={p.title}
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest bg-brand-gold text-brand-dark px-3 py-1 rounded-full">
                {p.category}
              </span>
              <h3 className="mt-3 text-2xl md:text-4xl font-bold">{p.title}</h3>
              {p.client && (
                <p className="mt-1 text-white/80 text-sm md:text-base">
                  Client: {p.client}
                </p>
              )}
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:underline"
              >
                View Project <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 right-4 md:right-8 flex gap-2">
        {featured.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${
              idx === i ? "w-8 bg-brand-gold" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
