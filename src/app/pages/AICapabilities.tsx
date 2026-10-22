import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, Database, Cpu, Brain, Zap, Network, ArrowRight, TrendingUp, Mic, FileText, Activity, ShieldCheck } from 'lucide-react';

export function AICapabilities() {
  // Mixed order: healthcare and enterprise AI interleaved so SAP is not first
  const capabilities = [
    {
      icon: Mic,
      title: 'Clinical AI & Ambient Dictation',
      subtitle: 'Healthcare — Speech & Documentation',
      description: 'HIPAA-ready ambient dictation and clinical scribing that captures the physician-patient encounter and produces structured notes, orders, and codes.',
      features: [
        'Azure Speech + medical ASR with specialty vocabularies',
        'Structured SOAP note generation',
        'ICD-10 / CPT coding assistance',
        'EHR write-back (Epic, Cerner, Meditech)',
        'Clinician review and sign-off workflows',
      ],
    },
    {
      icon: Brain,
      title: 'Retrieval-Augmented Generation',
      subtitle: 'Enterprise RAG Systems',
      description: 'Custom RAG architectures that combine your proprietary data with large language models, delivering contextually accurate responses grounded in your business knowledge.',
      features: [
        'Vector database design and optimization',
        'Semantic search and document retrieval',
        'Multi-modal data integration',
        'Fine-tuned embedding models',
        'Real-time knowledge graph updates',
      ],
    },
    {
      icon: Activity,
      title: 'Medical Anomaly Detection',
      subtitle: 'Healthcare — Real-Time Signals',
      description: 'Real-time anomaly detection across vitals, imaging, and surgical / triage video to surface early sepsis, deterioration, and procedural risks.',
      features: [
        'ICU vitals streaming and early-warning scoring',
        'Surgical and triage video analysis',
        'Imaging triage with radiologist workflow',
        'Alerting that respects clinical escalation paths',
        'Model monitoring and bias mitigation',
      ],
    },
    {
      icon: Zap,
      title: 'Agentic AI Systems',
      subtitle: 'Autonomous Intelligence',
      description: 'Self-directed AI agents that reason, plan, and execute complex workflows across your enterprise systems with minimal human intervention.',
      features: [
        'Multi-agent orchestration frameworks',
        'Goal-oriented task planning',
        'Tool-using AI with API integration',
        'Self-correcting execution loops',
        'Human-in-the-loop oversight mechanisms',
      ],
    },
    {
      icon: FileText,
      title: 'Lab Documents & Cross-EHR Mapping',
      subtitle: 'Healthcare — Interoperability',
      description: 'Automated conversion of lab PDFs, scanned reports, and legacy formats into HL7 v2 and FHIR R4/R5, with cross-EHR case mapping for continuity of care.',
      features: [
        'PDF / image to HL7 v2 and FHIR conversion',
        'USCDI v4 and payer data model alignment',
        'Cross-EHR patient and case reconciliation',
        'Document AI with specialty validators',
        'Audit trails for 21 CFR Part 11',
      ],
    },
    {
      icon: Sparkles,
      title: 'SAP Joule Integration',
      subtitle: 'Generative AI for SAP',
      description: 'Implementation and customization of SAP\'s generative AI copilot across your S/4HANA landscape, enhancing productivity and decision-making.',
      features: [
        'SAP Joule deployment and configuration',
        'Custom skill development for business processes',
        'Integration with SAP Analytics Cloud',
        'Natural language query interfaces',
        'Workflow automation using generative AI',
      ],
    },
    {
      icon: Database,
      title: 'Databricks & Data Lakes',
      subtitle: 'Unified Analytics Platform',
      description: 'End-to-end Databricks implementations for lakehouse architecture, enabling AI/ML workloads on massive datasets with enterprise governance.',
      features: [
        'Delta Lake architecture and optimization',
        'MLflow for model lifecycle management',
        'Real-time streaming analytics pipelines',
        'Unity Catalog for data governance',
        'Databricks SQL for business intelligence',
      ],
    },
    {
      icon: Network,
      title: 'Salesforce Einstein AI',
      subtitle: 'Intelligent CRM',
      description: 'Advanced Einstein implementations that predict customer behavior, automate sales workflows, and deliver personalized engagement at scale.',
      features: [
        'Einstein GPT for personalized content generation',
        'Predictive lead scoring and opportunity insights',
        'Einstein Bots for intelligent customer service',
        'Einstein Discovery for automated analytics',
        'Custom Einstein model training and deployment',
      ],
    },
    {
      icon: Cpu,
      title: 'Custom AI Solutions',
      subtitle: 'Precision-Engineered Intelligence',
      description: 'Bespoke AI systems tailored to your unique business challenges, from computer vision to natural language understanding.',
      features: [
        'Domain-specific model fine-tuning',
        'MLOps pipelines for continuous deployment',
        'Edge AI for low-latency inference',
        'Responsible AI frameworks and bias mitigation',
        'AI explainability and model interpretability',
      ],
    },
  ];

  const deliveryApproach = [
    {
      phase: 'Discovery',
      description: 'Deep analysis of your data landscape, business processes, and AI readiness. We identify high-impact use cases and define success metrics.',
    },
    {
      phase: 'Proof of Concept',
      description: 'Rapid prototyping with real data to validate technical feasibility and business value. Iterative refinement based on stakeholder feedback.',
    },
    {
      phase: 'Production Implementation',
      description: 'Scalable deployment with enterprise-grade security, monitoring, and governance. Integration with existing systems and workflows.',
    },
    {
      phase: 'Continuous Optimization',
      description: 'Model retraining, performance monitoring, and feature enhancement. Knowledge transfer and team enablement for long-term success.',
    },
  ];

  // Mixed order: healthcare and enterprise projects interleaved
  const projects = [
    {
      title: 'Ambient Dictation — 7-Hospital System',
      challenge: 'Regional health system needed to reduce clinician documentation burden across 7 hospitals',
      solution: 'Deployed ambient dictation with Azure Speech, specialty vocabularies, and Epic write-back',
      impact: '62% reduction in after-hours charting, higher clinician satisfaction scores',
    },
    {
      title: 'Manufacturing Intelligence',
      challenge: 'Global manufacturer needed real-time quality prediction across 40+ production lines',
      solution: 'Deployed Databricks lakehouse with MLflow-managed models, achieving 94% defect prediction accuracy',
      impact: '23% reduction in scrap costs, 15% improvement in first-pass yield',
    },
    {
      title: 'ICU Anomaly Detection — Early Sepsis',
      challenge: 'Academic medical center wanted earlier detection of sepsis in ICU populations',
      solution: 'Streaming anomaly detection on vitals and labs with clinician-tuned escalation paths',
      impact: 'Alerts 4–6 hours earlier than standard scoring, with reduced alert fatigue',
    },
    {
      title: 'Procurement Copilot',
      challenge: 'Fortune 500 client required intelligent procurement assistant for 5,000+ users',
      solution: 'Built RAG system on SAP Master Data with GPT-4, integrated into SAP Fiori',
      impact: '40% faster vendor selection, 60% reduction in manual data lookup',
    },
    {
      title: 'PDF-to-HL7 Lab Pipeline — MedTech ISV',
      challenge: 'MedTech ISV needed to ingest lab PDFs from 300+ facilities into a FHIR-based platform',
      solution: 'Document AI pipeline converting PDFs to HL7 v2 and FHIR R4 with specialty validators',
      impact: '94% straight-through processing, days-to-minutes turnaround for new facilities',
    },
    {
      title: 'Sales Forecasting',
      challenge: 'Distribution company needed accurate demand prediction across 200,000 SKUs',
      solution: 'Salesforce Einstein Discovery with external data enrichment and custom algorithms',
      impact: '18% forecast accuracy improvement, $12M inventory optimization',
    },
  ];

  const compliance = [
    'HIPAA', 'HITRUST', 'SOC 2 Type II', 'ISO 27001', 'ISO 27701',
    'HL7 v2', 'FHIR R4/R5', 'USCDI v4', '21 CFR Part 11', 'EU GDPR', 'EU AI Act', 'BAA-ready',
  ];

  return (
    <main className="pt-8 pb-24">
      {/* Hero Section */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 mb-8">
              <Sparkles className="size-4 text-gray-600" />
              <span className="text-xs font-medium uppercase tracking-widest text-gray-600">
                AI & Healthcare
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
              AI Capabilities
            </h1>

            <p className="text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
              Enterprise-grade AI across SAP, operations, and healthcare. From generative AI and autonomous agents to clinical dictation and medical anomaly detection — precision-engineered AI systems designed for enterprise scale, security, and governance, including HIPAA-ready healthcare workflows, delivered with measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities - Two-column grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-100 p-10 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center mb-6">
                    <Icon className="size-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-light text-gray-900 tracking-tight mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-5">
                    {capability.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {capability.description}
                  </p>

                  <div className="space-y-2">
                    {capability.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ArrowRight className="size-3.5 text-gray-400 flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Approach - Premium Timeline */}
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
              Proven approach that balances speed with rigor, from concept to production.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
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

      {/* Representative Projects - Two-column grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Representative Projects
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Real implementations delivering measurable business value — across enterprise AI and healthcare.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-100 p-10 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300"
              >
                <h3 className="text-2xl font-light text-gray-900 tracking-tight mb-6">
                  {project.title}
                </h3>

                <div className="mb-5">
                  <div className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-2">
                    Challenge
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="mb-5">
                  <div className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-2">
                    Solution
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="size-4 text-gray-900" />
                    <div className="text-xs font-medium uppercase tracking-widest text-gray-500">
                      Impact
                    </div>
                  </div>
                  <p className="text-sm text-gray-900 font-medium leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Badges */}
      <section className="px-6 mb-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <ShieldCheck className="size-5 text-gray-700" />
              <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                Security & Compliance
              </span>
            </div>
            <h2 className="text-3xl font-light text-gray-900 mb-10 tracking-tight">
              Built for regulated environments
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {compliance.map((item) => (
                <span
                  key={item}
                  className="text-xs uppercase tracking-wider text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
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
              Explore AI for your enterprise
            </h3>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a technical consultation to discuss your AI roadmap and proof-of-concept opportunities.
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
