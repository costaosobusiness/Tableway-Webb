import { useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      {/* Header */}
      <header className="border-b border-white/5 bg-[#111111]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/"><Logo /></Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">← Back to home</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            About Us
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Built by someone who understands restaurants.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <img
            src="/about-us.png"
            alt="TableWay — Reservations Made Simple"
            className="w-full rounded-2xl border border-white/8"
          />
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 leading-relaxed space-y-4 text-lg mb-16"
        >
          <p>TableWay started with a simple idea: restaurant technology should make life easier, not more complicated.</p>
          <p>My name is Björn Lingman, and I founded Oso System after years of working with restaurants and seeing the same problems again and again. Too much time spent managing bookings, answering calls, dealing with complicated systems, and paying for features that many restaurants simply don&apos;t need.</p>
          <p>I wanted to build something different.</p>
          <p>TableWay was created as a straightforward reservation system designed around the reality of running a restaurant. It should be easy to understand, quick to use, and affordable — without commission fees, unnecessary add-ons, or complicated setups.</p>
          <p>But TableWay is about more than reservations. It is the first step in a bigger vision: building practical digital tools that help independent restaurants compete, grow, and spend more time doing what they do best — creating great experiences for their guests.</p>
          <p>Oso System is being built around that idea. TableWay is the beginning, with more products and tools planned for restaurants in the future.</p>
          <p>We are starting small, but thinking globally.</p>
          <p>The goal is simple: give restaurants better technology without making them feel like they need to become technology experts to use it.</p>
          <p>If TableWay can save a restaurant time, reduce stress, and help it grow, then we are doing what we set out to do.</p>
          <p className="pt-4 text-white">
            — Björn Lingman<br />
            Founder, Oso System
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 pt-16 border-t border-white/5 text-center"
        >
          <p className="text-3xl font-bold text-white mb-10">Ready to simplify your reservations?</p>
          <Link href="https://tableway.app/auth/register?plan=12m">
            <button className="bg-primary hover:bg-primary/90 transition-colors text-white px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 group">
              Start Your 30-Day Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </main>

      <footer className="border-t border-white/5 py-8 px-6 text-center mt-12">
        <p className="text-xs text-gray-500">© 2026 TableWay A product by Oso System. All rights reserved.</p>
      </footer>
    </div>
  );
}
