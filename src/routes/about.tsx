import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import { company, stats } from "@/data/site";
import { Counter } from "@/components/Counter";
import hero from "@/assets/proj-rcc.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Kuber Enterprise" },
      { name: "description", content: "About Kuber Enterprise — civil construction, RCC works, water sumps, pipelines and infrastructure contractor in Gujarat." },
      { property: "og:title", content: "About Kuber Enterprise" },
      { property: "og:description", content: "Quality, reliability, and commitment in civil construction and infrastructure projects." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-narrow pt-16 pb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
          About
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">
          About Kuber Enterprise
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          {company.description}
        </p>
        <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
          We are committed to delivering quality workmanship, timely execution,
          safety, and customer satisfaction across every project we undertake —
          from underground water sumps for the Gujarat Water Supply & Sewerage
          Board (GWSSB) to industrial buildings and pipeline networks.
        </p>
      </section>

      <section className="container-narrow">
        <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[21/9]">
          <img src={hero} alt="Kuber Enterprise team on site" className="size-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="container-narrow py-20 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-card border border-border p-8">
          <div className="size-12 rounded-xl gradient-brand text-white flex items-center justify-center">
            <Target className="size-6" />
          </div>
          <h2 className="mt-5 text-2xl font-bold">Our Mission</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Provide reliable and quality infrastructure solutions through
            disciplined engineering, skilled execution and uncompromising
            standards on every site.
          </p>
        </div>
        <div className="rounded-3xl bg-brand-dark text-white p-8">
          <div className="size-12 rounded-xl bg-brand-gold text-brand-dark flex items-center justify-center">
            <Eye className="size-6" />
          </div>
          <h2 className="mt-5 text-2xl font-bold">Our Vision</h2>
          <p className="mt-3 text-white/75 leading-relaxed">
            Become a trusted construction partner across Gujarat and India,
            recognised for quality water and civil infrastructure delivery.
          </p>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container-narrow grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-card border border-border p-5 text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-blue font-display">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-narrow py-20">
        <h2 className="text-3xl md:text-4xl font-bold">What we stand for</h2>
        <ul className="mt-8 grid sm:grid-cols-2 gap-4 max-w-3xl">
          {[
            "Strict quality control on materials and workmanship",
            "Engineered shuttering, rebar and RCC execution",
            "Compliance with civil engineering safety standards",
            "Transparent project communication and reporting",
            "Skilled and experienced site teams",
            "Long-term client relationships",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3 rounded-xl bg-card border border-border p-4">
              <CheckCircle2 className="size-5 text-brand-green mt-0.5" />
              <span className="text-sm">{t}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
