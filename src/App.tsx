import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import ServicesIndex from '@/pages/ServicesIndex';
import ServiceAreasIndex from '@/pages/ServiceAreasIndex';
import Reviews from '@/pages/Reviews';
import FAQ from '@/pages/FAQ';
import ServicePage from '@/pages/ServicePage';
import LocationPage from '@/pages/LocationPage';
import NotFound from '@/pages/NotFound';
import { services, serviceAreas } from '@/data/services';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<ServicesIndex />} />
              <Route path="/service-areas" element={<ServiceAreasIndex />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/:slug" element={<DynamicPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <StickyCallButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

function DynamicPage() {
  const { slug = '' } = useParams<{ slug: string }>();

  const service = services.find((s) => s.slug === slug);
  if (service) return <ServicePage service={service} />;

  if (slug.startsWith('electrician-')) {
    const areaSlug = slug.replace('electrician-', '');
    const area = serviceAreas.find((a) => a.slug === areaSlug);
    if (area) return <LocationPage area={area} type="electrician" />;
  }

  if (slug.startsWith('electrical-services-')) {
    const areaSlug = slug.replace('electrical-services-', '');
    const area = serviceAreas.find((a) => a.slug === areaSlug);
    if (area) return <LocationPage area={area} type="services" />;
  }

  return <NotFound />;
}
