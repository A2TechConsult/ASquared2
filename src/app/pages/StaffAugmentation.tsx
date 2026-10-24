import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Users, Award, Target, Briefcase, Code, Shield, Brain, Check, ArrowRight } from 'lucide-react';
import { HeroImage } from '@/app/components/HeroImage';

export function StaffAugmentation() {
  const expertiseAreas = [
    {
      icon: Code,
      title: 'SAP Expertise',
      subtitle: 'End-to-End SAP Professionals',
      roles: [
        'SAP S/4HANA Solution Architects',
        'ABAP / ABAP OO Developers (Fiori, RAP, CDS)',
        'SAP BTP Integration Specialists',
        'SAP Basis & HANA Database Administrators',
        'Functional Consultants (FI/CO, MM/SD, PP/QM)',
        'SAP Security & GRC Consultants',
        'SAP Analytics Cloud (SAC) Specialists',
        'SAP MDG & MDM Experts',
      ],
    },
    {
      icon: Award,
      title: 'Vistex Specialists',
      subtitle: 'Pricing & Incentive Management',
      roles: [
        'Vistex Solution Architects',
        'Vistex Functional Consultants (Rebates, Chargebacks)',
        'Vistex Technical Developers (ABAP, Workflow)',
        'Channel Incentive Management Experts',
        'Vistex Integration Specialists (SAP SD / FI)',
        'Trade Promotion Management Consultants',
        'Vistex Upgrade & Migration Specialists',
        'Royalty & Licensing Management Experts',
      ],
    },
    {
      icon: Briefcase,
      title: 'Plex / Rockwell Automation',
      subtitle: 'Manufacturing Cloud Solutions',
      roles: [
        'Plex ERP Implementation Consultants',
        'Plex MES (Manufacturing Execution) Specialists',
        'Plex Quality Management Experts (APQP, PPAP, SPC)',
        'Plex Supply Chain Consultants',
        'Rockwell Automation Integration Architects',
        'Plex–SAP Integration Developers',
        'Plex Production Monitoring Analysts',
        'Automotive Industry Plex Specialists',
      ],
    },
    {
      icon: Brain,
      title: 'AI, ML & Data Science',
      subtitle: 'Modern Intelligence Engineering',
      roles: [
        'Generative AI & LLM Engineers (OpenAI, Azure OpenAI, Anthropic)',
        'Agentic AI Architects (LangGraph, AutoGen, CrewAI)',
        'RAG & Vector Search Engineers (pgvector, Pinecone, Weaviate)',
        'MLOps Engineers (MLflow, Databricks, Vertex AI, SageMaker)',
        'Data Scientists (forecasting, NLP, computer vision)',
        'Data Engineers (Databricks, Snowflake, Delta Lake, dbt)',
        'Clinical / Healthcare AI Specialists (FHIR, HL7, HIPAA)',
        'Responsible AI, Evaluation & Red-Team Engineers',
      ],
    },
    {
      icon: Target,
      title: 'Project Execution',
      subtitle: 'Leadership & Delivery',
      roles: [
        'SAP Program Managers (PMP, SAFe certified)',
        'Solution Architects (multi-system landscapes)',
        'PMO Leads & Project Coordinators',
        'Change Management & Training Specialists',
        'Business Analysts (requirements, process design)',
        'Scrum Masters & Agile Coaches',
        'Cutover & Go-Live Managers',
        'Post-Production Support Leads',
      ],
    },
    {
      icon: Shield,
      title: 'Testing & Quality Assurance',
      subtitle: 'Enterprise QA Excellence',
      roles: [
        'SAP Test Managers & Test Leads',
        'Automated Testing Engineers (Tricentis Tosca, SAP TAO)',
        'Performance Testing Specialists (LoadRunner, JMeter)',
        'SAP Security Testing Consultants',
        'Regression & UAT Coordinators',
        'Test Data Management Experts',
        'SAP Solution Manager Testing Architects',
        'Continuous Testing DevOps Engineers',
      ],
    },
    {
      icon: Users,
      title: 'Proof of Concept Delivery',
      subtitle: 'Rapid Innovation',
      roles: [
        'PoC Solution Architects',
        'Rapid Prototyping Developers',
        'SAP Innovation Consultants (BTP, AI/ML)',
        'Demo Environment Specialists',
        'Technical Feasibility Analysts',
        'PoC-to-Production Transition Managers',
        'SAP Fiori UX / UI Designers',
        'Integration PoC Specialists (APIs, Middleware)',
      ],
    },
  ];

  const engagementModels = [
    {
      model: 'Dedicated Resources',
      description: 'Full-time allocation of specialists exclusively to your project. Long-term stability with deep domain knowledge transfer.',
      ideal: 'Multi-year SAP transformations, ongoing support, strategic initiatives',
      duration: '6–36 months',
    },
    {
      model: 'Project-Based Teams',
      description: 'Assembled teams for specific deliverables with defined scope and timeline. End-to-end ownership with accountability.',
      ideal: 'S/4HANA migrations, module implementations, system upgrades',
      duration: '3–18 months',
    },
    {
      model: 'On-Demand Expertise',
      description: 'Flexible access to specialists for targeted activities. Rapid mobilization with minimal overhead.',
      ideal: 'Technical spikes, architecture reviews, crisis resolution',
      duration: '2 weeks – 6 months',
    },
    {
      model: 'Hybrid Onshore–Offshore',
      description: 'Optimized blend of onsite presence and offshore delivery. Cost efficiency without compromising quality.',
      ideal: 'Large-scale implementations, development-heavy projects',
      duration: 'Flexible, project-dependent',
    },
  ];

  const qualityStandards = [
    {
      standard: 'Platinum-Level Certification',
      description: 'All consultants hold current SAP, Vistex, Plex, or cloud/AI certifications with proven project portfolios. Minimum 5 years enterprise experience required.',
    },
    {
      standard: 'Pre-Vetted Talent Pool',
      description: 'Rigorous technical assessments, client reference checks, and cultural fit evaluation. Only top 10% of candidates join our network.',
    },
    {
      standard: 'Continuous Skill Development',
      description: 'Mandatory quarterly training on latest releases, emerging technologies, and industry best practices. Investment in consultant excellence.',
    },
    {
      standard: 'Performance Accountability',
      description: 'Regular performance reviews, client feedback integration, and KPI tracking. Replacement guarantee if expectations are not met.',
    },
  ];

  return (
    <main className="pt-8 pb-24">
      {/* Hero */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 tracking-tight">
              Expertise
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Platinum-level technologists integrated into your teams. Skilled, current, reliable — and ready to execute from day one. SAP, Vistex, Plex, AI/ML, and specialty talent for critical enterprise initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero graphic */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <HeroImage variant="expertise" />
        </div>
      </section>

      {/* Expertise Areas — two columns */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
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
                    {area.title}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-6">
                    {area.subtitle}
                  </p>

                  <div className="space-y-2">
                    {area.roles.map((role, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <ArrowRight className="size-3.5 text-gray-400 flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-600 leading-relaxed">{role}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="px-6 mb-32 bg-gray-50 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Engagement Models
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Flexible approaches tailored to your project timelines and budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {engagementModels.map((engagement, index) => (
              <motion.div
                key={engagement.model}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-10 h-full border border-gray-100 hover:border-gray-200 transition-all duration-300"
              >
                <h3 className="text-2xl font-light text-gray-900 tracking-tight mb-4">
                  {engagement.model}
                </h3>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {engagement.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-2">
                      Ideal For
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {engagement.ideal}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-2">
                      Typical Duration
                    </div>
                    <p className="text-sm text-gray-900 font-medium">
                      {engagement.duration}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
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
              Quality Assurance
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Rigorous standards ensure only exceptional talent joins your team.
            </p>
          </motion.div>

          <div className="space-y-12">
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={standard.standard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex gap-8">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-12 h-12 bg-gray-900 flex items-center justify-center">
                      <Check className="size-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-gray-900 tracking-tight mb-3">
                      {standard.standard}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-3xl">
                      {standard.description}
                    </p>
                  </div>
                </div>
              </motion.div>
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
              Build your team
            </h3>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Share your resource requirements and project timeline. We'll provide qualified candidates within 48 hours.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-5 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-medium tracking-wide"
            >
              Request resources
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
