import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    const { error } = await supabase.from('leads').insert({
      name: form.name,
      phone: form.phone,
      email: form.email || null,
      service: form.service || null,
      message: form.message || null,
      page_source: 'contact page',
    });
    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Felix Electric | Electrician Tucson AZ | (520) 929-0498</title>
        <meta name="description" content="Contact Felix Electric for licensed electrical service in Tucson, AZ. Call (520) 929-0498 or fill out our form for a free quote. Same-day service available." />
        <link rel="canonical" href="https://felixelectricaz.com/contact" />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
        <div className="relative container-x text-center">
          <span className="eyebrow"><Phone className="h-3.5 w-3.5" /> Get In Touch</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold text-white md:text-5xl">
            Contact Felix Electric
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-300">
            Call now for fast service or send us a message — we'll get back to you the same day.
          </p>
          <a href={`tel:${business.phoneRaw}`} className="btn-call-lg mt-8">
            <Phone className="h-5 w-5" /> Call {business.phoneDisplay}
          </a>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* FORM */}
            <div>
              <h2 className="font-display text-2xl font-extrabold text-white">Request a Free Quote</h2>
              <p className="mt-2 text-ink-400">Fill out the form and we'll call you back within the hour during business hours.</p>

              {status === 'success' ? (
                <div className="mt-8 rounded-2xl border border-volt-600/40 bg-volt-500/10 p-8 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-volt-400" />
                  <h3 className="mt-4 font-display text-xl font-bold text-white">Message Sent!</h3>
                  <p className="mt-2 text-ink-300">We'll contact you shortly. For urgent service, call us directly.</p>
                  <a href={`tel:${business.phoneRaw}`} className="btn-call mt-6">
                    <Phone className="h-4 w-4" /> {business.phoneDisplay}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {status === 'error' && (
                    <div className="flex items-center gap-3 rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      Something went wrong. Please call us at {business.phoneDisplay}.
                    </div>
                  )}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink-200">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-white placeholder-ink-500 focus:border-volt-500 focus:outline-none focus:ring-1 focus:ring-volt-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-ink-200">Phone *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-white placeholder-ink-500 focus:border-volt-500 focus:outline-none focus:ring-1 focus:ring-volt-500"
                        placeholder="(520) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-semibold text-ink-200">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-white placeholder-ink-500 focus:border-volt-500 focus:outline-none focus:ring-1 focus:ring-volt-500"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink-200">Service Needed</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-white focus:border-volt-500 focus:outline-none focus:ring-1 focus:ring-volt-500"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.shortTitle}>{s.shortTitle}</option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-ink-200">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-white placeholder-ink-500 focus:border-volt-500 focus:outline-none focus:ring-1 focus:ring-volt-500 resize-none"
                      placeholder="Tell us about your electrical project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-call-lg w-full disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="h-5 w-5" /> Send Message</>
                    )}
                  </button>
                  <p className="text-center text-xs text-ink-500">
                    Or call us directly at{' '}
                    <a href={`tel:${business.phoneRaw}`} className="font-semibold text-volt-400">{business.phoneDisplay}</a>
                  </p>
                </form>
              )}
            </div>

            {/* INFO + MAP */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-display text-lg font-bold text-white">Contact Information</h3>
                <div className="mt-5 space-y-4">
                  <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-4 group">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-volt-500/10">
                      <Phone className="h-5 w-5 text-volt-400" />
                    </div>
                    <div>
                      <div className="text-xs text-ink-400">Phone</div>
                      <div className="font-bold text-white group-hover:text-volt-400">{business.phoneDisplay}</div>
                    </div>
                  </a>
                  <a href={`mailto:${business.email}`} className="flex items-center gap-4 group">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-volt-500/10">
                      <Mail className="h-5 w-5 text-volt-400" />
                    </div>
                    <div>
                      <div className="text-xs text-ink-400">Email</div>
                      <div className="font-bold text-white group-hover:text-volt-400">{business.email}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-volt-500/10">
                      <MapPin className="h-5 w-5 text-volt-400" />
                    </div>
                    <div>
                      <div className="text-xs text-ink-400">Service Area</div>
                      <div className="font-bold text-white">{business.city}, {business.stateShort} & Southern Arizona</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-volt-500/10">
                      <Clock className="h-5 w-5 text-volt-400" />
                    </div>
                    <div>
                      <div className="text-xs text-ink-400">Business Hours</div>
                      <div className="text-sm text-white">
                        {business.hours.map((h) => (
                          <div key={h.day}>{h.day}: {h.time}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-ink-800 shadow-card">
                <iframe
                  src={business.mapsEmbed}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Felix Electric service area map - Tucson, AZ"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
