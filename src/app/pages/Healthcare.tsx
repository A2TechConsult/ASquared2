import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Stethoscope,
  Mic,
  FileText,
  Activity,
  Video,
  Workflow,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

export function Healthcare() {
  const capabilities = [
    {
      icon: Mic,
      title: 'Clinical Dictation',
      subtitle: 'Ambient Scribe',
      description:
        "Clinician speaks naturally during the encounter. Azure Speech transcribes with medical lexicons; a structured SOAP note lands in Epic or Cerner as a FHIR DocumentReference — billing-ready, so cases move straight into the revenue cycle without end-of-day documentation debt.",
      features: [
        'Streaming ASR with medical lexicons',
        'Speaker diarization — clinician, patient, family',
        'ICD-10, CPT, SNOMED, RxNorm code suggestion',
        'PHI de-identification on edge before cloud',
        'FHIR DocumentReference + Observation output',
      ],
    },
    {
      icon: FileText,
      title: 'Lab Results & Clinical Documents',
      subtitle: 'PDF → HL7 → FHIR',
      description:
        'Reference labs still send PDFs. We ingest them through Azure Document Intelligence, map every analyte to LOINC via a semantic matcher, and emit clean HL7 v2 ORU messages or FHIR R4 Observation / DiagnosticReport.',
      features: [
        'LOINC-mapped analyte extraction',
        'HL7 v2 ORU^R01 or FHIR R4 output',
        'Confidence-sized clinician review queue',
        '94.3% straight-through on multi-vendor PDFs',
        'BAA-covered end to end',
      ],
    },
    {
      icon: Workflow,
      title: 'Cross-EHR Case Mapping',
      subtitle: 'Longitudinal Patient View',
      description:
        'Patient records fractured across Epic, Cerner, Meditech, labs, imaging centers, specialty clinics. We build the longitudinal case view — probabilistic identity resolution, FHIR Patient $everything, SNOMED-hierarchy problem-list reconciliation.',
      features: [
        'Probabilistic patient identity matching',
        'FHIR Patient $everything orchestration',
        'SNOMED-hierarchy problem-list reconciliation',
        'RxNorm-based medication deduplication',
        'Workflow-surfaced in clinician EHR',
      ],
    },
    {
      icon: Activity,
      title: 'Medical Anomaly Detection',
      subtitle: 'Labs & Vitals Intelligence',
      description:
        'Streaming anomaly detection on lab panels and ICU vitals. Ensemble of isolation forests, LSTM autoencoders, and clinically-authored rules flags sepsis-risk signatures, AKI progression, electrolyte derangements. Routed as a non-blocking FHIR CommunicationRequest.',
      features: [
        'Early-sepsis signatures on vitals',
        'KDIGO-staged AKI progression monitoring',
        'Confidence-scored alerts with rationale',
        'Non-blocking FHIR CommunicationRequest',
        'Per-unit false-alert budget tracking',
      ],
    },
    {
      icon: Video,
      title: 'Surgical & Triage Video',
      subtitle: 'Real-Time Video Intelligence',
      description:
        'Real-time video stream analysis for surgical workflow phases, instrument tracking, and triage-room monitoring. Azure Video Indexer plus Custom Vision detectors — edge-first for low-latency intra-op signals, with a human-review loop on high-stakes classifications.',
      features: [
        'Surgical phase classification',
        'Visible instrument detection',
        'De-identified triage-room acuity signals',
        'Edge-first inference for intra-op latency',
        'FDA-adjacent documentation ready',
      ],
    },
    {
      icon: Stethoscope,
      title: 'Specialty Workflows',
      subtitle: 'GI · Ortho · Anesthesia · Nursing · Primary Care · ASCs',
      description:
        "Clinical workflows are specialty-shaped. The dictation that works in GI does not work in Orthopedics. The anesthesia record does not look like a nursing note. The ASC's cost ceiling does not match the health system's. We build with that in mind.",
      features: [
        'Gastroenterology — scope procedures, specimens',
        'Orthopedics — surgeon dictation, implant tracking',
        'Anesthesia — AIMS, pre-op, intra-op capture',
        'Nursing — bedside, charting, patient tracking',
        'Primary care — ambient SOAP, grounded Rx',
        'Ambulatory Surgery Centers — mobile-first, cost-sensitive',
      ],
    },
  ];

  const deliveryApproach = [
    {
      phase: 'Clinical Discovery',
      description:
        'Workshops with clinicians, informatics, and compliance to map the real workflow, surface pain points, and align on measurable outcomes.',
    },
    {
      phase: 'Proof of Concept',
      description:
        'Edge-deployable pilot with de-identified real data. HIPAA perimeter respected throughout. Weekly clinician review loops to tune extraction accuracy and workflow fit.',
    },
    {
      phase: 'Production Deployment',
      description:
        'Full EHR integration — Epic, Oracle Health, Meditech. BAA with every sub-processor. EU AI Act conformance documentation. Audit log retention per policy.',
    },
    {
      phase: 'Clinical Monitoring',
      description:
        'Model drift monitoring per unit, false-alert budget tracking, confidence calibration (ECE), and continuous clinician feedback integrated into the review queue.',
    },
  ];

  const projects = [
    {
      title: 'Ambient Dictation — 7-Hospital System',
      challenge:
        '400 clinicians spending 90+ minutes per day on after-hours charting',
      solution:
        'Edge-first ambient scribe with Azure Speech + gpt-4o, structured SOAP generation, Epic sidebar review',
      impact:
        '42% faster note authoring, clinician NPS from +12 to +48, zero PHI incidents in year 1',
    },
    {
      title: 'PDF-to-HL7 Lab Pipeline — MedTech ISV',
      challenge:
        'Reference-lab integration layer processing messy multi-vendor PDFs with manual review burden',
      solution:
        'LOINC-mapped extractor on Azure Document Intelligence with confidence-sized review queue',
      impact:
        '94.3% straight-through processing, 11× reduction in clinician review queue',
    },
    {
      title: 'ICU Anomaly Detection — Early Sepsis',
      challenge:
        'ICU team overwhelmed by SIRS/qSOFA alert fatigue; genuine sepsis signatures lost in noise',
      solution:
        'Ensemble (LSTM-AE + XGBoost + clinical rules) with per-unit false-alert budget and plain-English rationale',
      impact:
        'Alert precision up 3.4×, mean lead time on confirmed sepsis +2.1 hours vs standard scoring',
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
    <main className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 mb-32">
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
              Clinical AI that respects the clinician's workflow and the HIPAA perimeter. From ambient dictation to HL7 interoperability to surgical video intelligence — for hospitals, health systems, and ambulatory surgery centers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 mb-32">
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
      <section className="px-6 mb-32 bg-gradient-to-b from-white via-gray-50 to-white py-32">
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
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Representative Projects
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Clinical workflows improved with measurable outcomes.
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
      <section className="px-6 mb-32">
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
      <section className="px-6 py-32 bg-gradient-to-b from-white to-gray-50">
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
              30 minutes with the practice lead. Bring the workflow you want to improve, the EHR you run, and the metric you want to move.
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
