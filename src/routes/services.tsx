import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Kuber Enterprise" },
      { name: "description", content: "Civil construction services — underground water sumps, RCC works, building construction, DI/PVC pipelines, shuttering, boundary walls and rubble soling." },
      { property: "og:title", content: "Construction Services — Kuber Enterprise" },
      { property: "og:description", content: "Comprehensive civil construction and infrastructure services across Gujarat." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function Icon({ name, className }: { name: string; className?: string }) {
  const C = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ?? Icons.Square;
  return <C className={className} />;
}

function ServicesPage() {
  return (
    <>
      <section className="container-narrow pt-16 pb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
          Services
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">
          Our Construction Services
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          From underground water sumps and RCC works to industrial buildings and
          pipeline projects — we provide end-to-end civil construction
          execution with quality and discipline.
        </p>
      </section>

      <section className="container-narrow pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.slug}
              className="group rounded-2xl bg-card border border-border p-6 hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="size-12 rounded-xl gradient-brand text-white flex items-center justify-center group-hover:scale-110 transition">
                <Icon name={s.icon} className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-narrow pb-24">
        <div className="rounded-3xl gradient-brand p-10 md:p-14 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Looking for a reliable civil contractor?
          </h2>
          <p className="mt-3 text-white/90">
            Talk to us about your next infrastructure or construction project.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold bg-white text-brand-dark hover:bg-brand-gold transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
