import { motion } from 'motion/react';

export function TermsAndConditions() {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-light text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: January 16, 2026</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing or using the services of ASquared Technologies ("A²", "we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">2. Services Description</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ASquared Technologies provides enterprise SAP consulting services, including but not limited to S/4HANA implementations, SAP integrations, Vistex solutions, and Plex manufacturing systems. All services are delivered under specific Statement of Work (SOW) agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All intellectual property developed prior to or independently of client engagements remains the property of ASquared Technologies. Client-specific deliverables and customizations developed under SOW agreements are subject to the terms specified in those agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">4. Confidentiality</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Both parties agree to maintain confidentiality of proprietary information shared during the course of engagement. Detailed confidentiality terms are outlined in our Non-Disclosure Agreement and individual SOW documents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ASquared Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to our services. Our total liability shall not exceed the fees paid for the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">6. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Payment terms are specified in individual SOW agreements. Unless otherwise stated, invoices are due within 30 days of receipt. Late payments may incur interest charges as permitted by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Either party may terminate services as outlined in the applicable SOW agreement. Early termination may result in fees for work completed and committed resources.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">8. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, and the laws of India, depending on the jurisdiction of service delivery.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">9. Modifications</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions regarding these Terms & Conditions, please contact us at:
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
