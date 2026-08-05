import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  BarChart2,
  Check,
  ChevronDown,
  Menu,
  Play,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Globe2,
  LayoutDashboard,
  Bell,
  UserPlus,
  UtensilsCrossed,
  ArrowDown,
} from 'lucide-react';
import { Logo } from '@/components/logo';

const LaptopMockup = () => (
  <div className="relative w-full aspect-[16/10] bg-[#1a1a1a] rounded-t-2xl border-x-[6px] border-t-[6px] border-[#2a2a2a] shadow-2xl overflow-hidden flex flex-col mx-auto">
    <div className="flex-1 bg-white overflow-hidden flex">
      {/* Sidebar */}
      <div className="w-[28%] bg-[#0a0a0a] border-r border-[#1a1a1a] p-4 flex flex-col gap-1">
        <div className="flex items-center gap-2 mb-6 px-2">
          <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
            <div className="w-2 h-[2px] bg-primary rounded-full"></div>
          </div>
          <span className="text-primary text-sm font-bold">TableWay</span>
        </div>
        <div className="bg-primary/10 text-primary text-xs p-2 rounded-md flex items-center gap-2 mb-1">
          <BarChart2 className="w-3.5 h-3.5" />
          Overview
        </div>
        {['Reservations', 'Calendar', 'Customers', 'Reports', 'Settings'].map((item, i) => (
          <div key={i} className="text-gray-400 hover:text-gray-300 text-xs p-2 flex items-center gap-2 transition-colors">
            <div className="w-3.5 h-3.5 opacity-60">
              {i === 0 && <Calendar className="w-3.5 h-3.5" />}
              {i === 1 && <Calendar className="w-3.5 h-3.5" />}
              {i === 2 && <Users className="w-3.5 h-3.5" />}
              {i === 3 && <BarChart2 className="w-3.5 h-3.5" />}
              {i === 4 && <div className="w-3.5 h-3.5 border-2 border-current rounded-full" />}
            </div>
            {item}
          </div>
        ))}
      </div>
      {/* Main Content */}
      <div className="flex-1 bg-gray-50/50 p-6 flex flex-col">
        <h3 className="text-gray-900 font-semibold mb-6 text-base">Overview</h3>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[{ v: '26', l: 'Reservations today' }, { v: '72', l: 'Covers today' }, { v: '12:00', l: 'Next booking' }].map((s, i) => (
            <div key={i} className="bg-white p-4 border border-gray-100 rounded-lg shadow-sm flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-gray-900 mb-1">{s.v}</div>
              <div className="text-[9px] text-gray-500 font-medium">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm flex-1 flex flex-col">
          <div className="px-4 py-3 border-b border-gray-50 text-[11px] font-semibold text-gray-900">Today's reservations</div>
          <div className="px-4 flex-1">
            {[
              { time: '12:00', name: 'John Smith', pax: '4 people' },
              { time: '12:15', name: 'Maria Garcia', pax: '2 people' },
              { time: '12:30', name: 'The Johnsons', pax: '5 people' },
              { time: '13:00', name: 'David Brown', pax: '3 people' },
              { time: '13:30', name: 'Olivia Davis', pax: '2 people' },
            ].map((row, i) => (
              <div key={i} className="flex justify-between items-center py-2.5 text-[10px] border-b border-gray-50 last:border-0">
                <span className="text-gray-500 font-medium w-10 sm:w-12 shrink-0">{row.time}</span>
                <span className="text-gray-900 font-medium flex-1 truncate px-1">{row.name}</span>
                <span className="text-gray-500 font-medium shrink-0">{row.pax}</span>
              </div>
            ))}
          </div>
          <div className="py-2.5 text-center text-[10px] text-primary bg-blue-50/30 font-medium border-t border-gray-50">
            View all reservations
          </div>
        </div>
      </div>
    </div>
    <div className="h-4 bg-[#2a2a2a] w-full rounded-b-2xl border-t border-[#1a1a1a] flex justify-center items-start">
      <div className="w-20 h-1 bg-[#1a1a1a] rounded-b-md"></div>
    </div>
  </div>
);

const PhoneMockup = () => (
  <div className="w-[240px] aspect-[1/2.15] bg-white rounded-[2rem] border-[10px] border-[#1a1a1a] shadow-2xl overflow-hidden relative flex flex-col">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a1a] rounded-b-2xl z-10"></div>
    <div className="flex-1 px-5 pt-10 pb-5 bg-gray-50 flex flex-col">
      <h3 className="text-gray-900 font-bold text-sm mb-5">New reservation</h3>
      <div className="space-y-4 flex-1">
        {[
          { label: 'Date', value: '24 May 2026', icon: <Calendar className="w-3.5 h-3.5 text-gray-400" /> },
          { label: 'Time', value: '19:30', icon: <ChevronDown className="w-3.5 h-3.5 text-gray-400" /> },
        ].map((f, i) => (
          <div key={i} className="space-y-1.5">
            <label className="text-[10px] text-gray-500 font-semibold">{f.label}</label>
            <div className="text-[11px] font-medium text-gray-900 bg-white border border-gray-200 p-2.5 rounded-lg flex justify-between items-center">
              <span>{f.value}</span>{f.icon}
            </div>
          </div>
        ))}
        <div className="space-y-1.5">
          <label className="text-[10px] text-gray-500 font-semibold">Guests</label>
          <div className="text-[11px] text-gray-900 bg-white border border-gray-200 p-2.5 rounded-lg flex justify-between items-center">
            <span className="text-gray-400 font-bold cursor-pointer px-2">-</span>
            <span className="font-bold">4</span>
            <span className="text-gray-400 font-bold cursor-pointer px-2">+</span>
          </div>
        </div>
        {[{ label: 'Name', value: 'Maria Garcia' }, { label: 'Phone', value: '+34 600 123 456' }].map((f, i) => (
          <div key={i} className="space-y-1.5">
            <label className="text-[10px] text-gray-500 font-semibold">{f.label}</label>
            <div className="text-[11px] font-medium text-gray-900 bg-white border border-gray-200 p-2.5 rounded-lg">{f.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="w-full bg-primary hover:bg-primary/90 transition-colors text-white text-[11px] py-3 rounded-lg font-semibold shadow-sm">
          Confirm reservation
        </button>
        <div className="mt-4 text-center flex items-center justify-center gap-1.5">
          <Check className="w-3.5 h-3.5 text-primary" />
          <span className="text-[9px] text-gray-500 font-medium leading-tight text-left">
            Instant confirmation<br />24/7 online booking
          </span>
        </div>
      </div>
    </div>
  </div>
);

const featureCards = [
  { icon: <Globe2 className="w-7 h-7" strokeWidth={1.5} />, title: 'Online Reservations', desc: 'Accept reservations 24/7 from your website.' },
  { icon: <Users className="w-7 h-7" strokeWidth={1.5} />, title: 'Guest Database', desc: 'Store guest information and build stronger customer relationships.' },
  { icon: <Bell className="w-7 h-7" strokeWidth={1.5} />, title: 'Automatic Confirmations', desc: 'Reduce no-shows with automatic booking confirmations.' },
  { icon: <UserPlus className="w-7 h-7" strokeWidth={1.5} />, title: 'Staff Access', desc: 'Invite your team and manage reservations together.' },
];

const pricingPlans = [
  {
    period: '3 Months',
    price: '79€',
    badge: 'Save 12%',
    highlighted: false,
  },
  {
    period: '6 Months',
    price: '149€',
    badge: 'Best Value',
    highlighted: true,
  },
  {
    period: '12 Months',
    price: '279€',
    badge: 'Best Savings',
    highlighted: false,
  },
];

const pricingFeatures = [
  'Everything Included',
  'Unlimited Reservations',
  'Unlimited Staff Accounts',
  'Guest Database',
  'Reports & Insights',
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
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Log in
            </Link>
            <button className="bg-primary hover:bg-primary/90 transition-colors text-white px-5 py-2.5 rounded-full text-sm font-semibold">
              Start free trial
            </button>
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
            <Link href="/" className="text-gray-300 font-medium py-2">Log in</Link>
            <button className="bg-primary text-white px-5 py-3 rounded-full text-sm font-semibold w-full mt-2">
              Start free trial
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-screen opacity-30"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col z-10"
          >
            <h1 className="text-5xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight mb-6">
              <span className="text-white block">MORE BOOKINGS.</span>
              <span className="text-primary block">LESS STRESS.</span>
            </h1>

            <div className="text-xl lg:text-2xl text-gray-300 mb-10 space-y-1 font-light tracking-wide">
              <p>Accept reservations 24/7.</p>
              <p>Reduce no-shows.</p>
              <p>Grow your restaurant – all for €29/month.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 transition-colors text-white px-8 py-3.5 rounded-full text-base font-semibold flex items-center justify-center gap-2 group">
                Start 30-day free trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto border border-white/20 hover:bg-white/5 transition-colors text-white px-8 py-3.5 rounded-full text-base font-semibold flex items-center justify-center gap-3">
                <span className="w-6 h-6 rounded-full border border-white flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 ml-0.5" fill="currentColor" />
                </span>
                See how it works
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
              {[
                { title: '30-day free trial', sub: 'No credit card required' },
                { title: 'No commission fees', sub: 'Keep 100% of your revenue' },
                { title: 'Cancel anytime', sub: 'No contracts' },
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">{b.title}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column (Mockups) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative lg:ml-8 w-full mt-8 lg:mt-0 flex justify-center lg:block"
          >
            <div className="relative w-full max-w-[700px] flex-shrink-0 scale-90 sm:scale-100 origin-top">
              <LaptopMockup />
              <div className="absolute -bottom-10 right-4 sm:-right-4 lg:-right-12 z-20 transform -rotate-2 origin-bottom-right">
                <PhoneMockup />
              </div>
            </div>
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
              <button className="bg-primary hover:bg-primary/90 transition-colors text-white px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 group">
                Start Your 30-Day Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
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
            <button className="bg-primary hover:bg-primary/90 transition-colors text-white px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 group">
              Start Your 30-Day Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div className={`inline-flex self-start mb-6 px-3 py-1 rounded-full text-xs font-bold ${
                  plan.highlighted ? 'bg-primary text-white' : 'bg-white/8 text-gray-300'
                }`}>
                  {plan.badge}
                </div>

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

                <button className={`w-full py-3.5 rounded-full text-sm font-bold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-primary hover:bg-primary/90 text-white'
                    : 'border border-white/20 hover:bg-white/8 text-white'
                }`}>
                  Start Free Trial
                </button>
              </motion.div>
            ))}
          </div>

          {/* Bottom features list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 flex flex-wrap justify-center items-center gap-x-8 gap-y-4"
          >
            {['Everything Included', 'No Hidden Costs', 'Free Updates', 'Unlimited Support', 'Cancel Anytime'].map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                <Check className="w-4 h-4 text-primary" />
                {f}
              </div>
            ))}
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
              <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-xs font-semibold text-white tracking-wider mb-6">PRODUCT</h4>
              <ul className="space-y-4">
                {['Features', 'Pricing', 'How it works'].map((l, i) => (
                  <li key={i}><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">{l}</Link></li>
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
              <button className="bg-primary hover:bg-primary/90 transition-colors text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 max-w-max">
                Start your free trial <ArrowRight className="w-4 h-4" />
              </button>
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
