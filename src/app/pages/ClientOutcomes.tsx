import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ParallaxSection } from '@/app/components/ParallaxSection';
import { TrendingUp, Award, Clock, Layers } from 'lucide-react';

export function ClientOutcomes() {
  const outcomes = [
    {
      industry: 'Life Sciences',
      client: 'Global Medical Device Manufacturer',
      challenge: 'Legacy ECC 6.0 system with 15+ country instances. Complex Vistex rebate structures. 18-month backlog of custom enhancements.',
      solution: 'S/4HANA system conversion (brownfield) with template rollout to 12 subsidiaries. Vistex upgrade to latest version with harmonized rebate processes.',
      results: [
        '40% reduction in month-end close time (from 10 days to 6 days)',
        '€2.3M annual savings from process automation',
        '99.7% data accuracy in rebate settlements',
        'Zero business downtime during go-live weekend',
      ],
      duration: '18 months',
      scope: 'SAP S/4HANA, Vistex, FI/CO, MM, SD, PP',
    },
    {
      industry: 'Manufacturing',
      client: 'Automotive Tier-1 Supplier',
      challenge: 'Disparate systems across 8 plants (3 on Plex, 5 on legacy ERP). No real-time visibility into production. Quality escapes impacting customer satisfaction.',
      solution: 'Plex cloud ERP implementation across all plants. Real-time MES integration with shop floor equipment. APQP and PPAP digitization.',
      results: [
        '65% reduction in quality escapes (from 120 PPM to 42 PPM)',
        '22% improvement in OEE through real-time monitoring',
        '$4.8M inventory reduction via demand-driven replenishment',
        'Single source of truth for production data',
      ],
      duration: '14 months',
      scope: 'Plex ERP, MES, Quality Management, Supplier Portal',
    },
    {
      industry: 'Chemicals',
      client: 'Specialty Chemicals Producer',
      challenge: 'Complex formula management with batch genealogy requirements. FDA compliance gaps. Inefficient S&OP process with 8-week planning cycles.',
      solution: 'SAP S/4HANA for batch industries with embedded MES. IBP for demand and supply planning. Master data governance implementation.',
      results: [
        '75% reduction in S&OP cycle time (8 weeks to 2 weeks)',
        '100% FDA audit compliance (21 CFR Part 11)',
        '$6.5M working capital reduction through improved forecast accuracy',
        '50% faster new product introduction',
      ],
      duration: '22 months',
      scope: 'S/4HANA, IBP, MDG, QM, EHS',
    },
    {
      industry: 'Consumer Products',
      client: 'CPG Company with Retail Distribution',
      challenge: 'Manual trade promotion management. Disparate pricing across channels. No visibility into promotion effectiveness or ROI.',
      solution: 'Vistex implementation for trade promotions, chargebacks, and rebates. Integration with SAP SD and retailer EDI systems.',
      results: [
        '35% improvement in trade spend ROI',
        '90% reduction in settlement disputes with distributors',
        '$12M annual savings from pricing optimization',
        'Real-time promotion tracking and analytics',
      ],
      duration: '10 months',
      scope: 'Vistex TPM, Chargebacks, Rebates, SD Integration',
    },
    {
      industry: 'Industrial Manufacturing',
      client: 'Heavy Equipment Manufacturer',
      challenge: 'Global rollout to 24 countries required. Multiple ERPs (SAP, Oracle, legacy). Complex configure-to-order processes with engineering change management.',
      solution: 'S/4HANA template approach with regional variants. Variant configuration for CTO scenarios. PLM integration for ECM processes.',
      results: [
        '24 countries live in 30 months (phased rollout)',
        '58% reduction in order fulfillment cycle time',
        '$18M savings from standardized processes',
        '99.2% system uptime across global landscape',
      ],
      duration: '30 months',
      scope: 'S/4HANA, PP-VC, PLM Integration, Global Template',
    },
    {
      industry: 'Pharmaceutical',
      client: 'Mid-size Pharma with Contract Manufacturing',
      challenge: 'Legacy Siebel CRM with poor sales force adoption. Disconnected from SAP ECC. No mobile access for field reps.',
      solution: 'Siebel retirement and migration to SAP Sales Cloud (C4C). Integration with ECC for order management. Custom mobile app for rep productivity.',
      results: [
        '85% sales force adoption (up from 40%)',
        '30% increase in sales productivity',
        'Real-time inventory visibility for reps',
        '50% reduction in CRM maintenance costs',
      ],
      duration: '12 months',
      scope: 'SAP C4C, Siebel Migration, ECC Integration, Mobile',
    },
  ];

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
              Client outcomes.
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Real results from enterprise SAP implementations. Measured in business impact, not project milestones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies - Premium List Layout */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">Case studies</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Enterprise implementations across industries. Real challenges. Proven outcomes.
            </p>
          </motion.div>

          <div className="space-y-1">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
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
                  {/* Header Bar */}
                  <div className="px-12 py-6 border-b border-gray-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-6">
                        <div className="text-xs font-medium uppercase tracking-widest text-gray-400">
                          {outcome.industry}
                        </div>
                        <div className="hidden md:block w-px h-4 bg-gray-300"></div>
                        <h3 className="text-2xl font-light text-gray-900 tracking-tight">
                          {outcome.client}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="size-4" />
                        <span>{outcome.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-12 py-10">
                    {/* Challenge & Solution - 2 Column */}
                    <div className="grid md:grid-cols-2 gap-12 mb-10">
                      <div>
                        <div className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-4">
                          Challenge
                        </div>
                        <p className="text-gray-600 leading-relaxed">{outcome.challenge}</p>
                      </div>
                      <div>
                        <div className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-4">
                          Solution
                        </div>
                        <p className="text-gray-600 leading-relaxed">{outcome.solution}</p>
                      </div>
                    </div>

                    {/* Business Impact - Highlighted Section */}
                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 mb-8">
                      <div className="flex items-center gap-3 mb-6">
                        <TrendingUp className="size-6 text-gray-900" />
                        <div className="text-xs font-medium uppercase tracking-widest text-gray-500">
                          Business Impact
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {outcome.results.map((result, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="mt-2 w-2 h-2 rounded-full bg-gray-900 flex-shrink-0"></span>
                            <span className="text-gray-900 font-medium leading-relaxed">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Scope Tags */}
                    <div className="flex items-center gap-3">
                      <Layers className="size-4 text-gray-400" />
                      <div className="text-xs uppercase tracking-widest text-gray-400">Scope:</div>
                      <div className="text-sm text-gray-600">{outcome.scope}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary - Parallax Section */}
      <ParallaxSection 
        imageUrl="https://images.unsplash.com/photo-1651955784685-f969100bfc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXRhJTIwY2VudGVyJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2ODU4ODY4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        speed={0.5}
        className="mb-32"
      >
        <section className="px-6 py-32">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-light text-white mb-16 text-center tracking-tight">
                Aggregate impact across engagements
              </h3>
              <div className="grid md:grid-cols-4 gap-12">
                {[
                  { metric: '98%', label: 'On-time delivery rate' },
                  { metric: '$85M+', label: 'Total client savings delivered' },
                  { metric: '45', label: 'Countries with live deployments' },
                  { metric: '99.4%', label: 'Average system uptime' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-6xl font-light text-white mb-4 tracking-tight">{stat.metric}</div>
                    <div className="text-sm text-gray-300 uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>

      {/* Client Testimonials - Premium Vertical Layout */}
      <section className="px-6 mb-32 bg-gradient-to-b from-white via-gray-50 to-white py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24 text-center"
          >
            <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
              What clients say
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Direct feedback from executives who've worked with us.
            </p>
          </motion.div>

          {/* Vertical Testimonial Stack */}
          <div className="space-y-20">
            {[
              {
                quote: 'The team brought deep SAP expertise and manufacturing domain knowledge. They delivered our S/4HANA migration on time and under budget, with zero production downtime.',
                author: 'VP of IT',
                company: 'Fortune 500 Industrial Manufacturer',
              },
              {
                quote: 'Their Vistex implementation transformed our trade promotion process. We now have real-time visibility and ROI tracking that we never had before.',
                author: 'Director of Commercial Operations',
                company: 'Global Consumer Products Company',
              },
              {
                quote: 'ASquared brought a level of technical rigor and project discipline that set them apart. Their architecture-first approach saved us from costly rework.',
                author: 'Chief Information Officer',
                company: 'Pharmaceutical Company',
              },
              {
                quote: 'The Plex implementation gave us real-time shop floor visibility for the first time. Our OEE improvements paid for the project in less than a year.',
                author: 'VP of Manufacturing',
                company: 'Tier-1 Automotive Supplier',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                  <div className={`max-w-4xl ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    {/* Large Quote */}
                    <div className="relative mb-10">
                      <div className="absolute -top-6 -left-2 text-8xl font-light text-gray-200 leading-none">"</div>
                      <blockquote className={`relative text-3xl md:text-4xl font-light text-gray-900 leading-relaxed tracking-tight ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                        {testimonial.quote}
                      </blockquote>
                    </div>

                    {/* Attribution */}
                    <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'md:items-end'}`}>
                      <div className="text-sm font-medium text-gray-900 mb-1">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Discuss your SAP requirements
            </h3>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a conversation with our solution architects.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-5 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-medium tracking-wide"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}