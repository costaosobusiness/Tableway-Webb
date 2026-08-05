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
  Linkedin
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-full border-[2.5px] border-white flex flex-col items-center justify-center relative">
      <div className="w-3.5 h-[2.5px] bg-white rounded-full"></div>
      <div className="w-[2.5px] h-3 bg-white mt-[1px] rounded-full"></div>
    </div>
    <div className="flex flex-col justify-center">
      <div className="text-white font-bold text-xl leading-none tracking-tight">
        Table<span className="text-primary">Way</span>
      </div>
      <div className="text-primary text-[8px] font-semibold tracking-widest mt-0.5">
        RESERVATIONS MADE Simple
      </div>
    </div>
  </div>
);

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
          <div className="w-4 h-4 rounded flex items-center justify-center">
             <BarChart2 className="w-3.5 h-3.5" />
          </div>
          Overview
        </div>
        <div className="text-gray-400 hover:text-gray-300 text-xs p-2 flex items-center gap-2 transition-colors">
          <div className="w-4 h-4 rounded flex items-center justify-center">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          Reservations
        </div>
        <div className="text-gray-400 hover:text-gray-300 text-xs p-2 flex items-center gap-2 transition-colors">
          <div className="w-4 h-4 rounded flex items-center justify-center">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          Calendar
        </div>
        <div className="text-gray-400 hover:text-gray-300 text-xs p-2 flex items-center gap-2 transition-colors">
          <div className="w-4 h-4 rounded flex items-center justify-center">
            <Users className="w-3.5 h-3.5" />
          </div>
          Customers
        </div>
        <div className="text-gray-400 hover:text-gray-300 text-xs p-2 flex items-center gap-2 transition-colors">
          <div className="w-4 h-4 rounded flex items-center justify-center">
            <BarChart2 className="w-3.5 h-3.5" />
          </div>
          Reports
        </div>
        <div className="text-gray-400 hover:text-gray-300 text-xs p-2 flex items-center gap-2 transition-colors">
          <div className="w-4 h-4 rounded flex items-center justify-center">
            <div className="w-3.5 h-3.5 border-2 border-current rounded-full" />
          </div>
          Settings
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 bg-gray-50/50 p-6 flex flex-col">
        <h3 className="text-gray-900 font-semibold mb-6 text-base">Overview</h3>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 border border-gray-100 rounded-lg shadow-sm flex flex-col items-center justify-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">26</div>
            <div className="text-[9px] text-gray-500 font-medium">Reservations today</div>
          </div>
          <div className="bg-white p-4 border border-gray-100 rounded-lg shadow-sm flex flex-col items-center justify-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">72</div>
            <div className="text-[9px] text-gray-500 font-medium">Covers today</div>
          </div>
          <div className="bg-white p-4 border border-gray-100 rounded-lg shadow-sm flex flex-col items-center justify-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">12:00</div>
            <div className="text-[9px] text-gray-500 font-medium">Next booking</div>
          </div>
        </div>
        
        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm flex-1 flex flex-col">
          <div className="px-4 py-3 border-b border-gray-50 text-[11px] font-semibold text-gray-900">
            Today's reservations
          </div>
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
    {/* Base */}
    <div className="h-4 bg-[#2a2a2a] w-full rounded-b-2xl border-t border-[#1a1a1a] flex justify-center items-start">
      <div className="w-20 h-1 bg-[#1a1a1a] rounded-b-md"></div>
    </div>
  </div>
);

const PhoneMockup = () => (
  <div className="w-[240px] aspect-[1/2.15] bg-white rounded-[2rem] border-[10px] border-[#1a1a1a] shadow-2xl overflow-hidden relative flex flex-col">
    {/* Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a1a] rounded-b-2xl z-10"></div>
    
    <div className="flex-1 px-5 pt-10 pb-5 bg-gray-50 flex flex-col">
      <h3 className="text-gray-900 font-bold text-sm mb-5">New reservation</h3>
      
      <div className="space-y-4 flex-1">
        <div className="space-y-1.5">
          <label className="text-[10px] text-gray-500 font-semibold">Date</label>
          <div className="text-[11px] font-medium text-gray-900 bg-white border border-gray-200 p-2.5 rounded-lg flex justify-between items-center">
            <span>24 May 2026</span>
            <Calendar className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] text-gray-500 font-semibold">Time</label>
          <div className="text-[11px] font-medium text-gray-900 bg-white border border-gray-200 p-2.5 rounded-lg flex justify-between items-center">
            <span>19:30</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] text-gray-500 font-semibold">Guests</label>
          <div className="text-[11px] text-gray-900 bg-white border border-gray-200 p-2.5 rounded-lg flex justify-between items-center">
            <span className="text-gray-400 font-bold cursor-pointer px-2">-</span>
            <span className="font-bold">4</span>
            <span className="text-gray-400 font-bold cursor-pointer px-2">+</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] text-gray-500 font-semibold">Name</label>
          <div className="text-[11px] font-medium text-gray-900 bg-white border border-gray-200 p-2.5 rounded-lg">
            Maria Garcia
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] text-gray-500 font-semibold">Phone</label>
          <div className="text-[11px] font-medium text-gray-900 bg-white border border-gray-200 p-2.5 rounded-lg">
            +34 600 123 456
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <button className="w-full bg-primary hover:bg-primary/90 transition-colors text-white text-[11px] py-3 rounded-lg font-semibold shadow-sm">
          Confirm reservation
        </button>
        
        <div className="mt-4 text-center flex items-center justify-center gap-1.5">
          <Check className="w-3.5 h-3.5 text-primary" />
          <span className="text-[9px] text-gray-500 font-medium leading-tight text-left">
            Instant confirmation<br/>24/7 online booking
          </span>
        </div>
      </div>
    </div>
  </div>
);

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
            <Link href="/" className="hover:text-white transition-colors">Features</Link>
            <Link href="/" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/" className="hover:text-white transition-colors">How it works</Link>
            <Link href="/" className="hover:text-white transition-colors">Integrations</Link>
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              Resources <ChevronDown className="w-4 h-4" />
            </button>
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
            <Link href="/" className="text-gray-300 font-medium py-2">Features</Link>
            <Link href="/" className="text-gray-300 font-medium py-2">Pricing</Link>
            <Link href="/" className="text-gray-300 font-medium py-2">How it works</Link>
            <Link href="/" className="text-gray-300 font-medium py-2">Integrations</Link>
            <Link href="/" className="text-gray-300 font-medium py-2">Resources</Link>
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
        {/* Subtle radial gradient background hint */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-screen opacity-30"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">30-day free trial</div>
                  <div className="text-xs text-gray-400 mt-0.5">No credit card required</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">No commission fees</div>
                  <div className="text-xs text-gray-400 mt-0.5">Keep 100% of your revenue</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Cancel anytime</div>
                  <div className="text-xs text-gray-400 mt-0.5">No contracts</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Mockups) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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

      {/* PRICING SECTION */}
      <section className="py-24 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-[800px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-10 md:gap-16"
          >
            <div className="flex flex-col items-center justify-center md:w-1/2">
              <div className="flex items-baseline text-primary font-bold">
                <span className="text-7xl lg:text-[7rem] leading-none tracking-tighter">29</span>
                <span className="text-5xl lg:text-6xl ml-1">€</span>
              </div>
              <div className="text-gray-400 tracking-widest font-semibold mt-2">/MONTH</div>
            </div>
            
            <div className="w-full h-px md:w-px md:h-32 bg-white/10"></div>

            <div className="md:w-1/2 space-y-4">
              <div className="flex items-center gap-3 text-lg font-medium text-white">
                <Check className="w-6 h-6 text-primary" /> Everything Included
              </div>
              <div className="flex items-center gap-3 text-lg font-medium text-white">
                <Check className="w-6 h-6 text-primary" /> No Add-ons
              </div>
              <div className="flex items-center gap-3 text-lg font-medium text-white">
                <Check className="w-6 h-6 text-primary" /> No Commission Fees
              </div>
              <div className="flex items-center gap-3 text-lg font-medium text-white">
                <Check className="w-6 h-6 text-primary" /> Unlimited Reservations
              </div>
            </div>
          </motion.div>
          
          <div className="max-w-[500px] mx-auto mt-10 text-center">
            <button className="w-full bg-primary hover:bg-primary/90 transition-colors text-white py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2">
              Start your 30-day free trial <ArrowRight className="w-5 h-5" />
            </button>
            <div className="mt-4 text-sm text-gray-400 flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-primary" /> Cancel anytime. No contracts.
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-6">
                <Calendar className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Online Bookings</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Accept reservations 24/7<br/>from any device.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center px-4 md:border-l md:border-r md:border-white/10"
            >
              <div className="mb-6">
                <Users className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Guest Database</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Build relationships<br/>and keep your guests<br/>coming back.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="mb-6">
                <BarChart2 className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Reports & Insights</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                Track performance<br/>and grow your<br/>restaurant.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-10 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-12 lg:gap-8 mb-16">
            
            {/* Logo Col */}
            <div className="flex flex-col">
              <div className="mb-8">
                <Logo />
              </div>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-xs font-semibold text-white tracking-wider mb-6">PRODUCT</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">How it works</Link></li>
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-xs font-semibold text-white tracking-wider mb-6">RESOURCES</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Help center</Link></li>
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Guides</Link></li>
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-xs font-semibold text-white tracking-wider mb-6 uppercase">Company</h4>
              <ul className="space-y-4">
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">About us</Link></li>
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy policy</Link></li>
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of service</Link></li>
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Contact us</Link></li>
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
            <p className="text-xs text-gray-500">
              © 2026 TableWay. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
