import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  BarChart2,
  Check,
  Menu,
  Play,
  ArrowRight,
  Globe2,
  Bell,
  UserPlus,
  UtensilsCrossed,
  ArrowDown,
} from 'lucide-react';
import { Logo } from '@/components/logo';

const HeroVisual = () => (
  <>
    <img
      src="/dashboard.png"
      alt="TableWay Today view showing reservations and covers"
      className="w-full rounded-2xl shadow-[0_40px_120px_rgba(0,0,0,0.7)] border border-white/8"
    />

    <div
      className="hidden lg:block absolute -bottom-12 -right-8 z-20"
      style={{ filter: 'drop-shadow(0 32px 48px rgba(0,0,0,0.6))' }}
    >
      <img
        src="/dashboard-mobile.png"
        alt="TableWay mobile login and staff access"
        className="w-[175px] rounded-[1.75rem] border-[8px] border-[#222] shadow-2xl"
      />
    </div>

    <div className="lg:hidden flex justify-center mt-10">
      <img
        src="/dashboard-mobile.png"
        alt="TableWay mobile login and staff access"
        className="w-[200px] max-w-[70vw] rounded-[1.75rem] border-[8px] border-[#222] shadow-2xl"
      />
    </div>
  </>
);

const featureCards = [
  { icon: <Globe2 className="w-7 h-7" strokeWidth={1.5} />, title: 'Online Reservations', desc: 'Share a public booking page and accept guest reservations online.' },
  { icon: <Calendar className="w-7 h-7" strokeWidth={1.5} />, title: 'Today & Calendar', desc: 'View and manage reservations on a daily timeline or calendar.' },
  { icon: <Users className="w-7 h-7" strokeWidth={1.5} />, title: 'Customers', desc: 'Keep guest profiles and reservation history in one place.' },
  { icon: <BarChart2 className="w-7 h-7" strokeWidth={1.5} />, title: 'Reports', desc: 'Track reservation trends and export CSV reports.' },
  { icon: <Bell className="w-7 h-7" strokeWidth={1.5} />, title: 'Automatic confirmation', desc: 'Confirm new reservations automatically or approve them manually.' },
  { icon: <UserPlus className="w-7 h-7" strokeWidth={1.5} />, title: 'Staff', desc: 'Add team members with role-based access and Service Mode sign-in.' },
];

const pricingPlans = [
  {
    period: 'Month',
    price: '29€',
    slug: 'monthly',
    highlighted: false,
  },
  {
    period: '3 Months',
    price: '79€',
    slug: '3m',
    badge: 'Save 12%',
    highlighted: false,
  },
  {
    period: '6 Months',
    price: '149€',
    slug: '6m',
    badge: 'Best Value',
    highlighted: true,
  },
  {
    period: '12 Months',
    price: '279€',
    slug: '12m',
    badge: 'Best Savings',
    highlighted: false,
  },
];

const pricingFeatures = [
  'Everything Included',
  'Unlimited Reservations',
  'Unlimited Staff Accounts',
  'Customers',
  'Reports',
  'Mobile Staff Access',
  'No Commission Fees',
  'Cancel Anytime',
];

const howItWorksSteps = [
  {
    num: '01',
    icon: <UtensilsCrossed className="w-7 h-7" strokeWidth={1.5} />,
    title: 'Create Your Restaurant',
    desc: 'Create your restaurant account and complete the basic setup in just a few minutes.',
  },
  {
    num: '02',
    icon: <Users className="w-7 h-7" strokeWidth={1.5} />,
    title: 'Invite Your Staff',
    desc: 'Invite your team with a few clicks and manage permissions directly from your dashboard.',
  },
  {
    num: '03',
    icon: <Calendar className="w-7 h-7" strokeWidth={1.5} />,
    title: 'Start Accepting Reservations',
    desc: 'Receive bookings online, manage your tables and grow your restaurant with TableWay.',
  },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-[#111111] text-white selection:bg-primary/30 font-sans overflow-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="https://tableway.app/auth/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Log in
            </Link>
            <Link
              href="https://tableway.app/auth/register?plan=12m"
              className="bg-primary hover:bg-primary/90 transition-colors text-white px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              Start free trial
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#111] border-b border-white/5 p-6 flex flex-col gap-4">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 font-medium py-2">Features</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 font-medium py-2">Pricing</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 font-medium py-2">How it works</a>
            <hr className="border-white/5 my-2" />
            <Link href="https://tableway.app/auth/login" className="text-gray-300 font-medium py-2">Log in</Link>
            <Link
              href="https://tableway.app/auth/register?plan=12m"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-primary text-white px-5 py-3 rounded-full text-sm font-semibold w-full mt-2 text-center"
            >
              Start free trial
            </Link>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 px-6 overflow-visible">
        {/* Ambient glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[140px] -z-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-4 py-2 rounded-full mb-8 tracking-wide">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Restaurant Reservation Software
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-7">
              <span className="text-white block">More Bookings.</span>
              <span className="text-primary block">Less Stress.</span>
            </h1>

            {/* Subheadline */}
            <div className="text-lg lg:text-xl text-gray-400 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 space-y-1">
              <p>Accept reservations 24/7.</p>
              <p>Reduce no-shows.</p>
              <p>Grow your restaurant with TableWay.</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12">
              <Link
                href="https://tableway.app/auth/register?plan=12m"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 active:scale-95 transition-all text-white px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 group shadow-[0_0_40px_rgba(34,197,94,0.25)]"
              >
                Start 30-day free trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all text-white px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-3"
              >
                <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center shrink-0">
                  <Play className="w-2.5 h-2.5 ml-0.5" fill="currentColor" />
                </span>
                See how it works
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3">
              {['30-day free trial', 'No commission fees', 'Cancel anytime'].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-gray-400">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/10 blur-[60px] -z-10 pointer-events-none rounded-full" />

            <HeroVisual />
          </motion.div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Simple Pricing</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              One system. Everything included.<br />
              No hidden fees. No add-ons. No commission.
            </p>
          </motion.div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#0f0f0f] border-2 border-primary shadow-[0_0_40px_rgba(34,197,94,0.12)]'
                    : 'bg-[#0f0f0f] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Badge */}
                {plan.badge ? (
                  <div className={`inline-flex self-start mb-6 px-3 py-1 rounded-full text-xs font-bold ${
                    plan.highlighted ? 'bg-primary text-white' : 'bg-white/8 text-gray-300'
                  }`}>
                    {plan.badge}
                  </div>
                ) : (
                  <div className="mb-6" />
                )}

                <div className="text-gray-400 text-sm font-medium mb-3">{plan.period}</div>
                <div className="text-5xl font-bold text-white mb-2">{plan.price}</div>
                <div className="text-gray-500 text-xs mb-1 font-medium">30-Day Free Trial included</div>

                <div className="my-7 h-px bg-white/8"></div>

                <ul className="space-y-3.5 flex-1 mb-8">
                  {pricingFeatures.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`https://tableway.app/auth/register?plan=${plan.slug}`}
                  className={`w-full py-3.5 rounded-full text-sm font-bold transition-all duration-200 text-center ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'border border-white/20 hover:bg-white/8 text-white'
                  }`}
                >
                  Start Free Trial
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom features list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <p className="text-sm font-medium text-gray-400 mb-6">Every plan includes:</p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {['Everything Included', 'No Hidden Costs', 'Free Updates', 'Unlimited Support', 'Cancel Anytime'].map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-primary" />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-28 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">How it works</h2>
            <p className="text-gray-400 text-lg">Get started in minutes.</p>
          </motion.div>

          {/* Steps */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-0 lg:gap-4">
            {howItWorksSteps.map((step, i) => (
              <React.Fragment key={i}>
                {/* Step card */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center text-center flex-1 px-4 lg:px-6"
                >
                  {/* Number */}
                  <div className="text-6xl lg:text-7xl font-bold text-primary/20 leading-none mb-6 tracking-tighter">
                    {step.num}
                  </div>
                  {/* Icon circle */}
                  <div className="w-16 h-16 rounded-2xl border border-white/10 bg-[#131313] flex items-center justify-center text-primary mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                </motion.div>

                {/* Connector arrow (between steps) */}
                {i < howItWorksSteps.length - 1 && (
                  <div className="flex lg:hidden items-center justify-center py-4 text-primary/40">
                    <ArrowDown className="w-6 h-6" />
                  </div>
                )}
                {i < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center self-center pb-10 text-primary/30">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-3xl lg:text-4xl font-bold text-white mb-10">Ready to get started?</p>
            <Link
              href="https://tableway.app/auth/register?plan=12m"
              className="bg-primary hover:bg-primary/90 transition-colors text-white px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 group"
            >
              Start Your 30-Day Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Everything you need.<br />
              <span className="text-primary">Nothing you don't.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              TableWay gives your restaurant everything needed to manage reservations efficiently — with no hidden costs or extra add-ons.
            </p>
          </motion.div>

          {/* 6 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-[#0f0f0f] border border-white/8 rounded-2xl p-8 hover:border-primary/30 hover:bg-[#131313] transition-all duration-300 cursor-default"
              >
                <div className="text-primary mb-5">{card.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Everything Included. No Add-ons. No Commission Fees.
            </p>
            <div className="mt-10">
              <Link
                href="https://tableway.app/auth/register?plan=12m"
                className="bg-primary hover:bg-primary/90 transition-colors text-white px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 group"
              >
                Start Your 30-Day Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-10 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-12 lg:gap-8 mb-16">

            {/* Logo Col */}
            <div className="flex flex-col">
              <div className="mb-8">
                <Logo />
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-xs font-semibold text-white tracking-wider mb-6">PRODUCT</h4>
              <ul className="space-y-4">
                {[
                  { label: 'Features', href: '#features' },
                  { label: 'Pricing', href: '#pricing' },
                  { label: 'How it works', href: '#how-it-works' },
                ].map((l, i) => (
                  <li key={i}><a href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-xs font-semibold text-white tracking-wider mb-6 uppercase">Company</h4>
              <ul className="space-y-4">
                {[
                  { label: 'About us', href: '/about' },
                  { label: 'Privacy policy', href: '/privacy-policy' },
                  { label: 'Terms of service', href: '/terms-of-service' },
                  { label: 'Contact us', href: '/contact' },
                ].map((l, i) => (
                  <li key={i}><Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* CTA Col */}
            <div className="flex flex-col lg:items-end text-left lg:text-right">
              <p className="text-white font-medium mb-2">Ready to get more bookings?</p>
              <p className="text-gray-400 text-sm mb-6">Start your 30-day free trial today.</p>
              <Link
                href="https://tableway.app/auth/register?plan=12m"
                className="bg-primary hover:bg-primary/90 transition-colors text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 max-w-max"
              >
                Start your free trial <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-gray-500">© 2026 TableWay A product by Oso System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
