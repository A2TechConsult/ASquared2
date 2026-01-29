import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Overview } from '@/app/pages/Overview';
import { Capabilities } from '@/app/pages/Capabilities';
import { OurApproach } from '@/app/pages/OurApproach';
import { ClientOutcomes } from '@/app/pages/ClientOutcomes';
import { Contact } from '@/app/pages/Contact';
import { TermsAndConditions } from '@/app/pages/TermsAndConditions';
import { PrivacyPolicy } from '@/app/pages/PrivacyPolicy';
import { CookiePolicy } from '@/app/pages/CookiePolicy';
import { Confidentiality } from '@/app/pages/Confidentiality';
import { AICapabilities } from '@/app/pages/AICapabilities';
import { StaffAugmentation } from '@/app/pages/StaffAugmentation';
import { GDPRRequest } from '@/app/pages/GDPRRequest';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { ScrollProgress } from '@/app/components/ScrollProgress';
import { PageTransition } from '@/app/components/PageTransition';
import { CookieConsent } from '@/app/components/CookieConsent';
import '@/styles/hero-gradient.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
        <ScrollProgress />
        <Navigation />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/approach" element={<OurApproach />} />
            <Route path="/outcomes" element={<ClientOutcomes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ai-capabilities" element={<AICapabilities />} />
            <Route path="/staff-augmentation" element={<StaffAugmentation />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/confidentiality" element={<Confidentiality />} />
            <Route path="/gdpr-request" element={<GDPRRequest />} />
          </Routes>
        </PageTransition>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}