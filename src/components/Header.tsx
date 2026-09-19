import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Zap, ChevronDown } from 'lucide-react';
import { business } from '@/data/business';
import { services, serviceAreas } from '@/data/services';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-ink-950/95 backdrop-blur-md border-b border-ink-800'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-volt-500 shadow-glow-sm">
            <Zap className="h-5 w-5 text-ink-950" fill="currentColor" />
          </div>
          <span className="font-display text-lg font-extrabold tracking-tight text-white">
            Felix<span className="text-volt-400"> Electric</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            to="/"
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              location.pathname === '/' ? 'text-volt-400' : 'text-ink-200 hover:text-white'
            }`}
          >
            Home
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                location.pathname.startsWith('/residential') ||
                location.pathname.startsWith('/commercial') ||
                location.pathname.startsWith('/electrical') ||
                location.pathname.startsWith('/emergency') ||
                location.pathname.startsWith('/ev') ||
                location.pathname.startsWith('/lighting') ||
                location.pathname.startsWith('/outlet') ||
                location.pathname.startsWith('/ceiling')
                  ? 'text-volt-400'
                  : 'text-ink-200 hover:text-white'
              }`}
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-72 pt-2">
                <div className="rounded-xl border border-ink-700 bg-ink-950/98 p-2 shadow-card backdrop-blur-md">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}`}
                      className="block rounded-lg px-3 py-2.5 text-sm text-ink-200 transition hover:bg-volt-500/10 hover:text-volt-400"
                    >
                      {s.shortTitle}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block rounded-lg border-t border-ink-800 px-3 py-2.5 text-sm font-semibold text-volt-400 transition hover:bg-volt-500/10"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Service Areas dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAreasOpen(true)}
            onMouseLeave={() => setAreasOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold transition ${
                location.pathname.startsWith('/electrician-') ||
                location.pathname.startsWith('/electrical-services-') ||
                location.pathname === '/service-areas'
                  ? 'text-volt-400'
                  : 'text-ink-200 hover:text-white'
              }`}
            >
              Service Areas
              <ChevronDown className={`h-3.5 w-3.5 transition ${areasOpen ? 'rotate-180' : ''}`} />
            </button>
            {areasOpen && (
              <div className="absolute left-0 top-full w-56 pt-2">
                <div className="rounded-xl border border-ink-700 bg-ink-950/98 p-2 shadow-card backdrop-blur-md">
                  {serviceAreas.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/electrician-${a.slug}`}
                      className="block rounded-lg px-3 py-2.5 text-sm text-ink-200 transition hover:bg-volt-500/10 hover:text-volt-400"
                    >
                      {a.name}
                    </Link>
                  ))}
                  <Link
                    to="/service-areas"
                    className="block rounded-lg border-t border-ink-800 px-3 py-2.5 text-sm font-semibold text-volt-400 transition hover:bg-volt-500/10"
                  >
                    View All Areas →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/reviews"
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              location.pathname === '/reviews' ? 'text-volt-400' : 'text-ink-200 hover:text-white'
            }`}
          >
            Reviews
          </Link>
          <Link
            to="/about"
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              location.pathname === '/about' ? 'text-volt-400' : 'text-ink-200 hover:text-white'
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              location.pathname === '/contact' ? 'text-volt-400' : 'text-ink-200 hover:text-white'
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${business.phoneRaw}`}
            className="hidden items-center gap-2 rounded-lg bg-volt-500 px-4 py-2.5 text-sm font-bold text-ink-950 shadow-glow-sm transition hover:bg-volt-400 hover:shadow-glow active:scale-95 sm:flex"
          >
            <Phone className="h-4 w-4" />
            {business.phoneDisplay}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-ink-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-ink-800 bg-ink-950 lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="container-x flex flex-col py-4">
            <Link to="/" className="rounded-lg px-4 py-3 text-sm font-semibold text-ink-200 hover:bg-ink-800 hover:text-white">
              Home
            </Link>

            {/* Mobile Services accordion */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-ink-200 hover:bg-ink-800"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="ml-4 border-l border-ink-800 pl-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="block rounded-lg px-3 py-2.5 text-sm text-ink-300 hover:text-volt-400"
                  >
                    {s.shortTitle}
                  </Link>
                ))}
                <Link to="/services" className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-volt-400">
                  View All →
                </Link>
              </div>
            )}

            {/* Mobile Service Areas accordion */}
            <button
              onClick={() => setAreasOpen(!areasOpen)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-ink-200 hover:bg-ink-800"
            >
              Service Areas
              <ChevronDown className={`h-4 w-4 transition ${areasOpen ? 'rotate-180' : ''}`} />
            </button>
            {areasOpen && (
              <div className="ml-4 border-l border-ink-800 pl-3">
                {serviceAreas.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/electrician-${a.slug}`}
                    className="block rounded-lg px-3 py-2.5 text-sm text-ink-300 hover:text-volt-400"
                  >
                    {a.name}
                  </Link>
                ))}
                <Link to="/service-areas" className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-volt-400">
                  View All →
                </Link>
              </div>
            )}

            <Link to="/reviews" className="rounded-lg px-4 py-3 text-sm font-semibold text-ink-200 hover:bg-ink-800 hover:text-white">
              Reviews
            </Link>
            <Link to="/about" className="rounded-lg px-4 py-3 text-sm font-semibold text-ink-200 hover:bg-ink-800 hover:text-white">
              About
            </Link>
            <Link to="/contact" className="rounded-lg px-4 py-3 text-sm font-semibold text-ink-200 hover:bg-ink-800 hover:text-white">
              Contact
            </Link>
            <a href={`tel:${business.phoneRaw}`} className="btn-call mt-3 w-full">
              <Phone className="h-4 w-4" />
              Call {business.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
