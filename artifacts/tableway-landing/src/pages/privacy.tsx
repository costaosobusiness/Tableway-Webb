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
          <p className="text-gray-400">Last updated: 12 August 2026</p>
        </div>

        <p className="text-gray-400 leading-relaxed mb-12">
          This Privacy Policy explains how Del Oso Sueco S.L. ("we", "us", or "our"), operating TableWay under the Oso System brand, processes personal data in connection with TableWay, our restaurant reservation platform available at{' '}
          <a href="https://tableway.app" className="text-primary hover:text-primary/80 transition-colors">https://tableway.app</a>
          , and this marketing website.
        </p>

        <Section title="1. Scope">
          <p>This policy applies to:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li><strong className="text-white">TableWay platform</strong> — the SaaS application used by restaurants and their staff to manage reservations, customers, staff access, billing, and related features.</li>
            <li><strong className="text-white">Public booking surfaces</strong> — public booking pages and embedded booking widgets through which end users make reservations with a restaurant.</li>
            <li><strong className="text-white">This marketing website</strong> — the pages hosted to describe and promote TableWay.</li>
          </ul>
          <p className="mt-3">
            This policy does not govern third-party websites or services that may be linked from TableWay. Those services are subject to their own privacy policies.
          </p>
        </Section>

        <Section title="2. Who Is Responsible for Processing">
          <p>
            <strong className="text-white">Del Oso Sueco S.L.</strong>, operating TableWay under the Oso System brand, is the data controller for personal data that we process to operate TableWay accounts, subscriptions, billing, platform security, support, and related business operations.
          </p>
          <p>
            <strong className="text-white">Legal entity details:</strong>
          </p>
          <p className="mt-2">
            Del Oso Sueco S.L.
            <br />
            Antonio Machado 57, Las Gaviotas, Local 22
            <br />
            29630 Benalmádena, Spain
            <br />
            NIF: B44697704
          </p>
          <p>
            Where a restaurant uses TableWay to manage reservations and guest information, the <strong className="text-white">restaurant customer</strong> is generally the data controller for that guest and reservation data, and Del Oso Sueco S.L. acts as a <strong className="text-white">data processor</strong> processing that data on the restaurant's instructions and solely to provide the TableWay service.
          </p>
          <p>
            Restaurants are responsible for providing their own privacy notices to guests, determining lawful bases for guest data processing, and responding to guest requests relating to reservation data they control.
          </p>
        </Section>

        <Section title="3. Personal Data We Collect">
          <p><strong className="text-white">Restaurant account and billing data</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li>Account owner and staff names, email addresses, phone numbers, and password credentials</li>
            <li>Restaurant name, contact details, settings, and operational configuration</li>
            <li>Subscription status, billing history, and payment-related identifiers processed through Stripe</li>
            <li>Service Mode PIN credentials used for staff sign-in</li>
            <li>Audit and security-related records, which may include IP address and browser or device user-agent information</li>
          </ul>
          <p className="mt-3"><strong className="text-white">Guest and reservation data entered by restaurants</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li>Guest names, contact details, reservation dates and times, party size, notes, and related booking information</li>
            <li>Customer profiles and reservation history maintained within the platform</li>
          </ul>
          <p className="mt-3"><strong className="text-white">Public booking and widget activity</strong></p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li>Information submitted by guests when making or managing a reservation through a public booking page or embedded widget</li>
            <li>Technical event data sent to TableWay's own API for widget analytics and operational purposes, where enabled</li>
            <li>IP address and related technical data used for rate limiting, abuse prevention, and security on public endpoints</li>
          </ul>
          <p className="mt-3"><strong className="text-white">Optional Google Business Profile integration</strong></p>
          <p>
            If a restaurant chooses to connect Google Business Profile, TableWay may process OAuth tokens and related connection metadata for that integration. This is separate from end-user login to TableWay, which uses email or phone and password authentication.
          </p>
          <p className="mt-3"><strong className="text-white">Marketing website</strong></p>
          <p>
            This marketing website does not currently use analytics or advertising cookies. When you visit this site, your browser may request fonts from Google Fonts, which involves a connection to Google servers. The contact page form is displayed for convenience; as currently implemented, submitted form content is not transmitted to or stored by TableWay.
          </p>
        </Section>

        <Section title="4. Purposes and Legal Bases">
          <p>We process personal data for the following purposes:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li><strong className="text-white">Providing the service</strong> — creating and managing accounts, reservations, staff access, notifications, and platform functionality (contract performance; legitimate interests of restaurants using the service).</li>
            <li><strong className="text-white">Billing and subscriptions</strong> — managing trials, subscriptions, invoices, and payment status through Stripe (contract performance; legal obligations).</li>
            <li><strong className="text-white">Transactional communications</strong> — sending service-related emails such as booking confirmations and account notifications through our email provider (contract performance; legitimate interests).</li>
            <li><strong className="text-white">Security and abuse prevention</strong> — authentication, session management, rate limiting, audit logging, and protecting the platform (legitimate interests; legal obligations).</li>
            <li><strong className="text-white">Support and compliance</strong> — responding to requests, maintaining records where required, and enforcing our terms (legitimate interests; legal obligations).</li>
          </ul>
          <p className="mt-3">We do not sell personal data.</p>
        </Section>

        <Section title="5. Cookies and Similar Technologies">
          <p><strong className="text-white">TableWay platform</strong></p>
          <p>
            The TableWay application uses essential cookies or similar browser storage mechanisms required for authentication and session management, including HttpOnly refresh-token cookies for signed-in users. These are necessary for the platform to function and are not used for advertising or third-party analytics.
          </p>
          <p className="mt-3"><strong className="text-white">Marketing website</strong></p>
          <p>
            As currently implemented, this marketing website does not set non-essential cookies and does not use Google Analytics or similar analytics services. Google Fonts are loaded from Google servers when you visit this site.
          </p>
          <p className="mt-3"><strong className="text-white">Cookie consent notice</strong></p>
          <p>
            TableWay does not currently operate a cookie consent banner on this marketing website or within the platform. If non-essential cookies or tracking technologies are added in future, a compliant consent mechanism should be implemented before those technologies are activated. Under EU and Spanish rules, loading non-essential cookies or similar tracking tools generally requires prior consent.
          </p>
        </Section>

        <Section title="6. Recipients and Subprocessors">
          <p>We share personal data only where necessary to operate TableWay, including with:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li><strong className="text-white">Stripe</strong> — payment processing and subscription management. Payment card details are handled by Stripe and are not stored on TableWay servers. See{' '}
              <a href="https://stripe.com/privacy" className="text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">Stripe's Privacy Policy</a>.
            </li>
            <li><strong className="text-white">Resend</strong> — delivery of transactional emails.</li>
            <li><strong className="text-white">Infrastructure providers</strong> — hosting, database, caching, and related cloud infrastructure used to run TableWay. Specific production hosting vendors are configured operationally and are not identified in the application source code reviewed for this policy.</li>
            <li><strong className="text-white">Google</strong> — only where a restaurant enables Google Business Profile integration, or where Google Fonts are requested by this marketing website.</li>
          </ul>
          <p className="mt-3">We may also disclose data where required by law, to protect rights and safety, or in connection with a business transfer subject to applicable law.</p>
        </Section>

        <Section title="7. International Transfers">
          <p>
            Some service providers we use may process personal data outside the European Economic Area. Where required, we rely on appropriate safeguards under applicable data protection law, such as Standard Contractual Clauses or equivalent mechanisms offered by the relevant provider.
          </p>
        </Section>

        <Section title="8. Retention">
          <p>
            We retain personal data for as long as necessary to provide TableWay, manage subscriptions, meet legal obligations, resolve disputes, and enforce agreements.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li><strong className="text-white">Active accounts</strong> — account, reservation, and related operational data is retained while the restaurant account exists and the service is used.</li>
            <li><strong className="text-white">Account deletion</strong> — when a restaurant owner deletes the restaurant account through the platform, associated restaurant data is deleted from the active production database as part of that deletion process.</li>
            <li><strong className="text-white">Notification logs</strong> — notification delivery logs are retained for up to 90 days before automated cleanup, unless a longer period is required by law.</li>
            <li><strong className="text-white">Billing records</strong> — payment and accounting records processed through Stripe may be retained according to Stripe's records and applicable legal retention requirements.</li>
          </ul>
          <p className="mt-3">
            Backups, logs, and residual copies may persist for a limited period after deletion depending on operational systems and legal requirements.
          </p>
        </Section>

        <Section title="9. Security">
          <p>We apply technical and organisational measures designed to protect personal data, including measures described in our operational security practices, such as:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 ml-2">
            <li>TLS encryption for data in transit</li>
            <li>Access controls and authenticated API access for manager operations</li>
            <li>HttpOnly, SameSite-scoped session cookies for refresh-token handling</li>
            <li>Input validation, rate limiting, and audit logging for security-sensitive actions</li>
            <li>Redaction of sensitive values in logs</li>
          </ul>
          <p className="mt-3">
            Selected integration credentials, such as Google OAuth tokens used for Google Business Profile, may be encrypted at the application level. We do not represent that all stored data is encrypted at rest unless and until that is verified for the production environment.
          </p>
          <p className="mt-3">
            No method of transmission or storage is completely secure. If you believe your account has been compromised, please{' '}
            <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">contact us</Link> promptly.
          </p>
        </Section>

        <Section title="10. Your Rights">
          <p>
            If you are in the European Economic Area or Spain, you may have rights under the General Data Protection Regulation (GDPR) and the Spanish Organic Law 3/2018 on Personal Data Protection and Guarantee of Digital Rights (LOPDGDD), including the right to access, rectify, erase, restrict, object to, or port certain personal data, and the right to withdraw consent where processing is based on consent.
          </p>
          <p>
            Where Del Oso Sueco S.L. acts as processor for guest reservation data, requests from guests should generally be directed to the relevant restaurant, which is responsible for that data. We will assist restaurant customers with such requests as required by applicable law and our agreement with them.
          </p>
          <p className="mt-3">
            To exercise rights relating to data for which Del Oso Sueco S.L. is controller, or to raise a privacy concern, please{' '}
            <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">contact us</Link>. We will respond within the timeframe required by applicable law, generally within one month.
          </p>
          <p className="mt-3">
            You also have the right to lodge a complaint with the Spanish Data Protection Agency (Agencia Española de Protección de Datos — AEPD) at{' '}
            <a href="https://www.aepd.es" className="text-primary hover:text-primary/80 transition-colors" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
          </p>
        </Section>

        <Section title="11. Personal Data Breaches">
          <p>
            If we become aware of a personal data breach likely to result in a risk to individuals' rights and freedoms, we will notify the relevant supervisory authority and affected individuals where required by applicable law.
          </p>
        </Section>

        <Section title="12. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Material changes will be communicated through the platform, this website, or other appropriate means. The "Last updated" date at the top indicates when this policy was last revised.
          </p>
        </Section>

        <Section title="13. Contact">
          <p>If you have questions about this Privacy Policy or how we handle personal data, please contact us:</p>
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
