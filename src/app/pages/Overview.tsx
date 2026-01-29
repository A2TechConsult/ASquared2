import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ParticleNetwork } from '@/app/components/ParticleNetwork';
import { ClientLogo } from '@/app/components/ClientLogo';
import { Database, DollarSign, Factory, Network, Brain, Rocket, Users } from 'lucide-react';

// Import client logos - Batch 1
import logo1 from '../../assets/17a876490970448871e6331ad39dd508943d5a91.png';
import logo2 from '../../assets/b94bdf3058fa32d0591cf6cbabe6def9f8a9b794.png';
import logo3 from '../../assets/48c7d6157a7f96628520185f2034126fa0d42914.png';

// Import client logos - Batch 2
import arcelorMittalLogo from '../../assets/e7f26c5422b66e66fb341a9ddd5de3dc7e5e3cf6.png';
import paloAltoLogo from '../../assets/c883d496abdd9049db6833f8fe67a53933877efe.png';
import mohawkLogo from '../../assets/0d0273bdcd269ab4651431a5d15db826df51af00.png';

// Import client logos - Batch 3 (Final)
import medtronicLogo from '../../assets/e3c0a31cc16458fc7bd53a67b5c7a9cb41da28ec.png';
import vistexClientLogo from '../../assets/0e35773da41fd1c0fdd252643e1eeeaab9fa05a2.png';
import indoramaLogo from '../../assets/f4caa8eb37211ab3baa2ff040f55bbb14461b849.png';

// Import technology partner logos
import sapLogo from '../../assets/c9abc9544e6f5a5b70e5eec942b60f8010decd05.png';
import vistexLogo from '../../assets/0e35773da41fd1c0fdd252643e1eeeaab9fa05a2.png';
import plexLogo from '../../assets/7de126a42128b3415fbb82c656b7d3d3e3e932bd.png';
import siebelLogo from '../../assets/b90c03a57ba77a183f10ad49c663a6b123f7f0e0.png';


export function Overview() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24 hero-gradient-bg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-5xl text-center"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-8">
            SAP consulting.
            <br />
            Without the noise.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Enterprise-grade SAP solutions delivered with precision. From S/4HANA migrations to complex integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/capabilities"
              className="px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              View capabilities
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-sm font-medium"
            >
              Start a discussion
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Positioning Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Focused on SAP. Built for the enterprise.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              We help Fortune 500 companies and global enterprises implement, optimize, and maintain mission-critical SAP systems. Our expertise spans ECC to S/4HANA migrations, complex integrations with Vistex and Plex platforms, and enterprise-wide rollouts across manufacturing, pharmaceutical, and industrial sectors.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
              <div>
                <div className="text-4xl font-light text-gray-900 mb-2">500+</div>
                <div className="text-sm text-gray-600">SAP projects delivered across S/4HANA, ECC, and Vistex platforms</div>
              </div>
              <div>
                <div className="text-4xl font-light text-gray-900 mb-2">15+</div>
                <div className="text-sm text-gray-600">Years average consultant experience in SAP implementations</div>
              </div>
              <div>
                <div className="text-4xl font-light text-gray-900 mb-2">98%</div>
                <div className="text-sm text-gray-600">On-time delivery rate for fixed-scope engagements</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-4">Trusted by</h2>
            <p className="text-4xl font-light text-gray-900">Global enterprise clients</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-20"
          >
            {/* Medtronic */}
            <ClientLogo
              src={medtronicLogo}
              alt="Medtronic"
              url="https://www.medtronic.com"
            />

            {/* Mohawk */}
            <ClientLogo
              src={mohawkLogo}
              alt="Mohawk Industries"
              url="https://www.mohawkind.com"
            />

            {/* Merck */}
            <ClientLogo
              src={logo2}
              alt="Merck"
              url="https://www.merck.com"
            />

            {/* Office Depot */}
            <ClientLogo
              src={logo1}
              alt="Office Depot"
              url="https://www.officedepot.com"
            />

            {/* ArcelorMittal */}
            <ClientLogo
              src={arcelorMittalLogo}
              alt="ArcelorMittal"
              url="https://www.arcelormittal.com"
            />

            {/* Palo Alto Networks */}
            <ClientLogo
              src={paloAltoLogo}
              alt="Palo Alto Networks"
              url="https://www.paloaltonetworks.com"
            />

            {/* Vistex */}
            <ClientLogo
              src={vistexClientLogo}
              alt="Vistex"
              url="https://www.vistex.com"
            />

            {/* Indorama */}
            <ClientLogo
              src={indoramaLogo}
              alt="Indorama"
              url="https://www.indorama.net"
            />

            {/* Essel */}
            <ClientLogo
              src={logo3}
              alt="Essel"
              url="https://www.esselpropack.com"
            />
          </motion.div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-32 px-6 bg-gray-50 relative">
        <ParticleNetwork />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24 text-center"
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">Core competencies</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Deep technical expertise in SAP ecosystem platforms. From greenfield implementations to large-scale transformations.
            </p>
          </motion.div>

          <div className="space-y-1">
            {[
              {
                icon: Database,
                title: 'SAP S/4HANA Transformation',
                description: 'End-to-end migration from ECC to S/4HANA. System conversion, selective data transition, and greenfield implementations.',
                areas: ['Brownfield & Greenfield', 'Finance & Logistics', 'Manufacturing & PP', 'Custom Code Remediation'],
              },
              {
                icon: DollarSign,
                title: 'Revenue & Pricing Solutions',
                description: 'Complex pricing, rebate management, and incentive compensation using SAP Vistex platform.',
                areas: ['Vistex Implementation', 'Channel Incentives', 'Rebate Processing', 'Trade Promotions'],
              },
              {
                icon: Factory,
                title: 'Manufacturing Systems',
                description: 'Plant-level ERP and MES implementations. Plex systems for discrete and process manufacturing.',
                areas: ['Plex ERP & MES', 'Shop Floor Control', 'Quality Management', 'Production Monitoring'],
              },
              {
                icon: Network,
                title: 'Integration & Middleware',
                description: 'SAP PI/PO, CPI, and custom integration frameworks. Real-time data synchronization across enterprise systems.',
                areas: ['SAP CPI/PI', 'API Management', 'EDI & B2B', 'Master Data Sync'],
              },
              {
                icon: Brain,
                title: 'Enterprise AI & Intelligent Automation',
                description: 'AI-powered solutions across SAP landscapes. SAP Joule, Einstein AI, Databricks, RAG systems, and agentic AI implementations.',
                areas: ['AI in ERP', 'SAP AI Services', 'Predictive Analytics', 'Intelligent RPA'],
              },
              {
                icon: Rocket,
                title: 'End-to-End Project Delivery',
                description: 'Full lifecycle program management across SAP, Vistex, and Plex platforms. From discovery through hypercare support.',
                areas: ['Global Rollouts', 'SAP Activate', 'Program Management', 'Go-Live Execution'],
              },
              {
                icon: Users,
                title: 'Staff Augmentation',
                description: 'Platinum-level certified consultants with deep expertise. SAP architects, Vistex specialists, Plex experts, and integration developers.',
                areas: ['Certified Experts', '15+ Years Experience', 'On-Demand Resources', 'Dedicated Teams'],
              },
            ].map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
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
                        <h3 className="text-2xl font-light text-gray-900 tracking-tight mb-3">
                          {area.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {area.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {area.areas.map((item, i) => (
                            <span 
                              key={i} 
                              className="text-xs uppercase tracking-wider text-gray-500 bg-gray-50 group-hover:bg-white px-3 py-1.5 transition-colors duration-200"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-4">Technology Partners</h2>
            <p className="text-3xl font-light text-gray-900">Platform expertise</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-16 md:gap-20"
          >
            <a 
              href="https://www.sap.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center h-24 transition-opacity hover:opacity-70"
            >
              <img 
                src={sapLogo}
                alt="SAP"
                className="h-16 w-auto object-contain"
              />
            </a>
            <a 
              href="https://www.vistex.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center h-24 transition-opacity hover:opacity-70"
            >
              <img 
                src={vistexLogo}
                alt="Vistex"
                className="h-12 w-auto object-contain"
              />
            </a>
            <a 
              href="https://www.rockwellautomation.com/en-us/products/software/plex.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center h-24 bg-gray-900 px-8 py-4 transition-opacity hover:opacity-70"
            >
              <img 
                src={plexLogo}
                alt="Plex"
                className="h-10 w-auto object-contain"
              />
            </a>
            <a 
              href="https://www.oracle.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center h-24 transition-opacity hover:opacity-70"
            >
              <img 
                src={siebelLogo}
                alt="Siebel"
                className="h-16 w-auto object-contain"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">Industry expertise</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Vertical-specific implementations backed by domain knowledge.
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
                  { name: 'Manufacturing', detail: 'Discrete & Process', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Consumer Goods', detail: 'CPG / FMCG', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Retail', detail: 'Omnichannel', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Utilities & Energy', detail: 'Power & Resources', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Life Sciences & Pharma', detail: 'Regulated Industries', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Automotive', detail: 'OEMs & Suppliers', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Chemicals', detail: 'Process Industries', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Engineering & Construction', detail: 'EPC Projects', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Public Sector', detail: 'Government Services', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Financial Services', detail: 'Banking & Insurance', gradient: 'from-gray-50 to-gray-100' },
                ].map((industry, index) => (
                  <motion.div
                    key={industry.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="w-72 h-48 bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300 p-8 flex flex-col justify-center cursor-default hover:shadow-lg hover:-translate-y-1">
                      <div>
                        <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-tight">
                          {industry.name}
                        </h3>
                        <p className="text-sm text-gray-500 uppercase tracking-wider">
                          {industry.detail}
                        </p>
                      </div>
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

        <style dangerouslySetInnerHTML={{__html: `\n          .scrollbar-hide::-webkit-scrollbar {\n            display: none;\n          }\n          .scrollbar-hide {\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n          }\n        `}} />
      </section>

      {/* Approach Preview */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-light text-gray-900 mb-8">
              How we work
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Our methodology combines SAP Activate framework with battle-tested execution practices. Architecture-led. Business-aligned. Risk-managed.
            </p>
            <Link
              to="/approach"
              className="inline-block px-8 py-4 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors text-sm font-medium"
            >
              Our approach
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
