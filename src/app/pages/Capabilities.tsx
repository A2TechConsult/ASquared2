import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Brain, Users, Stethoscope, Database, Rocket, Network, Server, GitBranch } from 'lucide-react';

export function Capabilities() {
  const groups = [
    {
      icon: Brain,
      title: 'AI Engineering & Agentic Systems',
      tags: ['LLM / RAG', 'Agentic AI', 'MLOps', 'Responsible AI'],
      description:
        'An AI development partner at our core — generative AI and LLM applications, RAG on your proprietary data, autonomous agents (LangGraph / AutoGen), MLOps on Databricks and Vertex, and governance frameworks for responsible, production-grade AI.',
    },
    {
      icon: Users,
      title: 'Expert Talent & Staff Augmentation',
      tags: ['AI / ML Engineers', 'Data Scientists', 'SAP Architects', 'Dedicated Teams'],
      description:
        'Platinum-level technologists integrated into your teams — AI / ML engineers, data scientists, SAP architects, Vistex and Plex specialists, .NET developers, DevOps engineers and Fiori developers. Current, reliable, ready to execute from day one.',
    },
    {
      icon: Stethoscope,
      title: 'Healthcare AI & Clinical Workflows',
      tags: ['Ambient Dictation', 'HL7 / FHIR', 'CGM AI', 'HIPAA'],
      description:
        'HIPAA-ready clinical AI — ambient dictation into Epic and Cerner, PDF-to-HL7 lab pipelines, continuous glucose monitoring intelligence, and streaming anomaly detection on ICU vitals. Built around the clinician workflow.',
    },
    {
      icon: Database,
      title: 'SAP S/4HANA & Managed Services',
      tags: ['S/4HANA', 'ECC to S/4', 'SAP Joule', 'AMS / Cloud ALM'],
      description:
        'Deep SAP foundations — brownfield conversions, greenfield builds, SAP Joule copilot integration — paired with 24×7 managed services, L2 / L3 support, and continuous optimization through SAP Solution Manager and Cloud ALM.',
    },
    {
      icon: Network,
      title: 'Integration, Vistex & Plex Manufacturing',
      tags: ['CPI / PI / PO', 'Vistex Pricing', 'Plex ERP', 'IBP / EWM'],
      description:
        'Hybrid integration on SAP CPI / PI / PO, complex pricing and rebate management on Vistex, Plex ERP and MES for manufacturing (APQP, PPAP, SPC), and end-to-end supply chain execution across IBP, EWM, TM, and GTS.',
    },
    {
      icon: Server,
      title: '.NET Development & Product Engineering',
      tags: ['.NET 8', 'ASP.NET Core', 'Azure .NET', 'Dynamics 365'],
      description:
        'Enterprise .NET talent and full product engineering teams — ASP.NET Core, Blazor, MAUI, microservices on Clean Architecture, Azure App Service and Functions, SQL Server, SharePoint and Dynamics 365. Greenfield products through GA.',
    },
    {
      icon: GitBranch,
      title: 'DevOps, Cloud & SRE',
      tags: ['Azure / AWS / GCP', 'Kubernetes', 'Terraform', 'Observability'],
      description:
        'CI / CD pipelines, Kubernetes platforms, infrastructure as code (Terraform, Bicep), SRE practices, and DevSecOps across Azure, AWS and GCP — including SAP BTP and Cloud ALM pipelines for enterprise release discipline.',
    },
        {
      icon: Rocket,
      title: 'Program & Project Delivery',
      tags: ['SAP Activate', 'Global Rollouts', 'Agile / Hybrid', 'Go-Live'],
      description:
        'Full-lifecycle delivery with the SAP Activate framework — architecture authority, testing strategy, cutover planning, go-live execution, and hypercare — on multi-country, multi-site programs.',
    },
  ];

  return (
    <main className="pt-4 pb-16 px-6">
      {/* Hero */}
      <section className="max-w-6xl mx-auto mb-12">
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
            AI-first consulting. Expert talent. Deep enterprise foundations. The capabilities we lead with — and the ones you can count on behind them.
          </p>
        </motion.div>
      </section>

      {/* Grouped tiles — 2 columns */}
      <section className="max-w-6xl mx-auto mb-16">
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
      <section className="max-w-6xl mx-auto mb-16">
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
            Discuss your AI roadmap
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Share the problem you want to move on — AI, talent, SAP, or healthcare — and we'll scope a path forward.
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
