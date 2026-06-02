import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Maximize2 } from "lucide-react";
import { projects, projectCategories, filterByCategory } from "@/data/site";
import { Lightbox } from "@/components/Lightbox";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Kuber Enterprise" },
      { name: "description", content: "Construction project gallery — underground water sumps, RCC works, pipelines, boundary walls, industrial buildings and more." },
      { property: "og:title", content: "Project Gallery — Kuber Enterprise" },
      { property: "og:description", content: "Visual portfolio of completed civil and infrastructure projects." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState<string>("All");
  const [lb, setLb] = useState<number | null>(null);

  const images = useMemo(() => {
    const list = filterByCategory(cat);
    return list.flatMap((p) =>
      p.images.map((src, i) => ({
        src,
        alt: `${p.title} — image ${i + 1}`,
        title: p.title,
        category: p.category,
      })),
    );
  }, [cat]);

  return (
    <>
      <section className="container-narrow pt-16 pb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
          Gallery
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">Project Gallery</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          A visual portfolio of completed civil construction and infrastructure
          works.
        </p>
      </section>

      <section className="container-narrow">
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCat(c);
                setLb(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                cat === c
                  ? "gradient-brand text-white border-transparent shadow-elegant"
                  : "bg-card border-border hover:border-brand-blue"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-narrow py-10 pb-24">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance]">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLb(i)}
              className="group mb-3 md:mb-4 break-inside-avoid block w-full overflow-hidden rounded-xl bg-muted relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-3">
                <span className="text-left">
                  <span className="block text-xs text-brand-gold font-semibold uppercase tracking-wider">
                    {img.category}
                  </span>
                  <span className="block text-sm text-white font-medium leading-tight">
                    {img.title}
                  </span>
                </span>
                <Maximize2 className="size-5 text-white absolute top-3 right-3" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {lb !== null && (
        <Lightbox
          images={images.map((i) => i.src)}
          index={lb}
          onClose={() => setLb(null)}
          onPrev={() =>
            setLb((i) =>
              i === null ? null : (i - 1 + images.length) % images.length,
            )
          }
          onNext={() =>
            setLb((i) => (i === null ? null : (i + 1) % images.length))
          }
        />
      )}
    </>
  );
}
