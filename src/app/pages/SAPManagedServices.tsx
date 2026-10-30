import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Server,
  Cloud,
  Activity,
  Shield,
  Rocket,
  Target,
  Globe,
  Gauge,
  Sparkles,
} from 'lucide-react';

export default function SAPManagedServices() {
  const whyAsquared = [
    {
      icon: Target,
      title: 'Precision First',
      body: 'We engineer stability,  not just tickets. Architecture-led operations.',
    },
    {
      icon: Globe,
      title: 'Global Delivery',
      body: 'US leadership with cost-optimized India execution. 247 coverage.',
    },
    {
      icon: Gauge,
      title: 'Outcome SLAs',
      body: '99.9% uptime, incident-rate reduction, measurable ROI quarterly.',
    },
    {
      icon: Sparkles,
      title: 'Future-Proof',
      body: 'RISE, GROW, BTP, Joule copilot and AI-ready architecture.',
    },
  ];

  const services = [
    { icon: Layers, title: 'Application Management', body: 'FI / CO, SD, MM, PP, HCM,  functional + technical.' },
    { icon: Server, title: 'Basis & Technical Ops', body: 'Monitoring, patching, HANA DBA, performance tuning.' },
    { icon: Cloud, title: 'Cloud & Migration', body: 'RISE / GROW moves on AWS, Azure and GCP.' },
    { icon: Activity, title: 'Proactive Monitoring', body: 'AIOps alerts, predictive maintenance, automation.' },
    { icon: Shield, title: 'Security & Compliance', body: 'SAP GRC, audit readiness, cyber posture reviews.' },
    { icon: Rocket, title: 'Upgrades & Innovation', body: 'S/4HANA upgrades, Clean Core, BTP extensions.' },
  ];

  const engagement = [
    { phase: 'Discovery', body: 'Free 2-week landscape assessment.' },
    { phase: 'Transition', body: 'Zero-downtime handover from incumbent.' },
    { phase: 'Operations', body: '247 command centre with SLA dashboards.' },
    { phase: 'Continuous', body: 'Quarterly optimization and roadmap review.' },
  ];

  return (
    <main className="pt-4 pb-16 bg-white">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-900 mb-6">
            SAP Managed Services. Without the noise.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade SAP support delivered with precision. From ECC to S/4HANA,  we run your
            landscape so your team doesn't have to.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Built for stability. Designed for scale.
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            SAP isn’t just a system, it’s your business backbone. Our Managed Services deliver
            predictable performance, reduced run-cost, and zero surprises, with delivery teams
            across Hyderabad and San Francisco.
          </p>
        </motion.div>
      </section>

      {/* WHY ASQUARED, full-width 4-column grid */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-xs font-medium uppercase tracking-widest text-gray-500">
            Why ASquared
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyAsquared.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 p-6"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center mb-4">
                  <Icon className="size-5 text-white" />
                </div>
                <h3 className="text-base font-medium text-gray-900 tracking-tight mb-2">
                  {w.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{w.body}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SERVICES,  3-column grid, compact tiles */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
            Service Portfolio
          </h2>
          <p className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
            End-to-end SAP operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 p-6"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center mb-4">
                  <Icon className="size-5 text-white" />
                </div>
                <h3 className="text-lg font-light text-gray-900 tracking-tight mb-1">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ENGAGEMENT + RESULTS,  compact two-column strip */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Engagement,  3/5 as 4-step horizontal strip */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-6">
              Engagement Model
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {engagement.map((e, i) => (
                <motion.div
                  key={e.phase}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 p-5"
                >
                  <div className="text-3xl font-light text-gray-200 mb-2">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">{e.phase}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{e.body}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Proven Results,  2/5 as quote cards */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-6">
              Proven Results
            </h2>
            <div className="space-y-3">
              <blockquote className="bg-gray-50 border-l-2 border-gray-900 pl-5 py-3">
                <p className="text-sm text-gray-900 leading-relaxed">
                  "Reduced SAP incidents by 62% in 90 days."
                </p>
              </blockquote>
              <blockquote className="bg-gray-50 border-l-2 border-gray-900 pl-5 py-3">
                <p className="text-sm text-gray-900 leading-relaxed">
                  "RISE migration completed with zero disruption."
                </p>
              </blockquote>
              <blockquote className="bg-gray-50 border-l-2 border-gray-900 pl-5 py-3">
                <p className="text-sm text-gray-900 leading-relaxed">
                  "99.95% uptime sustained across three fiscal years."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-12 text-center"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-tight">
            Take the noise out of your SAP operations
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's build a predictable, high-performance SAP environment,  starting with a free
            2-week assessment of your landscape.
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
