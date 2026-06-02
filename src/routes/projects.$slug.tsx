import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Maximize2, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/site";
import { Lightbox } from "@/components/Lightbox";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const idx = projects.findIndex((p) => p.slug === params.slug);
    if (idx === -1) throw notFound();
    return {
      project: projects[idx],
      prev: projects[(idx - 1 + projects.length) % projects.length],
      next: projects[(idx + 1) % projects.length],
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.title} | Kuber Enterprise` },
      { name: "description", content: loaderData?.project.description ?? "" },
      { property: "og:title", content: loaderData?.project.title ?? "" },
      { property: "og:description", content: loaderData?.project.description ?? "" },
      { property: "og:image", content: loaderData?.project.cover ?? "" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `/projects/${loaderData?.project.slug}` }],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="container-narrow py-32 text-center">
      <h1 className="text-4xl font-bold">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-brand-blue underline">
        Back to projects
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-narrow py-32 text-center">
      <h1 className="text-2xl font-bold">Couldn't load project</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function ProjectDetail() {
  const { project, prev, next } = Route.useLoaderData();
  const [lb, setLb] = useState<number | null>(null);

  return (
    <>
      <section className="relative">
        <div className="aspect-[21/9] md:aspect-[21/8] overflow-hidden">
          <img src={project.cover} alt={project.title} className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent" />
        </div>
        <div className="container-narrow relative -mt-24 md:-mt-32 pb-2 text-white">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] bg-brand-gold text-brand-dark px-3 py-1 rounded-full">
            {project.category}
          </span>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold max-w-4xl">{project.title}</h1>
        </div>
      </section>

      <section className="container-narrow py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold">Project Overview</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>
        <aside className="rounded-2xl bg-card border border-border p-6 h-fit">
          <h3 className="font-semibold">Project Details</h3>
          <dl className="mt-4 space-y-3 text-sm">
            {project.client && (
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Client</dt>
                <dd className="font-medium text-right">{project.client}</dd>
              </div>
            )}
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Category</dt>
              <dd className="font-medium text-right">{project.category}</dd>
            </div>
            {project.area && (
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Area</dt>
                <dd className="font-medium text-right">{project.area}</dd>
              </div>
            )}
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Status</dt>
              <dd className="font-medium text-right inline-flex items-center gap-1.5 text-brand-green">
                <CheckCircle2 className="size-4" />
                {project.status}
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="container-narrow pb-12">
        <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {project.images.map((src: string, i: number) => (
            <button
              key={i}
              onClick={() => setLb(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted"
            >
              <img
                src={src}
                alt={`${project.title} — image ${i + 1}`}
                loading="lazy"
                className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition flex items-center justify-center">
                <Maximize2 className="size-6 text-white opacity-0 group-hover:opacity-100 transition" />
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="container-narrow pb-24 grid sm:grid-cols-2 gap-4">
        <Link
          to="/projects/$slug"
          params={{ slug: prev.slug }}
          className="group rounded-2xl border border-border bg-card p-5 hover:shadow-elegant transition flex items-center gap-4"
        >
          <ArrowLeft className="size-5 text-brand-blue" />
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Previous
            </div>
            <div className="font-semibold leading-tight group-hover:text-brand-blue">
              {prev.title}
            </div>
          </div>
        </Link>
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group rounded-2xl border border-border bg-card p-5 hover:shadow-elegant transition flex items-center gap-4 sm:text-right sm:flex-row-reverse"
        >
          <ArrowRight className="size-5 text-brand-blue" />
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">
              Next
            </div>
            <div className="font-semibold leading-tight group-hover:text-brand-blue">
              {next.title}
            </div>
          </div>
        </Link>
      </section>

      {lb !== null && (
        <Lightbox
          images={project.images}
          index={lb}
          onClose={() => setLb(null)}
          onPrev={() =>
            setLb((i) =>
              i === null ? null : (i - 1 + project.images.length) % project.images.length,
            )
          }
          onNext={() =>
            setLb((i) => (i === null ? null : (i + 1) % project.images.length))
          }
        />
      )}
    </>
  );
}
