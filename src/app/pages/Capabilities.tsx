import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Database, Headphones, Brain, Rocket, Network, DollarSign } from 'lucide-react';

export function Capabilities() {
  const groups = [
    {
      icon: Database,
      title: 'SAP S/4HANA & AI Automation',
      tags: ['S/4HANA', 'ECC to S/4', 'SAP Joule', 'Intelligent RPA'],
      description:
        'End-to-end S/4HANA transformation — brownfield conversions, greenfield builds, custom-code remediation — paired with embedded AI across your SAP landscape (Joule, predictive analytics, intelligent automation).',
    },
    {
      icon: Headphones,
      title: 'Managed Services & Staff Augmentation',
      tags: ['L2/L3 AMS', 'Cloud ALM', 'Certified Experts', 'Dedicated Teams'],
      description:
        'Production support, proactive monitoring, and continuous optimization through SAP Solution Manager / Cloud ALM — plus platinum-level consultants (SAP, Vistex, ABAP, Fiori, Integration) ready to join your team.',
    },
    {
      icon: Brain,
      title: 'Data Science & AI Expertise',
      tags: ['AI / ML', 'RAG', 'Agentic AI', 'MLOps'],
      description:
        'Modern AI engineering across the enterprise — generative AI and LLM apps, RAG on your proprietary data, autonomous agents, MLOps on Databricks and Vertex, and clinical / healthcare AI with FHIR and HIPAA controls.',
    },
    {
      icon: Rocket,
      title: 'Program & Project Delivery',
      tags: ['SAP Activate', 'Global Rollouts', 'Agile / Hybrid', 'Go-Live'],
      description:
        'Full-lifecycle delivery with the SAP Activate framework — architecture authority, testing strategy, cutover planning, go-live execution, and hypercare — on multi-country, multi-site programs.',
    },
    {
      icon: Network,
      title: 'Integration & Supply Chain',
      tags: ['CPI / PI / PO', 'API Mgmt', 'IBP', 'EWM & TM'],
      description:
        'Hybrid integration on SAP CPI / PI / PO with APIs, EDI, and real-time replication — plus end-to-end supply chain execution across IBP, EWM, TM, and Global Trade Services.',
    },
    {
      icon: DollarSign,
      title: 'Vistex & Plex Manufacturing',
      tags: ['Vistex Pricing', 'Rebates', 'Plex ERP', 'MES'],
      description:
        'Complex pricing, rebate, and incentive management on SAP Vistex — plus Plex ERP, MES, and quality (APQP, PPAP, SPC) for discrete and process manufacturing with SAP integration.',
    },
  ];

  return (
    <main className="pt-8 pb-24 px-6">
      {/* Hero */}
      <section className="max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Capabilities
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Full-spectrum SAP, AI, and specialty consulting — from strategy and implementation to managed services and expert talent.
          </p>
        </motion.div>
      </section>

      {/* Grouped tiles — 2 columns */}
      <section className="max-w-6xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-200 p-8 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center flex-shrink-0">
                    <Icon className="size-6 text-white" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-light text-gray-900 tracking-tight">
                      {group.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wider text-gray-500 bg-gray-50 group-hover:bg-white border border-gray-200 px-2.5 py-1 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Delivery Excellence */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3 tracking-tight">
              Delivery Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured methodology combining industry best practices with proven execution frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { phase: 'Discover', description: 'Business case, current state, solution blueprint' },
              { phase: 'Design', description: 'Architecture, configuration, integration design' },
              { phase: 'Deploy', description: 'Build, test, data migration, training, cutover' },
              { phase: 'Deliver', description: 'Hypercare, continuous improvement, managed services' },
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-light text-gray-200 mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {step.phase}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-12 text-center"
        >
          <h3 className="text-2xl font-light text-gray-900 mb-3">
            Discuss your requirements
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Schedule a consultation to explore how our capabilities align with your enterprise objectives.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            Start a conversation
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
