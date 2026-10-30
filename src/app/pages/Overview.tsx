import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ParticleNetwork } from '@/app/components/ParticleNetwork';
import { HeroBackground } from '@/app/components/HeroBackground';
import { DomainSlider } from '@/app/components/DomainSlider';
import { ClientLogo } from '@/app/components/ClientLogo';
import { Database, DollarSign, Factory, Network, Brain, Rocket, Users, Stethoscope } from 'lucide-react';
import { Settings } from 'lucide-react';

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
// import johnsoncontrolsLogo from '../../assets/JohnsonControls.png';
import jcLogo from '@/assets/johnson-controls.png';

export function Overview() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-24 hero-gradient-bg overflow-hidden">
        <HeroBackground />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 max-w-5xl text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            AI-first consulting. Enterprise-ready.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            An AI development partner at our core, with expert talent, deep ERP, SAP foundations, and the discipline to make AI real in production.<br /><br />Without the noise.
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
              AI-forward. Enterprise-grounded.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              We build AI that reaches production, generative AI, RAG, and agentic systems, backed by deep SAP foundations, healthcare specialization, and the expert talent to execute. Fortune 500 clients across manufacturing, life sciences, industrial, and healthcare.
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

      {/* Domain slider, SAP, AI, Healthcare */}
      <DomainSlider />

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

            {/* Johnson Controls */}
            <ClientLogo
              src={jcLogo}
              alt="Johnson Controls"
              url="https://www.johnsoncontrols.com"
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
              AI-first expertise, built on deep enterprise foundations across SAP, cloud, and healthcare systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Database, title: 'SAP S/4HANA Transformation', description: 'Brownfield conversions, greenfield builds, and selective data transition from ECC to S/4HANA.' },
              { icon: Brain, title: 'Enterprise AI & Intelligent Automation', description: 'Generative AI, RAG, agentic systems, and SAP Joule across your landscape.' },
              { icon: Stethoscope, title: 'Healthcare & Clinical Workflows', description: 'HIPAA-ready CGM intelligence delivered inside the Epic workflow via HL7 and FHIR.' },
              { icon: Settings, title: 'SAP Managed Services', description: '24/7 monitoring, L2 / L3 support, and continuous optimization on Solution Manager / Cloud ALM.' },
              { icon: Factory, title: 'Manufacturing Systems', description: 'Plex ERP and MES for discrete and process manufacturing, integrated with SAP.' },
              { icon: Network, title: 'Integration & Middleware', description: 'SAP CPI, PI / PO, API management, and real-time data replication across the enterprise.' },
              { icon: Rocket, title: 'End-to-End Project Delivery', description: 'SAP Activate program management from discovery through hypercare for global rollouts.' },
              { icon: Users, title: 'Staff Augmentation', description: 'Platinum-level AI/ML, SAP, Vistex, and Plex specialists integrated into your teams.' },
            ].map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 p-8"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                        <Icon className="size-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 pt-1">
                      <h3 className="text-xl font-light text-gray-900 tracking-tight mb-2">
                        {area.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
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
            <div className="industry-marquee overflow-hidden pb-8">
              <div className="flex gap-6 min-w-max px-4 industry-track">
                {((items) => [...items, ...items])([
                  { name: 'Manufacturing', detail: 'Discrete & Process', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Life Sciences & Pharma', detail: 'Regulated Industries', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Healthcare', detail: 'Providers & MedTech', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Consumer Goods', detail: 'CPG / FMCG', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Retail', detail: 'Omnichannel', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Utilities & Energy', detail: 'Power & Resources', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Automotive', detail: 'OEMs & Suppliers', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Chemicals', detail: 'Process Industries', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Engineering & Construction', detail: 'EPC Projects', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Public Sector', detail: 'Government Services', gradient: 'from-gray-50 to-gray-100' },
                  { name: 'Financial Services', detail: 'Banking & Insurance', gradient: 'from-gray-50 to-gray-100' },
                ]).map((industry, index) => (
                  <motion.div
                    key={`${industry.name}-${index}`}
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

            {/* Hover hint */}
            <div className="text-center mt-8">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Hover to glide across industries
              </p>
            </div>
          </motion.div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          .industry-track {
            animation: industry-scroll 65s linear infinite;
            animation-play-state: paused;
            will-change: transform;
          }
          .industry-marquee:hover .industry-track {
            animation-play-state: running;
          }
          @keyframes industry-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}} />
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
