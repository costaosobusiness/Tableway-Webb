import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import LandingPage from '@/pages/landing';
import PrivacyPage from '@/pages/privacy';
import TermsPage from '@/pages/terms';
import ContactPage from '@/pages/contact';
import AboutPage from '@/pages/about';
import FaqPage from '@/pages/faq';
import HowLinksWorkPage from '@/pages/how-links-work';
import ComparePage from '@/pages/compare';
import DownloadRedirectPage from '@/pages/download';
import SeoLandingPage from '@/pages/seo-landing';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import type { ComponentType } from 'react';
import { LocaleProvider } from '@/i18n/LocaleProvider';
import { SEO_LANDING_SLUGS, type SeoLandingSlug } from '@/lib/seo/pageIds';

const queryClient = new QueryClient();

function createSeoLandingRoute(slug: SeoLandingSlug) {
  return function SeoLandingRoute() {
    return <SeoLandingPage slug={slug} />;
  };
}

const SEO_LANDING_ROUTES = Object.fromEntries(
  SEO_LANDING_SLUGS.map((slug) => [slug, createSeoLandingRoute(slug)]),
) as Record<SeoLandingSlug, ComponentType>;

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/privacy-policy" component={PrivacyPage} />
      <Route path="/terms-of-service" component={TermsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/faq" component={FaqPage} />
      <Route path="/how-links-work" component={HowLinksWorkPage} />
      <Route path="/compare" component={ComparePage} />
      <Route path="/download" component={DownloadRedirectPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/restaurant-booking-system" component={SEO_LANDING_ROUTES['restaurant-booking-system']} />
      <Route path="/restaurant-reservation-system" component={SEO_LANDING_ROUTES['restaurant-reservation-system']} />
      <Route path="/restaurant-booking-software" component={SEO_LANDING_ROUTES['restaurant-booking-software']} />
      <Route path="/restaurant-reservation-software" component={SEO_LANDING_ROUTES['restaurant-reservation-software']} />
      <Route path="/online-restaurant-reservations" component={SEO_LANDING_ROUTES['online-restaurant-reservations']} />
      <Route
        path="/restaurant-booking-system-zero-commission"
        component={SEO_LANDING_ROUTES['restaurant-booking-system-zero-commission']}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </LocaleProvider>
    </QueryClientProvider>
  );
}

export default App;
