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
          <p className="text-gray-400">Last updated: 12 August 2026</p>
        </div>

        <p className="text-gray-400 leading-relaxed mb-12">
          These Terms of Service ("Terms") govern access to and use of TableWay, a restaurant reservation platform operated by Del Oso Sueco S.L. under the Oso System brand, available at{' '}
          <a href="https://tableway.app" className="text-primary hover:text-primary/80 transition-colors">https://tableway.app</a>.
          By creating an account or using TableWay, you agree to these Terms.
        </p>

        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using TableWay, you confirm that you are at least 18 years old, have authority to enter into these Terms, and agree to comply with them. If you use TableWay on behalf of a restaurant or other organisation, you confirm that you are authorised to bind that organisation.
          </p>
          <p>
            Nothing in these Terms limits mandatory rights that cannot be excluded under applicable law, including consumer protection rules where they apply.
          </p>
        </Section>

        <Section title="2. The Service">
          <p>
            TableWay provides online tools for restaurants to manage reservations, customers, staff access, notifications, billing, and related features, including public booking pages and embedded booking widgets for guests.
          </p>
          <p>
            We may update, modify, or discontinue features from time to time. We do not guarantee that every feature shown in marketing materials will remain available at all times.
          </p>
        </Section>

        <Section title="3. Accounts">
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You must provide accurate information and keep account details up to date.
          </p>
          <p>
            If you suspect unauthorised access, please{' '}
            <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">contact us</Link> promptly. Account deletion by the restaurant owner removes the restaurant and associated data from the active production database.
          </p>
        </Section>

        <Section title="4. 30-Day Free Trial">
          <p>
            New restaurant accounts may receive a free trial period. Unless configured otherwise in the production environment, the default trial period is 30 days. No payment is required to start the trial.
          </p>
          <p>
            During the trial, you may use TableWay according to your subscription access level. When the trial ends without an active paid subscription, platform access may be suspended until you complete checkout for a paid plan.
          </p>
          <p>Each restaurant account is eligible for one free trial unless we agree otherwise in writing. We may refuse or revoke trials that we reasonably believe are being misused.</p>
        </Section>

        <Section title="5. Subscriptions and Plans">
          <p>
            TableWay is offered on a subscription basis. Paid plans include monthly, 3-month, 6-month, and 12-month options, billed in advance for the selected period. Current prices are shown on the TableWay website and during checkout.
          </p>
          <p>
            Subscriptions renew automatically at the end of each billing period through Stripe unless you cancel before renewal. Cancelling stops future renewals but does not retroactively refund the current paid period except where required by law.
          </p>
        </Section>

        <Section title="6. Payments">
          <p>
            Payments are processed by Stripe. By providing payment details, you authorise us and Stripe to charge the applicable subscription fees and taxes for your selected plan.
          </p>
          <p>
            Payment card details are handled by Stripe and are not stored on TableWay servers. If a payment fails, your subscription may enter a past-due state. Unless configured otherwise in the production environment, a grace period of up to 7 days may apply before access is suspended for non-payment.
          </p>
          <p>
            You can manage billing details, invoices, and certain subscription changes through Stripe's customer portal where available in your account.
          </p>
        </Section>

        <Section title="7. Cancellation">
          <p>
            You may cancel your subscription at any time from your account settings. Cancellation is scheduled for the end of the current billing period unless otherwise stated in the billing interface. You may retain access until that period ends.
          </p>
          <p>
            If you cancel before renewal, you may resume the subscription before the end of the current billing period where the platform provides that option. After the billing period ends, access may be suspended unless a new paid subscription is activated.
          </p>
          <p>
            Fees already paid for the current billing period are generally non-refundable, except where mandatory law requires otherwise.
          </p>
        </Section>

        <Section title="8. Refunds">
          <p>
            TableWay does not provide automatic refunds for unused subscription time, partial periods, or failure to use the service. Any refund or credit remains at our discretion unless applicable law requires a different outcome.
          </p>
        </Section>

        <Section title="9. Customer Responsibilities">
          <p>You are responsible for:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li>Lawful use of TableWay and compliance with applicable restaurant, hospitality, consumer, and data protection laws</li>
            <li>The accuracy of information you and your staff enter into the platform</li>
            <li>Guest and reservation data you collect and process through TableWay, including providing appropriate privacy information to guests</li>
            <li>Obtaining any consents or legal bases required before contacting guests or sending communications</li>
            <li>Staff access controls, Service Mode PIN management, and activity performed by users you authorise</li>
          </ul>
        </Section>

        <Section title="10. Acceptable Use">
          <p>You must not use TableWay to:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li>Engage in unlawful, fraudulent, deceptive, or abusive activity</li>
            <li>Upload or transmit harmful, offensive, or infringing content</li>
            <li>Attempt unauthorised access to accounts, systems, or data</li>
            <li>Interfere with or disrupt the service, including by excessive automated requests</li>
            <li>Reverse engineer, decompile, or attempt to extract source code except where permitted by law</li>
            <li>Share account credentials in a way that bypasses intended access controls</li>
            <li>Resell, sublicense, or provide TableWay to third parties without our written consent</li>
          </ul>
        </Section>

        <Section title="11. Intellectual Property and Data">
          <p>
            TableWay software, branding, design, documentation, and related materials are owned by Del Oso Sueco S.L. or its licensors and are protected by applicable intellectual property laws. These Terms do not transfer ownership of TableWay to you.
          </p>
          <p>
            You retain ownership of data you input into TableWay. You grant Del Oso Sueco S.L. a limited licence to host, process, transmit, and display that data solely to provide, secure, support, and improve the service.
          </p>
        </Section>

        <Section title="12. Third-Party Services">
          <p>
            TableWay integrates with third-party services such as Stripe for payments, Resend for transactional email, and optional Google Business Profile features. Your use of those services may also be subject to the third party's terms and policies.
          </p>
          <p>
            We are not responsible for third-party services outside our reasonable control, including outages, policy changes, or actions taken by those providers.
          </p>
        </Section>

        <Section title="13. Service Availability and Disclaimers">
          <p>
            TableWay is provided on an "as is" and "as available" basis. We do not guarantee uninterrupted or error-free operation, and maintenance, updates, or third-party failures may cause temporary unavailability.
          </p>
          <p>
            You are responsible for maintaining your own backups or exports of business-critical data where the platform provides export functionality. We do not guarantee recovery of data lost due to user error, account deletion, service interruption, or events outside our reasonable control.
          </p>
        </Section>

        <Section title="14. Limitation of Liability">
          <p>
            To the maximum extent permitted by applicable law, Del Oso Sueco S.L. will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenue, goodwill, or data, arising from or related to your use of TableWay.
          </p>
          <p>
            To the maximum extent permitted by applicable law, our total aggregate liability for claims arising out of or relating to these Terms or TableWay will not exceed the total fees paid by you to Del Oso Sueco S.L. for TableWay in the three months immediately preceding the event giving rise to the claim.
          </p>
          <p>
            Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law, including liability for death or personal injury caused by negligence or for fraud.
          </p>
        </Section>

        <Section title="15. Suspension and Termination">
          <p>
            We may suspend or terminate access to TableWay if you materially breach these Terms, misuse the service, fail to pay applicable fees after any grace period, pose a security or legal risk, or where required by law. We will provide reasonable notice where practicable, except where immediate action is necessary to protect the service, users, or legal compliance.
          </p>
          <p>
            Upon termination or expiry of access, your right to use TableWay ends. Data handling after termination is described in our Privacy Policy. Account deletion by the owner removes associated restaurant data from the active production database; residual backups or records may persist for a limited period as described there.
          </p>
        </Section>

        <Section title="16. Changes">
          <p>
            We may update these Terms or the service from time to time. Material changes will be communicated through the platform, email, or other appropriate notice. Continued use after the effective date of updated Terms constitutes acceptance, except where applicable law requires a different process.
          </p>
        </Section>

        <Section title="17. Governing Law and Jurisdiction">
          <p>
            These Terms are governed by the laws of Spain, without regard to conflict-of-law rules. Unless mandatory law provides otherwise, the courts of Spain shall have jurisdiction over disputes arising out of or relating to these Terms or TableWay.
          </p>
          <p>
            If you qualify as a consumer under applicable law, you may also benefit from mandatory protections and jurisdiction rules of your country of residence.
          </p>
        </Section>

        <Section title="18. Contact">
          <p>If you have questions about these Terms, please contact us:</p>
          <p className="mt-3">
            <strong className="text-white">Del Oso Sueco S.L.</strong>
            <br />
            Antonio Machado 57, Las Gaviotas, Local 22
            <br />
            29630 Benalmádena, Spain
            <br />
            NIF: B44697704
            <br />
            Website:{' '}
            <a href="https://tableway.app" className="text-primary hover:text-primary/80 transition-colors">https://tableway.app</a>
            <br />
            <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">
              Contact us
            </Link>
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
