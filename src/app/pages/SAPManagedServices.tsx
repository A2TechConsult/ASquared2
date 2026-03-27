import sapImage from '../../assets/sap-managed-services.jpg';

export default function SAPManagedServices() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900">
          SAP Managed Services.
          <br />
          Without the noise.
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Enterprise-grade SAP support delivered with precision. From ECC to S/4HANA,
          we run your landscape so you don’t have to.
        </p>
      </section>

      {/* IMAGE + INTRO */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-16 items-center">

        <img
          src={sapImage}
          alt="SAP Services"
          className="w-full max-w-[520px] mx-auto rounded-xl shadow-md object-contain"
        />

        <div>
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Built for stability. Designed for scale.
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At ASquared Technologies, SAP isn’t just a system — it’s your business backbone.
            Our Managed Services ensure predictable performance, reduced costs, and zero surprises.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            With delivery teams across Hyderabad and San Francisco, we combine global scale
            with local accountability.
          </p>
        </div>
      </section>

      {/* WHY ASQUARED */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-light text-gray-900 mb-10 text-center">
          Why ASquared
        </h2>

        <div className="space-y-5 text-gray-600">
          <p><strong className="text-gray-900">Precision First</strong> — We engineer stability, not just manage systems.</p>
          <p><strong className="text-gray-900">Global Delivery</strong> — US leadership with cost-optimized India execution.</p>
          <p><strong className="text-gray-900">Outcome-Driven SLAs</strong> — 99.9% uptime with measurable ROI.</p>
          <p><strong className="text-gray-900">Future-Proof</strong> — RISE, GROW, BTP, and AI-ready architecture.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-light text-gray-900 text-center mb-16">
          Our SAP Managed Services Portfolio
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-gray-600">

          <div>
            <h3 className="text-lg text-gray-900 mb-2">Application Management (AMS)</h3>
            <p>End-to-end support across FI/CO, SD, MM, PP, HCM.</p>
          </div>

          <div>
            <h3 className="text-lg text-gray-900 mb-2">SAP Basis & Technical Ops</h3>
            <p>Monitoring, patching, performance tuning, HANA administration.</p>
          </div>

          <div>
            <h3 className="text-lg text-gray-900 mb-2">Cloud & Migration</h3>
            <p>RISE/GROW implementations, AWS/Azure/GCP support.</p>
          </div>

          <div>
            <h3 className="text-lg text-gray-900 mb-2">Proactive Monitoring</h3>
            <p>AIOps alerts, predictive maintenance, automation.</p>
          </div>

          <div>
            <h3 className="text-lg text-gray-900 mb-2">Security & Compliance</h3>
            <p>SAP GRC, audit readiness, cybersecurity posture.</p>
          </div>

          <div>
            <h3 className="text-lg text-gray-900 mb-2">Upgrades & Innovation</h3>
            <p>S/4HANA upgrades, Clean Core, BTP extensions.</p>
          </div>

        </div>
      </section>

      {/* ENGAGEMENT + RESULTS SIDE BY SIDE */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

        {/* Engagement Model */}
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            Engagement Model
          </h2>

          <div className="space-y-4 text-gray-600">
            <p><strong className="text-gray-900">Discovery</strong> — Free 2-week assessment</p>
            <p><strong className="text-gray-900">Transition</strong> — Zero downtime handover</p>
            <p><strong className="text-gray-900">Operations</strong> — 24×7 command center</p>
            <p><strong className="text-gray-900">Continuous Improvement</strong> — Quarterly optimization</p>
          </div>
        </div>

        {/* Proven Results */}
        <div>
          <h2 className="text-2xl font-light text-gray-900 mb-6">
            Proven Results
          </h2>

          <div className="space-y-4 text-gray-600">
            <p>“Reduced SAP incidents by 62% in 90 days.”</p>
            <p>“RISE migration completed with zero disruption.”</p>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6 bg-gray-50">
        <h2 className="text-3xl font-light text-gray-900 mb-6">
          Ready to take the noise out of your SAP operations?
        </h2>

        <p className="text-gray-600 mb-6">
          Let’s build a predictable, high-performance SAP environment.
        </p>

        <div className="space-y-2 text-gray-700">
          <p>hr@a2techconsult.com</p>
          <p>sales@a2techconsult.com</p>
          <p>+1 (408) 499-3596</p>
        </div>
      </section>

    </main>
  );
}
