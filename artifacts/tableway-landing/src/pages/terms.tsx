import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Logo } from '@/components/logo';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
    <div className="text-gray-400 leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function TermsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      {/* Header */}
      <header className="border-b border-white/5 bg-[#111111]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/"><Logo /></Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-14">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-gray-400">Last updated: 1 August 2026</p>
        </div>

        <p className="text-gray-400 leading-relaxed mb-12">
          These Terms of Service ("Terms") govern your use of the TableWay platform, a product by Oso System. By creating an account or using our service, you agree to be bound by these Terms. Please read them carefully.
        </p>

        <Section title="1. Acceptance of Terms">
          <p>By accessing or using TableWay, you confirm that you are at least 18 years old, have the legal authority to enter into these Terms, and agree to comply with them. If you are using TableWay on behalf of a business, you confirm that you have authority to bind that business to these Terms.</p>
        </Section>

        <Section title="2. Accounts">
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must notify us immediately at support@tableway.com if you suspect unauthorised access.</p>
          <p>You agree to provide accurate and complete information when creating your account and to keep it up to date.</p>
        </Section>

        <Section title="3. Subscriptions">
          <p>TableWay is offered on a subscription basis. Subscription plans are billed in advance for the selected period (3 months, 6 months, or 12 months). All prices are shown inclusive of any applicable taxes unless stated otherwise.</p>
          <p>Your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date.</p>
        </Section>

        <Section title="4. 30-Day Free Trial">
          <p>New accounts are eligible for a 30-day free trial. No payment is required to start the trial. At the end of the trial period, you will need to select a subscription plan to continue using TableWay.</p>
          <p>Each restaurant account is eligible for one free trial. We reserve the right to refuse or revoke free trials that we believe are being misused.</p>
        </Section>

        <Section title="5. Payments">
          <p>All payments are processed securely by Stripe. By providing payment details, you authorise us to charge the applicable subscription fee to your payment method.</p>
          <p>If a payment fails, we will notify you and provide a grace period to update your payment information. If payment is not received, your account may be suspended.</p>
        </Section>

        <Section title="6. Cancellation">
          <p>You may cancel your subscription at any time from your account settings. Cancellation takes effect at the end of the current billing period. We do not offer refunds for unused portions of a subscription period.</p>
          <p>Upon cancellation, your account and data will remain accessible until the end of the billing period, after which access will be removed.</p>
        </Section>

        <Section title="7. User Responsibilities">
          <p>You agree to use TableWay only for lawful purposes and in accordance with these Terms. You must not:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li>Use the platform for any fraudulent or illegal purpose</li>
            <li>Upload or transmit harmful, offensive, or unlawful content</li>
            <li>Attempt to gain unauthorised access to our systems</li>
            <li>Reverse engineer, decompile, or disassemble any part of the platform</li>
            <li>Resell or sublicense access to the platform without our written consent</li>
          </ul>
        </Section>

        <Section title="8. Intellectual Property">
          <p>All content, features, and functionality of TableWay — including but not limited to software, design, logos, and text — are the exclusive property of Oso System and are protected by applicable intellectual property laws.</p>
          <p>You retain ownership of any data you input into the platform. By using TableWay, you grant us a limited licence to use that data solely to provide and improve our services.</p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>To the maximum extent permitted by applicable law, Oso System shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the platform.</p>
          <p>Our total liability to you for any claims arising under these Terms shall not exceed the total fees paid by you in the three months preceding the claim.</p>
        </Section>

        <Section title="10. Termination">
          <p>We reserve the right to suspend or terminate your account at our discretion if you breach these Terms, engage in fraudulent activity, or if required by law. We will provide reasonable notice where possible.</p>
          <p>Upon termination, your right to access the platform ceases immediately. We will retain your data for 90 days following termination, after which it will be deleted.</p>
        </Section>

        <Section title="11. Changes to Terms">
          <p>We may update these Terms from time to time. We will notify you of material changes via email or a notice within the platform. Continued use of TableWay after changes take effect constitutes your acceptance of the revised Terms.</p>
        </Section>

        <Section title="12. Contact Information">
          <p>If you have any questions about these Terms, please contact us:</p>
          <p className="mt-3">
            <strong className="text-white">Oso System</strong><br />
            Email: legal@tableway.com<br />
            Website: tableway.com
          </p>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 text-center">
        <p className="text-xs text-gray-500">© 2026 TableWay A product by Oso System. All rights reserved.</p>
      </footer>
    </div>
  );
}
