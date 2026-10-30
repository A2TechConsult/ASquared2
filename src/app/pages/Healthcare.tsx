import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Droplets,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

export function Healthcare() {
  const capabilities = [
    {
      icon: Droplets,
      title: 'CGM Intelligence & Glycemic Risk',
      subtitle: 'Continuous Glucose Monitoring AI, inside Epic',
      description:
        "AI on continuous glucose monitor streams,  Dexcom, FreeStyle Libre, Medtronic Guardian,  fused with nutrition, insulin, and activity context. Early flags for hypo and hyper events, pattern coaching and clinician dashboards, surfaced inside the Epic workflow via HL7 and FHIR under a HIPAA perimeter.",
      features: [
        'Streaming CGM ingestion,  Dexcom G7, FreeStyle Libre 3, Medtronic Guardian',
        'Hypo / hyper early-warning scoring with personalized thresholds',
        'Nutrition, insulin, and activity context fusion',
        'TIR, TBR, GMI dashboards for endocrinology teams',
        'Epic in-basket integration via HL7 v2 and FHIR R4',
      ],
    },
  ];

  const deliveryApproach = [
    {
      phase: 'Clinical Discovery',
      description:
        'Workshops with endocrinology, informatics and compliance to map the real workflow, surface pain points and align on measurable outcomes.',
    },
    {
      phase: 'Proof of Concept',
      description:
        'Edge-deployable pilot with de-identified real data. HIPAA perimeter respected throughout. Weekly clinician review loops to tune thresholds and workflow fit.',
    },
    {
      phase: 'Production Deployment',
      description:
        'Full Epic integration via HL7 and FHIR. BAA with every sub-processor. EU AI Act conformance documentation. Audit log retention per policy.',
    },
    {
      phase: 'Clinical Monitoring',
      description:
        'Model drift monitoring per unit, false-alert budget tracking, confidence calibration and continuous clinician feedback integrated into the review queue.',
    },
  ];

  const projects = [
    {
      title: 'CGM Glycemic Intelligence,  Endocrinology Group',
      challenge:
        'Endocrinology team needed earlier flags for hypo events and clearer time-in-range reporting across a diverse CGM device mix',
      solution:
        'Streaming ingestion from Dexcom G7, FreeStyle Libre 3 and Medtronic Guardian, with personalized thresholds, nutrition / insulin context fusion and Epic in-basket integration via HL7 and FHIR',
      impact:
        'Hypo warnings delivered 32 minutes earlier on average; TIR reporting adopted by 94% of clinicians within 60 days; zero PHI incidents in year 1',
    },
  ];

  const compliance = [
    'HIPAA',
    'HITRUST (in progress)',
    'SOC 2 Type II (in progress)',
    'ISO 27001',
    'ISO 27701',
    'HL7 v2',
    'FHIR R4 / R5',
    'USCDI v4',
    '21 CFR Part 11',
    'EU GDPR',
    'EU AI Act',
    'BAA-ready',
  ];

  return (
    <main className="pt-4 pb-16">
      {/* Hero */}
      <section className="px-6 mb-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight">
              Healthcare
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Clinical AI focused on continuous glucose monitoring intelligence,  delivered inside the Epic workflow via HL7 and FHIR, under a HIPAA perimeter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-1">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    className="bg-white hover:bg-gray-50 transition-all duration-300"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-12 py-10 border-b border-gray-100">
                      <div className="flex items-start gap-8 mb-8">
                        <div className="flex-shrink-0 pt-1">
                          <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                            <Icon className="size-8 text-white" />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-3xl font-light text-gray-900 tracking-tight mb-2">
                            {capability.title}
                          </h3>
                          <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">
                            {capability.subtitle}
                          </p>
                          <p className="text-gray-600 leading-relaxed max-w-3xl">
                            {capability.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 pl-[96px]">
                        {capability.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <ArrowRight className="size-4 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="px-6 mb-20 bg-gradient-to-b from-white via-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Delivery Methodology
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Proven approach that balances clinical workflow fit with regulatory discipline.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-12 left-0 right-0 h-px bg-gray-300 hidden md:block"></div>

            <div className="grid md:grid-cols-4 gap-8">
              {deliveryApproach.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  <div className="relative z-10 w-24 h-24 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-3xl font-light text-gray-900">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">
                    {phase.phase}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {phase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Representative Project
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Clinical workflow improved with a measurable outcome.
            </p>
          </motion.div>

          <div className="space-y-1">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="bg-white hover:bg-gray-50 transition-all duration-300"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-12 py-6 border-b border-gray-100">
                    <h3 className="text-3xl font-light text-gray-900 tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <div className="px-12 py-10">
                    <div className="grid md:grid-cols-3 gap-10">
                      <div>
                        <div className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                          Challenge
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>

                      <div>
                        <div className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                          Solution
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="size-4 text-gray-900" />
                          <div className="text-xs font-medium uppercase tracking-widest text-gray-500">
                            Impact
                          </div>
                        </div>
                        <p className="text-gray-900 font-medium leading-relaxed">
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <ShieldCheck className="size-10 text-gray-900 mx-auto mb-6" />
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Compliance Posture
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              The engineering discipline regulators expect, authored in parallel with the build.
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {compliance.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 bg-gray-50 border border-gray-200 text-xs font-medium uppercase tracking-wider text-gray-700"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">
              Talk to a Health Architect
            </h3>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              30 minutes with the practice lead. Bring the CGM workflow you want to improve, the EHR you run, and the metric you want to move.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-5 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-medium tracking-wide"
            >
              Start a conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
