import { motion } from 'motion/react';

export function CookiePolicy() {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-light text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: January 16, 2026</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ASquared Technologies uses cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
                <li><strong>Marketing Cookies:</strong> Track your online activity to deliver relevant content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Essential Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  These cookies are strictly necessary for the website to function and cannot be disabled. They include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Session cookies for navigation</li>
                  <li>Cookie consent preferences</li>
                  <li>Security and authentication tokens</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  These help us understand website performance and user behavior:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Google Analytics (anonymized IP tracking)</li>
                  <li>Page view statistics</li>
                  <li>User journey tracking</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Preference Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  These remember your choices and settings:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  <li>Language preferences</li>
                  <li>Display settings</li>
                  <li>Accessibility options</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use third-party services that set cookies on our behalf, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Google Analytics for website analytics</li>
                <li>Content delivery networks (CDNs) for performance optimization</li>
                <li>Marketing platforms for campaign tracking (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">5. Cookie Duration</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cookies may be either:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">6. Managing Your Cookie Preferences</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to accept or decline cookies. You can manage your preferences through:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Our cookie consent banner (displayed on your first visit)</li>
                <li>Your browser settings (most browsers allow you to block or delete cookies)</li>
                <li>Opting out of third-party analytics cookies</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">7. Browser Controls</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can control cookies through your browser settings:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                <li>Chrome: Settings → Privacy and Security → Cookies</li>
                <li>Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
                <li>Safari: Preferences → Privacy → Cookies and Website Data</li>
                <li>Edge: Settings → Privacy, Search, and Services → Cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">8. Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. Please review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about our use of cookies, please contact us at:
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                <strong>Email:</strong> admin@a2techconsult.com<br />
                <strong>Address:</strong> 101 S Ellsworth Ave, Ste 515, San Mateo, CA 94401, USA
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
