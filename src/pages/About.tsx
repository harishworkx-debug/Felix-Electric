import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Award, ShieldCheck, Users, Wrench, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { business, images } from '@/data/business';
import CTASection from '@/components/CTASection';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Felix Electric | Trusted Tucson Electrician Since 2009</title>
        <meta name="description" content="Learn about Felix Electric — licensed electricians serving Tucson, AZ for 15+ years. Honest pricing, expert workmanship, and reliable service. Call (520) 929-0296." />
        <link rel="canonical" href="https://felixelectricaz.com/about" />
      </Helmet>

      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0">
          <img src={images.portrait2} alt={images.portrait2Alt} className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/92 to-ink-950/50" />
        </div>
        <div className="relative container-x max-w-2xl">
          <span className="eyebrow"><Zap className="h-3.5 w-3.5" /> About Us</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold text-white md:text-5xl">
            Southern Arizona's Trusted Electrician
          </h1>
          <p className="mt-5 text-lg text-ink-200">
            Felix Electric has been powering Tucson homes and businesses for over 15 years with safe,
            reliable, and honest electrical service.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-white">Our Story</h2>
            <div className="mt-5 space-y-4 text-ink-200 leading-relaxed">
              <p>
                Felix Electric was founded with a simple mission: provide Tucson homeowners and businesses
                with electrical service they can actually trust. No upsells, no surprise charges, no
                cutting corners — just honest, expert work done right the first time.
              </p>
              <p>
                Over the past {business.yearsServing} years, we've grown from a one-truck operation into a
                trusted team of licensed electricians serving the entire Tucson metro area. But our
                commitment hasn't changed: treat every customer's home like it's our own, and back every
                job with a workmanship guarantee.
              </p>
              <p>
                We're proud to be a locally owned business serving our community — from the historic
                neighborhoods of central Tucson to the growing communities of Marana, Oro Valley, and
                Vail. When you call Felix Electric, you're calling a neighbor.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Award, value: `${business.yearsServing}+`, label: 'Years' },
                { icon: Users, value: '2,500+', label: 'Jobs Done' },
                { icon: ShieldCheck, value: '100%', label: 'Guaranteed' },
              ].map((s, i) => (
                <div key={i} className="card text-center">
                  <s.icon className="mx-auto h-8 w-8 text-volt-400" />
                  <div className="mt-3 font-display text-2xl font-extrabold text-white">{s.value}</div>
                  <div className="text-xs text-ink-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <img src={images.wiring} alt={images.wiringAlt} className="w-full rounded-2xl object-cover shadow-card" loading="lazy" />
            <img src={images.industrial} alt={images.industrialAlt} className="w-full rounded-2xl object-cover shadow-card" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink-900/30">
        <div className="container-x">
          <h2 className="text-center font-display text-3xl font-extrabold text-white md:text-4xl">Our Values</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, title: 'Safety First', desc: 'Every job done to code, every time. No shortcuts, no exceptions.' },
              { icon: Wrench, title: 'Expert Workmanship', desc: 'Licensed electricians with years of training and real-world experience.' },
              { icon: CheckCircle2, title: 'Honest Pricing', desc: 'Flat-rate quotes approved by you before any work begins.' },
              { icon: Users, title: 'Customer Respect', desc: 'Clean uniforms, shoe covers, and a spotless cleanup on every visit.' },
            ].map((v, i) => (
              <div key={i} className="card">
                <v.icon className="h-8 w-8 text-volt-400 mb-3" />
                <h3 className="font-display text-base font-bold text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
