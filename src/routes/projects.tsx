import { createFileRoute, Link, Outlet, useChildMatches } from "@tanstack/react-router";
import { useState } from "react";
import { Images } from "lucide-react";
import { projects, projectCategories, filterByCategory } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Kuber Enterprise" },
      { name: "description", content: "Explore our completed civil construction and infrastructure projects — water sumps, RCC, industrial buildings, pipelines and more." },
      { property: "og:title", content: "Projects — Kuber Enterprise" },
      { property: "og:description", content: "Featured GWSSB and industrial construction projects executed by Kuber Enterprise." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const childMatches = useChildMatches();
  const hasChildRoute = childMatches.length > 0;
  const [cat, setCat] = useState<string>("All");
  const list = filterByCategory(cat);

  // If a child route is active (detail page), render it
  if (hasChildRoute) {
    return <Outlet />;
  }

  return (
    <>
      <section className="container-narrow pt-16 pb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
          Portfolio
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">Our Projects</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          A selection of completed civil construction and infrastructure works
          delivered by Kuber Enterprise.
        </p>
      </section>

      <section className="container-narrow">
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <Link
              key={p.id}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-elegant transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wide bg-brand-gold text-brand-dark px-3 py-1 rounded-full">
                  {p.category}
                </span>
                <span className="absolute top-3 right-3 text-xs font-semibold bg-brand-dark/80 text-white px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Images className="size-3" />
                  {p.images.length}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold leading-snug">{p.title}</h3>
                {p.client && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    Client: {p.client}
                  </p>
                )}
                <span className="mt-3 inline-block text-sm font-semibold text-brand-blue group-hover:underline">
                  View Project →
                </span>
              </div>
            </Link>
          ))}
        </div>
        {list.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No projects in this category yet.
          </p>
        )}
      </section>
    </>
  );
}
