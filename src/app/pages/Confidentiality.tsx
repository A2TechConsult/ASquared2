import { motion } from 'motion/react';

export function Confidentiality() {
  return (
    <main className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-light text-gray-900 mb-4">Confidentiality Agreement</h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: January 16, 2026</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">1. Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This Confidentiality Agreement outlines ASquared Technologies' commitment to protecting sensitive information shared during client engagements, consultations, and business interactions. This agreement is typically formalized through a bilateral Non-Disclosure Agreement (NDA) prior to detailed project discussions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">2. Definition of Confidential Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                "Confidential Information" includes, but is not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Business strategies, plans, and financial information</li>
                <li>Technical data, system architectures, and SAP configurations</li>
                <li>Customer data, user information, and business processes</li>
                <li>Proprietary methodologies, tools, and intellectual property</li>
                <li>Trade secrets, pricing information, and vendor relationships</li>
                <li>Project documentation, requirements, and implementation plans</li>
                <li>Any information marked as "Confidential" or reasonably understood to be confidential</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">3. Obligations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ASquared Technologies agrees to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Maintain strict confidentiality of all client information</li>
                <li>Use confidential information solely for the purpose of providing agreed services</li>
                <li>Implement appropriate security measures to protect confidential data</li>
                <li>Limit access to confidential information to employees with a legitimate need to know</li>
                <li>Not disclose confidential information to third parties without prior written consent</li>
                <li>Return or destroy confidential information upon request or engagement completion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">4. Exclusions</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Confidential Information does not include information that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Is publicly available through no breach of this agreement</li>
                <li>Was rightfully known prior to disclosure</li>
                <li>Is independently developed without use of confidential information</li>
                <li>Is rightfully received from a third party without confidentiality restrictions</li>
                <li>Must be disclosed by law or court order (with prior notice to the disclosing party)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">5. Data Security Measures</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement industry-standard security practices, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Encrypted communication channels and secure file transfer protocols</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular security audits and compliance reviews</li>
                <li>Employee training on confidentiality and data protection</li>
                <li>Secure storage and backup procedures</li>
                <li>Incident response and breach notification protocols</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">6. Employee Confidentiality</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All ASquared Technologies employees, contractors, and subcontractors are bound by confidentiality agreements that require them to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Protect client confidential information</li>
                <li>Adhere to data security policies</li>
                <li>Report any suspected breaches immediately</li>
                <li>Maintain confidentiality obligations beyond employment termination</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">7. Subcontractors and Third Parties</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If subcontractors are required for service delivery, they will be bound by confidentiality obligations no less restrictive than those contained in this agreement. Client approval will be sought where contractually required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">8. Duration</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Confidentiality obligations continue for the duration of the engagement and for a period of five (5) years following engagement termination, unless otherwise specified in individual agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">9. Breach and Remedies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In the event of a breach or threatened breach of confidentiality obligations, the affected party may seek:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Immediate injunctive relief</li>
                <li>Damages for actual losses incurred</li>
                <li>Any other remedies available under applicable law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">10. Mutual Confidentiality</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We expect reciprocal confidentiality protection for our proprietary methodologies, tools, intellectual property, and business information shared during engagements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">11. Formal NDA Process</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For project-specific engagements, we execute bilateral Non-Disclosure Agreements (NDAs) that include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Detailed scope of confidential information</li>
                <li>Permitted uses and restrictions</li>
                <li>Term and termination clauses</li>
                <li>Governing law and jurisdiction</li>
                <li>Liability and indemnification provisions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                To request a formal NDA or discuss confidentiality requirements, please contact:
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                <strong>Email:</strong> admin@a2techconsult.com<br />
                <strong>Legal Department:</strong> legal@a2techconsult.com<br />
                <strong>Address:</strong> 101 S Ellsworth Ave, Ste 515, San Mateo, CA 94401, USA
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
