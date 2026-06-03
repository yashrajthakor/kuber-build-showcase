import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { company } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Kuber Enterprise" },
      { name: "description", content: "Contact Kuber Enterprise for civil construction, RCC works, water sumps and pipeline projects. Call +91 96871 23941." },
      { property: "og:title", content: "Contact Kuber Enterprise" },
      { property: "og:description", content: "Get in touch for your next civil construction or infrastructure project." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const requirement = String(data.get("requirement") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Project Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nMobile: ${phone}\nEmail: ${email}\nRequirement: ${requirement}\n\nMessage:\n${message}`,
    );
    // Open mail client with prefilled message to info@kuber-enterprise.in
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  }

  return (
    <>
      <section className="container-narrow pt-16 pb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
          Contact
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold">Get In Touch</h1>
        <p className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Tell us about your civil construction or infrastructure requirement —
          our team will get back to you shortly.
        </p>
      </section>

      <section className="container-narrow py-10 pb-24 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <a
            href={`tel:${company.phoneDigits}`}
            className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 hover:shadow-elegant transition"
          >
            <div className="size-11 rounded-xl gradient-brand text-white flex items-center justify-center">
              <Phone className="size-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Phone
              </div>
              <div className="font-semibold">{company.phone}</div>
            </div>
          </a>
          <a
            href={`mailto:${company.email}`}
            className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5 hover:shadow-elegant transition"
          >
            <div className="size-11 rounded-xl gradient-brand text-white flex items-center justify-center">
              <Mail className="size-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </div>
              <div className="font-semibold break-all">{company.email}</div>
            </div>
          </a>
          <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-5">
            <div className="size-11 rounded-xl gradient-brand text-white flex items-center justify-center">
              <MapPin className="size-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Location
              </div>
              <div className="font-semibold">Gujarat, India</div>
            </div>
          </div>
        </div>

        {/* <form
          onSubmit={onSubmit}
          className="lg:col-span-2 rounded-3xl bg-card border border-border p-6 md:p-8 shadow-elegant"
        >
          {sent && (
            <div className="mb-6 flex items-center gap-3 rounded-xl bg-brand-green/15 text-brand-dark border border-brand-green/40 px-4 py-3">
              <CheckCircle2 className="size-5 text-brand-green" />
              <p className="text-sm font-medium">
                Thank you! Your message has been prepared. Please send the email
                from your mail client to complete.
              </p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" required />
            <Field label="Mobile Number" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required />
            <Field
              label="Project Requirement"
              name="requirement"
              placeholder="e.g. Underground Water Sump"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1.5">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
              placeholder="Tell us a bit about your project..."
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold gradient-brand text-white shadow-elegant hover:opacity-95"
          >
            <Send className="size-4" />
            Send Message
          </button>
        </form> */}
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
      />
    </div>
  );
}
