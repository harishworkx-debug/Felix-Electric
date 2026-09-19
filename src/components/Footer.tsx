import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Facebook, Instagram, Star } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/services';

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-volt-500">
                <Zap className="h-5 w-5 text-ink-950" fill="currentColor" />
              </div>
              <span className="font-display text-lg font-extrabold text-white">
                Felix<span className="text-volt-400"> Electric</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Licensed electrician serving Tucson and Southern Arizona. Safe, reliable electrical
              work for homes and businesses since 2009.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-spark-400" fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-semibold text-ink-200">
                {business.rating} · {business.reviewCount} reviews
              </span>
            </div>
            <div className="mt-4 flex gap-3">
              <a href={business.socials.facebook} aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 text-ink-300 transition hover:border-volt-500 hover:text-volt-400">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={business.socials.instagram} aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 text-ink-300 transition hover:border-volt-500 hover:text-volt-400">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-volt-400">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="text-sm text-ink-400 transition hover:text-white">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-sm font-semibold text-volt-400 hover:underline">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-volt-400">Service Areas</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/electrician-tucson-az" className="text-sm text-ink-400 transition hover:text-white">
                  Electrician Tucson
                </Link>
              </li>
              {serviceAreas.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link to={`/electrician-${area.slug}`} className="text-sm text-ink-400 transition hover:text-white">
                    Electrician {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/service-areas" className="text-sm font-semibold text-volt-400 hover:underline">
                  View all areas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-volt-400">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-3 text-sm text-ink-200 transition hover:text-volt-400">
                  <Phone className="h-4 w-4 text-volt-400 shrink-0" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`} className="flex items-center gap-3 text-sm text-ink-200 transition hover:text-volt-400">
                  <Mail className="h-4 w-4 text-volt-400 shrink-0" />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-200">
                <MapPin className="h-4 w-4 text-volt-400 shrink-0 mt-0.5" />
                <span>{business.city}, {business.stateShort}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-200">
                <Clock className="h-4 w-4 text-volt-400 shrink-0 mt-0.5" />
                <div>
                  <p>Mon–Fri: 7AM–7PM</p>
                  <p>Sat: 8AM–5PM</p>
                  <p>Sun: Emergency Only</p>
                </div>
              </li>
            </ul>
            <a href={`tel:${business.phoneRaw}`} className="btn-call mt-5 w-full">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} {business.name}. {business.license} · {business.insurance}
          </p>
          <p className="text-xs text-ink-500">
            Serving Tucson, Marana, Oro Valley, Sahuarita & Southern Arizona
          </p>
        </div>
      </div>
    </footer>
  );
}
