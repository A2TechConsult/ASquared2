import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Lightbulb, Compass, Rocket, Shield, Zap, BookOpen, DollarSign, Clock, Users } from 'lucide-react';

export function OurApproach() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Header */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
              Our approach.
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Built on SAP Activate methodology. Refined through 500+ enterprise implementations. 
              Architected for scale. Delivered with discipline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methodology Overview - Hero Statement */}
      <section className="px-6 mb-32 bg-gradient-to-b from-gray-50 to-white py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
              SAP Activate.<br />Battle-tested.
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Our delivery framework combines SAP's standard Activate methodology with proven practices from global rollouts. 
              We bring structure to complexity without sacrificing speed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4 Phases - Premium List Layout */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">Delivery methodology</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Four phases. Proven framework. Consistent execution.
            </p>
          </motion.div>

          <div className="space-y-1">
            {[
              {
                icon: Lightbulb,
                phase: '01',
                title: 'Discovery & Assessment',
                description: 'Business process analysis, current-state documentation, gap analysis',
                practices: [
                  'Executive stakeholder alignment workshops',
                  'As-is process documentation with BPMN 2.0',
                  'Technical landscape assessment (system inventory, integrations)',
                  'Fit-to-standard analysis against SAP best practices',
                  'Custom code analysis and remediation roadmap',
                  'TCO modeling and business case validation',
                ],
              },
              {
                icon: Compass,
                phase: '02',
                title: 'Solution Design & Architecture',
                description: 'Enterprise architecture, integration design, data migration strategy',
                practices: [
                  'To-be process design with SAP Model Company templates',
                  'Solution architecture blueprint (infrastructure, security, integration)',
                  'Data migration architecture (LSMW, LTMC, SAP Data Services)',
                  'Interface design specifications (REST, SOAP, RFC, IDOC)',
                  'Authorization concept and role design (PFCG)',
                  'Deployment architecture for hybrid/cloud landscapes',
                ],
              },
              {
                icon: Rocket,
                phase: '03',
                title: 'Realization & Build',
                description: 'Configuration, development, testing, cutover preparation',
                practices: [
                  'Iterative configuration sprints (2-week cadence)',
                  'Custom development with code review gates',
                  'Unit testing with automated regression suites',
                  'Integration testing in sandbox and QA environments',
                  'User acceptance testing with business process owners',
                  'Cutover runbook creation and dry-run validation',
                ],
              },
              {
                icon: Shield,
                phase: '04',
                title: 'Deploy & Operate',
                description: 'Go-live execution, hypercare support, continuous improvement',
                practices: [
                  'Go-live cutover with 24/7 war room support',
                  'Hypercare period (4-8 weeks post go-live)',
                  'Incident triage and resolution (P1-P4 classification)',
                  'Performance monitoring and optimization',
                  'End-user training and role-based certification',
                  'Transition to managed services or internal teams',
                ],
              },
            ].map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    className="px-12 py-12 bg-white hover:bg-gray-50 transition-all duration-300"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-10">
                      {/* Icon + Phase Number */}
                      <div className="flex-shrink-0 pt-1">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 flex items-center justify-center">
                            <Icon className="size-8 text-gray-900 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div className="text-6xl font-light text-gray-200 group-hover:text-gray-300 transition-colors duration-300">
                            {phase.phase}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 pt-2">
                        <h3 className="text-3xl font-light text-gray-900 tracking-tight mb-2">
                          {phase.title}
                        </h3>
                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">
                          {phase.description}
                        </p>

                        {/* Practices List */}
                        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                          {phase.practices.map((practice, i) => (
                            <li key={i} className="text-gray-600 flex items-start">
                              <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                              <span className="text-sm leading-relaxed">{practice}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance Framework - 3 Column Cards */}
      <section className="px-6 mb-32 bg-white py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Governance framework
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Structured controls for enterprise-grade delivery. Risk management without bureaucracy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              {
                icon: Zap,
                title: 'Project Governance',
                items: [
                  'Steering committee (executive oversight)',
                  'Weekly status reporting with RAG indicators',
                  'Issue escalation matrix (L1-L4)',
                  'Change control board for scope management',
                  'Risk register with mitigation plans',
                ],
              },
              {
                icon: Shield,
                title: 'Quality Assurance',
                items: [
                  'Peer review for configuration and code',
                  'Automated testing with SAP Test Automation',
                  'Performance testing for transaction volumes',
                  'Security scans and vulnerability assessments',
                  'Go-live readiness checklist (150+ criteria)',
                ],
              },
              {
                icon: BookOpen,
                title: 'Knowledge Management',
                items: [
                  'Centralized documentation repository',
                  'As-built documentation updated in real-time',
                  'Training materials and quick reference guides',
                  'Knowledge transfer sessions before handover',
                  'Run-book creation for support teams',
                ],
              },
            ].map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-b from-white to-gray-50 border border-gray-200 hover:border-gray-300 p-10 h-full transition-all duration-300 hover:shadow-lg">
                    <div className="mb-6">
                      <Icon className="size-8 text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-2xl font-light text-gray-900 tracking-tight">{area.title}</h3>
                    </div>
                    <ul className="space-y-4">
                      {area.items.map((item, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accelerators & IP - Horizontal Scroll */}
      <section className="px-6 mb-32 bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Accelerators & IP
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Pre-built assets that reduce implementation time and risk. Refined through production deployments.
            </p>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-8">
              <div className="flex gap-6 min-w-max px-4">
                {[
                  {
                    category: 'SAP S/4HANA',
                    tools: [
                      'Industry-specific best-practice templates (Life Sciences, Manufacturing)',
                      'Custom code scanner and remediation toolkit',
                      'Data migration templates for MDM and transactional data',
                      'Fiori app catalog with custom extensions',
                      'Integration patterns library (CPI/PI)',
                    ],
                  },
                  {
                    category: 'Vistex',
                    tools: [
                      'Rebate management configuration templates',
                      'Channel incentive program frameworks',
                      'Integration adapters for SAP SD and third-party',
                      'Reporting dashboards for claims and settlements',
                      'Testing scripts for complex pricing scenarios',
                    ],
                  },
                  {
                    category: 'Plex Systems',
                    tools: [
                      'Manufacturing BOM and routing templates',
                      'Quality management workflows (APQP, PPAP)',
                      'Shop floor data collection interfaces',
                      'Supplier portal integration framework',
                      'Real-time OEE dashboards',
                    ],
                  },
                  {
                    category: 'Cross-Platform',
                    tools: [
                      'DevOps pipeline for CI/CD (Git, Jenkins, CTS+)',
                      'Automated regression testing frameworks',
                      'Monitoring and alerting templates (SAP Solution Manager)',
                      'Cutover management toolkit (task lists, checklists)',
                      'Post-implementation health check scripts',
                    ],
                  },
                ].map((accelerator, index) => (
                  <motion.div
                    key={accelerator.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="w-96 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 p-10 hover:shadow-lg hover:-translate-y-1 h-full">
                      <div className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-6">
                        {accelerator.category}
                      </div>
                      <ul className="space-y-4">
                        {accelerator.tools.map((tool, i) => (
                          <li key={i} className="text-gray-600 flex items-start">
                            <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                            <span className="text-sm leading-relaxed">{tool}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Scroll Hint */}
            <div className="text-center mt-8">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Scroll to explore
              </p>
            </div>
          </motion.div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>

      {/* Engagement Models - 3 Premium Cards */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              Engagement models
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Flexible commercial structures aligned to project risk and client preference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              {
                icon: DollarSign,
                model: 'Fixed Price',
                description: 'Defined scope, fixed timeline, guaranteed outcomes',
                fit: 'Ideal for well-defined projects with stable requirements (upgrades, migrations, rollouts)',
              },
              {
                icon: Clock,
                model: 'Time & Materials',
                description: 'Flexible scope, expert resources, transparent billing',
                fit: 'Best for exploratory work, AMS, or projects with evolving requirements',
              },
              {
                icon: Users,
                model: 'Managed Capacity',
                description: 'Dedicated team, ongoing support, monthly retainer',
                fit: 'Suited for long-term partnerships, application support, continuous enhancement',
              },
            ].map((model, index) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={model.model}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white hover:bg-gray-50 transition-all duration-300 p-10 h-full">
                    <div className="mb-6">
                      <Icon className="size-8 text-gray-900 mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-2xl font-light text-gray-900 tracking-tight mb-3">{model.model}</h3>
                      <p className="text-gray-600 leading-relaxed">{model.description}</p>
                    </div>
                    <div className="border-t border-gray-200 pt-6">
                      <div className="text-xs text-gray-500 uppercase tracking-widest mb-3">Best fit</div>
                      <p className="text-sm text-gray-600 leading-relaxed">{model.fit}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-light text-gray-900 mb-6 tracking-tight">
              See how we deliver results
            </h3>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Real outcomes from enterprise SAP implementations across industries.
            </p>
            <Link
              to="/outcomes"
              className="inline-block px-10 py-5 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-medium tracking-wide"
            >
              View client outcomes
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
