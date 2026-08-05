import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', restaurant: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/60 transition-colors';

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      {/* Header */}
      <header className="border-b border-white/5 bg-[#111111]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/"><Logo /></Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">← Back to home</Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-20">
        {/* Title */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Contact Us</h1>
          <p className="text-gray-400 text-lg">We're here to help.</p>
        </div>

        {submitted ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Message sent</h2>
            <p className="text-gray-400 mb-8">Thank you for reaching out. We'll get back to you as soon as possible.</p>
            <Link href="/" className="text-sm text-primary hover:underline">← Back to home</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Restaurant Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your restaurant"
                  value={form.restaurant}
                  onChange={e => setForm({ ...form, restaurant: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Email</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Subject</label>
              <input
                type="text"
                required
                placeholder="How can we help?"
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Message</label>
              <textarea
                required
                rows={6}
                placeholder="Tell us more..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 transition-colors text-white py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 group mt-2"
            >
              Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}

        {/* Bottom CTA */}
        <div className="mt-24 pt-14 border-t border-white/5 text-center">
          <p className="text-2xl font-bold text-white mb-8">Need help getting started?</p>
          <Link href="/">
            <button className="bg-primary hover:bg-primary/90 transition-colors text-white px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 group">
              Start Your 30-Day Free Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </main>

      <footer className="border-t border-white/5 py-8 px-6 text-center">
        <p className="text-xs text-gray-500">© 2026 TableWay A product by Oso System. All rights reserved.</p>
      </footer>
    </div>
  );
}
