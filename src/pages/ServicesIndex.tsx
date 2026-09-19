import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight, Zap, Home, Building2, Wrench, Siren, BatteryCharging, Lightbulb, ToggleRight, Fan, ShieldCheck } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import CTASection from '@/components/CTASection';

const iconMap: Record<string, typeof Home> = {
  Home, Building2, Wrench, Siren, Zap, BatteryCharging, Lightbulb, ToggleRight, Fan, ShieldCheck,
};

export default function ServicesIndex() {
  return (
    <>
      <Helmet>
        <title>Electrical Services Tucson AZ | Felix Electric</title>
        <meta name="description" content="Full range of electrical services in Tucson, AZ — residential, commercial, repair, panel upgrades, EV chargers, lighting, inspections & emergency service. Call (520) 304-3644." />
        <link rel="canonical" href="https://felixelectricaz.com/services" />
      </Helmet>

      <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
        <div className="relative container-x text-center">
          <span className="eyebrow"><Zap className="h-3.5 w-3.5" /> Our Services</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold text-white md:text-5xl">
            Electrical Services in Tucson, AZ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-300">
            From simple repairs to full installations — Felix Electric handles all your electrical needs
            with licensed, insured, and guaranteed work.
          </p>
          <a href={`tel:${business.phoneRaw}`} className="btn-call-lg mt-8">
            <Phone className="h-5 w-5" /> Call {business.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Zap;
              return (
                <Link key={s.slug} to={`/${s.slug}`} className="card group flex flex-col">
                  <img src={s.image} alt={s.imageAlt} className="mb-4 h-40 w-full rounded-xl object-cover" loading="lazy" />
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-volt-500/10">
                      <Icon className="h-5 w-5 text-volt-400" />
                    </div>
                    <h2 className="font-display text-lg font-bold text-white group-hover:text-volt-400">{s.shortTitle}</h2>
                  </div>
                  <p className="flex-1 text-sm text-ink-400">{s.summary}</p>
                  <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-volt-400">
                    Explore {s.shortTitle} <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
