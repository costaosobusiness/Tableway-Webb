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
  Globe2,
  LayoutDashboard,
  Bell,
  UserPlus,
  UtensilsCrossed,
  ArrowDown,
} from 'lucide-react';
import { Logo } from '@/components/logo';

const chartBars = [40, 65, 50, 80, 60, 90, 75, 100, 85, 70, 95, 88];

const DashboardMockup = () => (
  <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.7)] border border-white/8">
    {/* Window chrome */}
    <div className="bg-[#161616] border-b border-white/8 px-4 py-3 flex items-center gap-3">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>
      <div className="flex-1 mx-4">
        <div className="bg-[#0d0d0d] rounded-md px-3 py-1 flex items-center gap-2 max-w-[220px] mx-auto">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          <span className="text-[10px] text-gray-500 font-mono">app.tableway.io/dashboard</span>
        </div>
      </div>
    </div>

    <div className="flex bg-[#0f0f0f]" style={{ minHeight: '360px' }}>
      {/* Sidebar */}
      <div className="w-[200px] shrink-0 border-r border-white/5 flex flex-col py-5 px-3">
        <div className="flex items-center gap-2 px-2 mb-8">
          <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
            <div className="w-2.5 h-[2px] bg-primary rounded-full" />
          </div>
          <span className="text-primary text-sm font-bold tracking-tight">TableWay</span>
        </div>

        <div className="text-[9px] font-semibold text-gray-600 uppercase tracking-widest px-2 mb-2">Main</div>
        {[
          { label: 'Overview', icon: <BarChart2 className="w-3.5 h-3.5" />, active: true },
          { label: 'Reservations', icon: <Calendar className="w-3.5 h-3.5" />, active: false },
          { label: 'Customers', icon: <Users className="w-3.5 h-3.5" />, active: false },
        ].map((item, i) => (
          <div key={i} className={`flex items-center gap-2.5 px-2 py-2 rounded-lg mb-0.5 text-[11px] font-medium ${item.active ? 'bg-primary/10 text-primary' : 'text-gray-500'}`}>
            {item.icon}
            {item.label}
            {item.active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
          </div>
        ))}

        <div className="text-[9px] font-semibold text-gray-600 uppercase tracking-widest px-2 mb-2 mt-5">Reports</div>
        {[
          { label: 'Analytics', icon: <BarChart2 className="w-3.5 h-3.5" /> },
          { label: 'Staff Access', icon: <UserPlus className="w-3.5 h-3.5" /> },
          { label: 'Settings', icon: <Bell className="w-3.5 h-3.5" /> },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 px-2 py-2 rounded-lg mb-0.5 text-[11px] font-medium text-gray-500">
            {item.icon}
            {item.label}
          </div>
        ))}

        <div className="mt-auto px-2 pt-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[9px] text-primary font-bold">JD</div>
            <div>
              <div className="text-[10px] text-white font-medium">João Dias</div>
              <div className="text-[9px] text-gray-500">Admin</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-5 overflow-hidden">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-semibold text-sm">Good morning, João 👋</h3>
            <p className="text-gray-500 text-[10px] mt-0.5">Wednesday, 6 August 2026</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 border border-primary/20 text-primary text-[10px] px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Live
            </div>
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/8 flex items-center justify-center">
              <Bell className="w-3.5 h-3.5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { v: '26', l: 'Reservations today', trend: '+8%' },
            { v: '72', l: 'Covers today', trend: '+12%' },
            { v: '€1,840', l: 'Est. revenue', trend: '+5%' },
            { v: '12:00', l: 'Next booking', trend: null },
          ].map((s, i) => (
            <div key={i} className="bg-[#161616] border border-white/5 rounded-xl p-3">
              <div className="text-xl font-bold text-white mb-0.5">{s.v}</div>
              <div className="text-[9px] text-gray-500 leading-tight">{s.l}</div>
              {s.trend && (
                <div className="text-[9px] text-primary font-semibold mt-1.5 flex items-center gap-0.5">
                  ↑ {s.trend}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chart + Table row */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-4 flex-1">
          {/* Bar chart */}
          <div className="bg-[#161616] border border-white/5 rounded-xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-semibold text-white">Reservations this week</span>
              <span className="text-[9px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">Last 7 days</span>
            </div>
            <div className="flex items-end gap-1.5 flex-1 mt-auto">
              {chartBars.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className={`w-full rounded-t-sm transition-all ${i === 9 ? 'bg-primary' : 'bg-white/10'}`}
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (
                <span key={d} className="text-[8px] text-gray-600 flex-1 text-center">{d}</span>
              ))}
            </div>
          </div>

          {/* Today's reservations */}
          <div className="bg-[#161616] border border-white/5 rounded-xl flex flex-col overflow-hidden">
            <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-white">Today's reservations</span>
              <span className="text-[9px] text-primary">View all</span>
            </div>
            <div className="flex-1 divide-y divide-white/5">
              {[
                { time: '12:00', name: 'John Smith', pax: '4', status: 'Confirmed' },
                { time: '12:30', name: 'Maria Garcia', pax: '2', status: 'Seated' },
                { time: '13:00', name: 'The Johnsons', pax: '5', status: 'Confirmed' },
                { time: '13:30', name: 'David Brown', pax: '3', status: 'Pending' },
              ].map((row, i) => (
                <div key={i} className="flex items-center px-4 py-2.5 gap-2">
                  <span className="text-[9px] text-gray-500 w-9 shrink-0 font-mono">{row.time}</span>
                  <span className="text-[10px] text-white font-medium flex-1 truncate">{row.name}</span>
                  <span className="text-[9px] text-gray-500 w-4 text-center shrink-0">{row.pax}</span>
                  <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full shrink-0 ${
                    row.status === 'Confirmed' ? 'bg-primary/10 text-primary' :
                    row.status === 'Seated' ? 'bg-blue-500/10 text-blue-400' :
                    'bg-yellow-500/10 text-yellow-400'
                  }`}>{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PhoneMockup = () => (
  <div className="w-[175px] aspect-[1/2.15] bg-[#0f0f0f] rounded-[1.75rem] border-[8px] border-[#222] shadow-2xl overflow-hidden relative flex flex-col">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#222] rounded-b-2xl z-10" />
    <div className="flex-1 px-3.5 pt-8 pb-4 flex flex-col">
      <h3 className="text-white font-bold text-[10px] mb-4">New reservation</h3>
      <div className="space-y-2.5 flex-1">
        {[
          { label: 'Date', value: '24 May 2026', icon: <Calendar className="w-2.5 h-2.5 text-gray-500" /> },
          { label: 'Time', value: '19:30', icon: <ChevronDown className="w-2.5 h-2.5 text-gray-500" /> },
        ].map((f, i) => (
          <div key={i} className="space-y-1">
            <label className="text-[8px] text-gray-500 font-semibold">{f.label}</label>
            <div className="text-[9px] font-medium text-white bg-white/5 border border-white/8 p-2 rounded-lg flex justify-between items-center">
              <span>{f.value}</span>{f.icon}
            </div>
          </div>
        ))}
        <div className="space-y-1">
          <label className="text-[8px] text-gray-500 font-semibold">Guests</label>
          <div className="text-[9px] text-white bg-white/5 border border-white/8 p-2 rounded-lg flex justify-between items-center">
            <span className="text-gray-500 font-bold px-1">−</span>
            <span className="font-bold">4</span>
            <span className="text-gray-500 font-bold px-1">+</span>
          </div>
        </div>
        {[{ label: 'Name', value: 'Maria Garcia' }, { label: 'Phone', value: '+34 600 123 456' }].map((f, i) => (
          <div key={i} className="space-y-1">
            <label className="text-[8px] text-gray-500 font-semibold">{f.label}</label>
            <div className="text-[9px] font-medium text-white bg-white/5 border border-white/8 p-2 rounded-lg">{f.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <button className="w-full bg-primary text-white text-[9px] py-2.5 rounded-lg font-semibold">
          Confirm reservation
        </button>
        <div className="mt-2 flex items-center justify-center gap-1">
          <Check className="w-2.5 h-2.5 text-primary" />
          <span className="text-[7px] text-gray-500 font-medium">Instant confirmation · 24/7 booking</span>
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
      <section className="relative pt-36 pb-0 lg:pt-44 px-6 overflow-visible">
        {/* Ambient glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[140px] -z-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

        {/* ── Copy block — centered ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center mb-16"
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
          <p className="text-lg lg:text-xl text-gray-400 font-light max-w-xl mx-auto leading-relaxed mb-10">
            The reservation platform built for restaurants — accept bookings 24/7, reduce no-shows, and grow your guests database. Starting at €29/month.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 active:scale-95 transition-all text-white px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 group shadow-[0_0_40px_rgba(34,197,94,0.25)]">
              Start 30-day free trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#how-it-works" className="w-full sm:w-auto border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all text-white px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-3">
              <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center shrink-0">
                <Play className="w-2.5 h-2.5 ml-0.5" fill="currentColor" />
              </span>
              See how it works
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { title: '30-day free trial', sub: 'No credit card required' },
              { title: 'No commission fees', sub: 'Keep 100% of your revenue' },
              { title: 'Cancel anytime', sub: 'No contracts' },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-gray-400">
                  <span className="text-white font-medium">{b.title}</span>
                  {' · '}{b.sub}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Dashboard — full width focal point ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          className="max-w-6xl mx-auto relative"
        >
          {/* Glow under dashboard */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/10 blur-[60px] -z-10 pointer-events-none rounded-full" />

          <DashboardMockup />

          {/* Phone — overlaps bottom-right of dashboard */}
          <div className="hidden lg:block absolute -bottom-12 -right-8 z-20 drop-shadow-2xl" style={{ filter: 'drop-shadow(0 32px 48px rgba(0,0,0,0.6))' }}>
            <PhoneMockup />
          </div>
        </motion.div>

        {/* Mobile: phone below dashboard */}
        <div className="lg:hidden flex justify-center mt-10 pb-6">
          <PhoneMockup />
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
                {[Facebook, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Icon className="w-4 h-4 text-white" />
                  </a>
                ))}
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                  </svg>
                </a>
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
