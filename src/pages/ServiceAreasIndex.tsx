import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ChevronRight, Zap } from 'lucide-react';
import { business } from '@/data/business';
import { serviceAreas } from '@/data/services';
import CTASection from '@/components/CTASection';

export default function ServiceAreasIndex() {
  return (
    <>
      <Helmet>
        <title>Service Areas | Electrician Tucson & Southern Arizona | Felix Electric</title>
        <meta name="description" content="Felix Electric serves Tucson, Marana, Oro Valley, Sahuarita, Green Valley, Catalina, Vail & more. Find your area and call (520) 929-0296 for electrical service." />
        <link rel="canonical" href="https://felixelectricaz.com/service-areas" />
      </Helmet>

      <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
        <div className="relative container-x text-center">
          <span className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Service Areas</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold text-white md:text-5xl">
            Where We Serve
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-300">
            Proudly serving Tucson and all of Southern Arizona. Click your area for local service info.
          </p>
          <a href={`tel:${business.phoneRaw}`} className="btn-call-lg mt-8">
            <Phone className="h-5 w-5" /> Call {business.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link to="/electrician-tucson-az" className="card group flex items-center justify-between">
              <div>
                <div className="font-display text-lg font-bold text-white group-hover:text-volt-400">Tucson</div>
                <div className="text-sm text-ink-400">Pima County · Main Service Area</div>
              </div>
              <ChevronRight className="h-5 w-5 text-ink-500 group-hover:text-volt-400" />
            </Link>
            {serviceAreas.map((area) => (
              <Link key={area.slug} to={`/electrician-${area.slug}`} className="card group flex items-center justify-between">
                <div>
                  <div className="font-display text-lg font-bold text-white group-hover:text-volt-400">{area.name}</div>
                  <div className="text-sm text-ink-400">{area.county} · {area.distance}</div>
                </div>
                <ChevronRight className="h-5 w-5 text-ink-500 group-hover:text-volt-400" />
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-ink-800 bg-ink-900/50 p-8 text-center">
            <Zap className="mx-auto h-10 w-10 text-volt-400" />
            <h2 className="mt-4 font-display text-2xl font-extrabold text-white">Don't See Your Area?</h2>
            <p className="mt-2 text-ink-300">We serve all of Southern Arizona. Call us and we'll let you know if we can help.</p>
            <a href={`tel:${business.phoneRaw}`} className="btn-call mt-6">
              <Phone className="h-4 w-4" /> {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
