import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Home } from 'lucide-react';
import { business } from '@/data/business';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Felix Electric</title>
        <meta name="description" content="The page you're looking for doesn't exist. Visit Felix Electric for licensed electrician service in Tucson, AZ." />
        <link rel="canonical" href="https://felixelectricaz.com/404" />
      </Helmet>

      <section className="flex min-h-[70vh] items-center justify-center pt-20">
        <div className="container-x text-center">
          <div className="font-display text-7xl font-extrabold text-volt-500/20 md:text-9xl">404</div>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-white">Page Not Found</h1>
          <p className="mt-4 text-ink-300">The page you're looking for doesn't exist or has moved.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/" className="btn-outline">
              <Home className="h-4 w-4" /> Back to Home
            </Link>
            <a href={`tel:${business.phoneRaw}`} className="btn-call">
              <Phone className="h-4 w-4" /> {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
