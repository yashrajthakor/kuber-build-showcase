import { createFileRoute, Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import {
  company,
  services,
  stats,
  whyChooseUs,
  projects,
} from "@/data/site";
import { Counter } from "@/components/Counter";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kuber Enterprise | Civil Construction & Infrastructure Contractor" },
      {
        name: "description",
        content:
          "Premier civil construction and infrastructure contractor in Gujarat — RCC works, underground water sumps, DI pipelines, boundary walls and industrial buildings.",
      },
      { property: "og:title", content: "Kuber Enterprise — Civil Construction & Infrastructure" },
      {
        property: "og:description",
        content:
          "Delivering quality construction and infrastructure projects with reliability, precision, and commitment.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function Icon({ name, className }: { name: string; className?: string }) {
  const C = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ?? Icons.Square;
  return <C className={className} />;
}

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={company.heroImage}
            alt="Kuber Enterprise civil construction site"
            className="size-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/70 to-brand-blue/40" />
        </div>
        <div className="relative container-narrow py-24 md:py-36 text-white">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 rounded-full animate-fade-up">
            {company.tagline}
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-up max-w-4xl">
            Kuber Enterprise
            <span className="block text-gradient-brand mt-2">
              Civil Construction & Infrastructure Solutions
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl animate-fade-up">
            Delivering quality construction and infrastructure projects with
            reliability, precision, and commitment — for GWSSB, industries and
            private clients across Gujarat.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 animate-fade-up">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold gradient-brand text-white shadow-elegant hover:opacity-95"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold bg-white/10 border border-white/30 backdrop-blur text-white hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-5"
              >
                <div className="text-3xl md:text-4xl font-bold text-brand-gold font-display">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs md:text-sm text-white/75">
                  {s.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* FEATURED PROJECTS CAROUSEL */}
      <section className="container-narrow py-20 md:py-24">
        <SectionHead
          eyebrow="Featured Work"
          title="Recent Featured Projects"
          subtitle="A glimpse of our completed civil and infrastructure projects."
        />
        <div className="mt-10">
          <FeaturedCarousel />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-muted/40 py-20 md:py-24">
        <div className="container-narrow">
          <SectionHead
            eyebrow="What We Do"
            title="Our Construction Services"
            subtitle="End-to-end civil construction expertise across water, RCC, industrial and pipeline works."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((s) => (
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
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
            >
              View all services <Icons.ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="container-narrow py-20 md:py-24">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionHead
            eyebrow="Portfolio"
            title="Selected Projects"
            subtitle="Built for GWSSB, industrial clients and infrastructure programs."
          />
          <Link
            to="/projects"
            className="text-sm font-semibold text-brand-blue hover:underline"
          >
            All Projects →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p) => (
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
              </div>
              <div className="p-5">
                <h3 className="font-semibold leading-snug">{p.title}</h3>
                {p.client && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    Client: {p.client}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-brand-dark text-white py-20 md:py-24">
        <div className="container-narrow">
          <SectionHead
            eyebrow="Why Choose Us"
            title="Engineering Excellence, Delivered"
            subtitle="What makes Kuber Enterprise a trusted civil construction partner."
            invert
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <div className="size-11 rounded-xl bg-brand-gold text-brand-dark flex items-center justify-center">
                  <Icon name={w.icon} className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
                <p className="mt-1.5 text-sm text-white/70">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-narrow py-20 md:py-24">
        <div className="rounded-3xl gradient-brand p-10 md:p-16 text-white text-center shadow-elegant">
          <h2 className="text-3xl md:text-5xl font-bold">
            Have a construction project in mind?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white/90">
            Let's discuss your civil construction or infrastructure requirement.
            We deliver quality, on time and on budget.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold bg-white text-brand-dark hover:bg-brand-gold transition"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}

export function SectionHead({
  eyebrow,
  title,
  subtitle,
  invert,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] ${
            invert ? "text-brand-gold" : "text-brand-blue"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-3 text-3xl md:text-4xl font-bold ${
          invert ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base ${
            invert ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
