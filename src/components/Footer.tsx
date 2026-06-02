import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-brand-dark text-white/80">
      <div className="container-narrow py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="bg-white/95 rounded-xl p-3 inline-block">
            <img src={company.logo} alt="Kuber Enterprise" className="h-14 w-auto" />
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            {company.description}
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/projects", "Projects"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-brand-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="size-4 mt-0.5 text-brand-gold" />
              <a href={`tel:${company.phoneDigits}`} className="hover:text-brand-gold">
                {company.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="size-4 mt-0.5 text-brand-gold" />
              <a href={`mailto:${company.email}`} className="hover:text-brand-gold break-all">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-white/70">
              <MapPin className="size-4 mt-0.5 text-brand-gold" />
              Gujarat, India
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-narrow py-5 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <span>© 2026 Kuber Enterprise. All Rights Reserved.</span>
          <span>Civil Construction & Infrastructure Contractor</span>
        </div>
      </div>
    </footer>
  );
}
