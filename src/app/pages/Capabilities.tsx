import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Database, 
  DollarSign, 
  Factory, 
  Network, 
  Truck, 
  Shield, 
  Smartphone, 
  Cloud, 
  Brain, 
  Headphones, 
  Users, 
  Rocket 
} from 'lucide-react';
import sapLogo from '../../assets/c9abc9544e6f5a5b70e5eec942b60f8010decd05.png';
import vistexLogo from '../../assets/0e35773da41fd1c0fdd252643e1eeeaab9fa05a2.png';
import plexLogo from '../../assets/7de126a42128b3415fbb82c656b7d3d3e3e932bd.png';
import siebelLogo from '../../assets/b90c03a57ba77a183f10ad49c663a6b123f7f0e0.png';

export function Capabilities() {
  const capabilities = [
    {
      icon: Database,
      title: 'SAP S/4HANA Transformation',
      subtitle: 'Migration & Modernization',
      items: [
        'System conversion from ECC 6.0 to S/4HANA (brownfield)',
        'Greenfield implementations with best-practice templates',
        'Selective data transition and legacy system retirement',
        'Finance (FI/CO), Logistics (MM/SD), Production (PP/QM) modules',
        'Custom code remediation and HANA optimization',
        'FIORI apps deployment and user experience design',
      ],
    },
    {
      icon: DollarSign,
      title: 'SAP Vistex Solutions',
      subtitle: 'Revenue & Pricing Management',
      items: [
        'Vistex pricing, rebates, and chargebacks implementation',
        'Channel incentive management for distributors and brokers',
        'Royalty and licensing fee management',
        'Consumer and trade promotions management',
        'Integration with SAP SD, FI, and third-party systems',
        'Complex agreement structures and settlement processing',
      ],
    },
    {
      icon: Factory,
      title: 'Plex Manufacturing Cloud',
      subtitle: 'Smart Manufacturing Solutions',
      items: [
        'Plex ERP implementation for automotive and industrial sectors',
        'Manufacturing Execution System (MES) for shop floor control',
        'Quality management and compliance tracking (APQP, PPAP, SPC)',
        'Supplier quality and portal management',
        'Integration with SAP and other enterprise systems',
        'Real-time production monitoring and analytics',
      ],
    },
    {
      icon: Network,
      title: 'SAP Integration Suite',
      subtitle: 'Enterprise Integration',
      items: [
        'SAP Cloud Platform Integration (CPI) for hybrid landscapes',
        'SAP Process Orchestration (PO) / Process Integration (PI)',
        'API management and microservices architecture',
        'EDI and B2B integration (IDOC, SOAP, REST)',
        'Master data governance and synchronization',
        'Real-time data replication with SLT and BODS',
      ],
    },
    {
      icon: Truck,
      title: 'SAP Supply Chain Management',
      subtitle: 'Planning & Execution',
      items: [
        'SAP Integrated Business Planning (IBP) for demand and supply',
        'Advanced Planning and Optimization (APO) for legacy systems',
        'Transportation Management (TM) and Warehouse Management (EWM)',
        'Global Trade Services (GTS) for compliance',
        'Extended Warehouse Management with RF and automation',
        'Supply chain visibility and control tower solutions',
      ],
    },
    {
      icon: Shield,
      title: 'Master Data & Governance',
      subtitle: 'Data Quality & Compliance',
      items: [
        'SAP Master Data Governance (MDG) for material, vendor, customer',
        'Data migration and cleansing for S/4HANA transformations',
        'Information lifecycle management and archiving strategies',
        'Data quality monitoring and stewardship processes',
        'Regulatory compliance (GDPR, SOX, FDA 21 CFR Part 11)',
        'Golden record creation and data harmonization',
      ],
    },
    {
      icon: Smartphone,
      title: 'SAP Fiori & UX Strategy',
      subtitle: 'User Experience & Mobility',
      items: [
        'Fiori launchpad design and role-based app catalogs',
        'Custom Fiori apps development (SAPUI5, OData)',
        'Mobile solutions for field service and warehouse operations',
        'SAP Screen Personas for legacy transaction simplification',
        'Design thinking workshops and UX assessment',
        'Portal migration to Fiori and S/4HANA embedded analytics',
      ],
    },
    {
      icon: Cloud,
      title: 'SAP BTP & Extension Suite',
      subtitle: 'Cloud Platform Solutions',
      items: [
        'SAP Business Technology Platform (BTP) architecture',
        'Extension applications using CAP (Cloud Application Programming)',
        'Workflow automation with SAP Build Process Automation',
        'Analytics with SAP Analytics Cloud (SAC)',
        'Integration with Hyperscalers (Azure, AWS, GCP)',
        'Multi-cloud and hybrid deployment strategies',
      ],
    },
    {
      icon: Brain,
      title: 'AI & Intelligent Automation',
      subtitle: 'Enterprise AI Solutions',
      items: [
        'SAP AI Business Services (document processing, conversational AI)',
        'Intelligent RPA with SAP Intelligent RPA',
        'Predictive analytics for maintenance, quality, and demand',
        'Machine learning model deployment on BTP',
        'Process mining and optimization with Signavio',
        'Embedded AI capabilities in S/4HANA processes',
      ],
    },
    {
      icon: Headphones,
      title: 'Application Management Services',
      subtitle: 'Production Support & Optimization',
      items: [
        'L2/L3 application support for SAP landscapes',
        'Incident management and root cause analysis',
        'Performance tuning and system health checks',
        'Proactive monitoring with SAP Solution Manager / Cloud ALM',
        'Patch management and security updates',
        'Continuous improvement and enhancement delivery',
      ],
    },
    {
      icon: Users,
      title: 'Expert Staff Augmentation',
      subtitle: 'Platinum-level consultants',
      items: [
        'SAP solution architects (15+ years experience)',
        'Module leads for FI/CO, MM, SD, PP, QM, WM',
        'Vistex functional and technical specialists',
        'ABAP, HANA, and full-stack Fiori developers',
        'Integration architects (PI/PO, CPI, Boomi)',
        'Project managers with SAP Activate certification',
      ],
    },
    {
      icon: Rocket,
      title: 'Program & Project Delivery',
      subtitle: 'End-to-end implementation',
      items: [
        'Global rollout program management (multi-country, multi-site)',
        'SAP Activate methodology with Agile and hybrid approaches',
        'Solution architecture and technical design authority',
        'Testing strategy (unit, integration, UAT, performance)',
        'Cutover planning and go-live execution',
        'Hypercare support and knowledge transfer',
      ],
    },
  ];

  return (
    <main className="pt-32 pb-24 px-6">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 mb-8">
            <Rocket className="size-4 text-gray-600" />
            <span className="text-xs font-medium uppercase tracking-wider text-gray-600">
              Service Catalog
            </span>
          </div>
          
          <h1 className="text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Capabilities
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Full-spectrum SAP consulting services. From strategy and implementation to managed services and staff augmentation.
          </p>
        </motion.div>
      </section>

      {/* Service Delivery Approach */}
      <section className="max-w-6xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Delivery Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured methodology combining industry best practices with proven execution frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: 'Discover',
                description: 'Business case, current state assessment, solution blueprint',
              },
              {
                phase: 'Design',
                description: 'Technical architecture, configuration specifications, integration design',
              },
              {
                phase: 'Deploy',
                description: 'Build, test, data migration, user training, cutover execution',
              },
              {
                phase: 'Deliver',
                description: 'Hypercare, continuous improvement, managed services handover',
              },
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-light text-gray-200 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
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

      {/* Capabilities Grid */}
      <section className="max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Service Portfolio
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Enterprise-grade SAP solutions across the entire technology stack.
          </p>
        </motion.div>

        <div className="space-y-1">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="px-12 py-10 bg-white hover:bg-gray-50 transition-all duration-300 cursor-default"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start gap-8">
                    {/* Icon */}
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <Icon className="size-7 text-gray-900 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="mb-6">
                        <div className="flex items-baseline gap-3 mb-2">
                          <h3 className="text-2xl font-light text-gray-900 tracking-tight">
                            {capability.title}
                          </h3>
                          <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
                            {capability.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                        {capability.items.map((item, itemIndex) => (
                          <div 
                            key={itemIndex} 
                            className="flex items-start gap-3 group/item"
                          >
                            <span className="text-gray-300 group-hover/item:text-gray-900 transition-colors duration-200 mt-0.5">
                              •
                            </span>
                            <span className="text-sm text-gray-600 group-hover/item:text-gray-900 transition-colors duration-200 leading-relaxed">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Technology Partners */}
      <section className="max-w-6xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-4">
              Technology Expertise
            </div>
            <h2 className="text-3xl font-light text-gray-900">
              Certified Partners
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.a 
              href="https://www.sap.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center h-32 border border-gray-200 hover:border-gray-300 transition-all hover:shadow-sm p-6"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={sapLogo} 
                alt="SAP" 
                className="h-12 w-auto object-contain" 
              />
            </motion.a>
            
            <motion.a 
              href="https://www.vistex.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center h-32 border border-gray-200 hover:border-gray-300 transition-all hover:shadow-sm p-6"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={vistexLogo} 
                alt="Vistex" 
                className="h-10 w-auto object-contain" 
              />
            </motion.a>
            
            <motion.a 
              href="https://www.rockwellautomation.com/en-us/products/software/plex.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center h-32 border border-gray-200 hover:border-gray-300 transition-all hover:shadow-sm bg-gray-900 p-6"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={plexLogo} 
                alt="Plex" 
                className="h-8 w-auto object-contain" 
              />
            </motion.a>
            
            <motion.a 
              href="https://www.oracle.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center h-32 border border-gray-200 hover:border-gray-300 transition-all hover:shadow-sm p-6"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={siebelLogo} 
                alt="Siebel" 
                className="h-12 w-auto object-contain" 
              />
            </motion.a>
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
          className="border-t border-gray-200 pt-16 text-center"
        >
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            Discuss your requirements
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
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
