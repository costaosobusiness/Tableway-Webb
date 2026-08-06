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

export default function PrivacyPage() {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: 1 August 2026</p>
        </div>

        <p className="text-gray-400 leading-relaxed mb-12">
          TableWay ("we", "us", or "our"), a product by Oso System, is committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you use our platform.
        </p>

        <Section title="1. Information We Collect">
          <p>We collect information you provide directly when you create an account, set up your restaurant, or contact us. This includes:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li>Name, email address, and password</li>
            <li>Restaurant name, address, and contact details</li>
            <li>Billing information (processed securely by Stripe)</li>
            <li>Guest reservation data entered into the platform</li>
          </ul>
          <p className="mt-3">We also collect certain technical data automatically, including IP address, browser type, device information, and usage data to improve the platform.</p>
        </Section>

        <Section title="2. How We Use Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li>Provide, operate, and maintain the TableWay platform</li>
            <li>Process payments and manage your subscription</li>
            <li>Send transactional emails such as booking confirmations</li>
            <li>Respond to support requests and inquiries</li>
            <li>Improve our platform and develop new features</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-3">We do not sell your personal data to third parties.</p>
        </Section>

        <Section title="3. Cookies">
          <p>We use cookies and similar tracking technologies to maintain your session and improve your experience. These include:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li><strong className="text-white">Essential cookies</strong> — required for the platform to function</li>
            <li><strong className="text-white">Analytics cookies</strong> — help us understand how users interact with TableWay (e.g. Google Analytics)</li>
          </ul>
          <p className="mt-3">You can control cookie preferences through your browser settings. Disabling essential cookies may affect platform functionality.</p>
        </Section>

        <Section title="4. Security">
          <p>We take the security of your data seriously. We implement industry-standard security measures including:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li>TLS/SSL encryption for all data in transit</li>
            <li>Encrypted storage of sensitive data</li>
            <li>Access controls limiting data access to authorised personnel</li>
            <li>Regular security reviews and updates</li>
          </ul>
          <p className="mt-3">No system is completely secure. If you believe your account has been compromised, contact us immediately at privacy@tableway.com.</p>
        </Section>

        <Section title="5. Third-Party Services">
          <p>We use trusted third-party services to operate TableWay. These services may process your data under their own privacy policies:</p>
          <p className="mt-3"><strong className="text-white">Stripe</strong> — We use Stripe to process payments. Your payment card details are never stored on our servers. Stripe is PCI-DSS compliant. See Stripe's Privacy Policy at stripe.com/privacy.</p>
          <p className="mt-3"><strong className="text-white">Google</strong> — We may use Google Analytics to analyse platform usage and Google services for authentication. See Google's Privacy Policy at policies.google.com/privacy.</p>
        </Section>

        <Section title="6. Your Rights (GDPR)">
          <p>If you are located in the European Economic Area, you have the following rights under the General Data Protection Regulation (GDPR):</p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li><strong className="text-white">Right of access</strong> — request a copy of your personal data</li>
            <li><strong className="text-white">Right to rectification</strong> — request correction of inaccurate data</li>
            <li><strong className="text-white">Right to erasure</strong> — request deletion of your personal data</li>
            <li><strong className="text-white">Right to restriction</strong> — request we limit how we process your data</li>
            <li><strong className="text-white">Right to data portability</strong> — receive your data in a machine-readable format</li>
            <li><strong className="text-white">Right to object</strong> — object to processing based on legitimate interests</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, please contact us at privacy@tableway.com. We will respond within 30 days.</p>
        </Section>

        <Section title="7. Data Retention">
          <p>We retain your personal data for as long as your account is active or as needed to provide services. If you cancel your account, we will delete your personal data within 90 days, unless we are required to retain it for legal or regulatory purposes.</p>
        </Section>

        <Section title="8. Contact">
          <p>If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us:</p>
          <p className="mt-3">
            <strong className="text-white">Oso System</strong><br />
            Email: privacy@tableway.com<br />
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
