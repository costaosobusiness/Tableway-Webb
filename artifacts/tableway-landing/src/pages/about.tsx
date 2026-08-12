import { useEffect } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';

const Section = ({ title, children, delay = 0 }: { title: string; children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="mb-16"
  >
    <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
    <div className="text-gray-400 leading-relaxed space-y-4 text-lg">{children}</div>
  </motion.div>
);

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
            About <span className="text-primary">TableWay</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Built by restaurant people, for restaurant people.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-20" />

        <Section title="Our Story" delay={0.1}>
          <p>For over 20 years we've worked inside restaurants.</p>
          <p>We've experienced busy services, missed reservations, phone calls during dinner service and complicated booking systems that created more problems than they solved.</p>
          <p>TableWay was created to make restaurant reservations simple.</p>
          <p className="text-white font-semibold">Less stress. More bookings.</p>
        </Section>

        <div className="h-px bg-white/5 mb-16" />

        <Section title="Our Mission" delay={0.15}>
          <p>To build the easiest reservation platform for restaurants.</p>
          <ul className="space-y-3 mt-2">
            {[
              'No hidden fees.',
              'No unnecessary complexity.',
              'Just a modern reservation system that helps restaurants grow.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <div className="h-px bg-white/5 mb-16" />

        <Section title="About Oso System" delay={0.2}>
          <p>TableWay is proudly developed by <span className="text-white font-semibold">Oso System</span>.</p>
          <p>Our mission is to create simple, modern software that helps businesses work smarter — removing complexity and putting the focus back where it belongs: on the people you serve.</p>
        </Section>

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
