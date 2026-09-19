import { Phone, ShieldCheck, Clock, Star } from 'lucide-react';
import { business } from '@/data/business';

export default function CTASection({
  title = 'Need an Electrician in Tucson Today?',
  subtitle = 'Call now for fast, reliable service from licensed Tucson electricians. Same-day appointments available.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-volt-600/30 bg-gradient-to-br from-ink-900 via-ink-900 to-volt-900/20 p-8 md:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-volt-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-volt-500/10 blur-3xl" />
          <div className="relative text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-spark-400" fill="currentColor" />
              ))}
            </div>
            <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-ink-300 md:text-lg">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={`tel:${business.phoneRaw}`} className="btn-call-lg animate-pulse-glow">
                <Phone className="h-5 w-5" />
                Call {business.phoneDisplay}
              </a>
              <a href="/contact" className="btn-outline">
                Request a Quote
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-400">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-volt-400" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-volt-400" />
                Same-Day Service
              </span>
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-volt-400" />
                {business.rating} Rating ({business.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
