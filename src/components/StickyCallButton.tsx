import { Phone } from 'lucide-react';
import { business } from '@/data/business';

export default function StickyCallButton() {
  return (
    <a
      href={`tel:${business.phoneRaw}`}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-volt-500 px-5 py-3.5 font-bold text-ink-950 shadow-glow animate-pulse-glow transition hover:bg-volt-400 active:scale-95 sm:hidden"
      aria-label={`Call ${business.name} at ${business.phoneDisplay}`}
    >
      <Phone className="h-5 w-5" />
      Call Now
    </a>
  );
}
