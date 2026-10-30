import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Database, Brain, Stethoscope, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

type Slide = {
  id: string;
  eyebrow: string;
  icon: typeof Database;
  title: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaTo: string;
};

const slides: Slide[] = [
  {
    id: 'sap', eyebrow: 'SAP S/4HANA & Managed Services', icon: Database, title: 'Enterprise SAP, run with precision.', description:
      'Deep SAP foundations, brownfield conversions, greenfield builds, Vistex pricing, Plex manufacturing, and 24/7 managed services on SAP Solution Manager and Cloud ALM, with Joule copilot and BTP integration.', highlights: ['S/4HANA Transformation', 'Managed Services + Cloud ALM', 'Vistex, Plex, BTP depth'], ctaLabel: 'Explore SAP Managed Services', ctaTo: '/sap-managed-services', }, {
    id: 'ai', eyebrow: 'AI & Agentic Systems', icon: Brain, title: 'AI that reaches production.', description:
      'Generative AI, RAG on your proprietary data, autonomous agents on LangGraph and AutoGen, MLOps on Databricks and Vertex, and governance for responsible, enterprise-grade AI from discovery to go-live.', highlights: ['LLM / RAG applications', 'Agentic AI architectures', 'MLOps + Responsible AI'], ctaLabel: 'Explore AI Capabilities', ctaTo: '/ai-capabilities', }, {
    id: 'healthcare', eyebrow: 'Healthcare & Clinical Workflows', icon: Stethoscope, title: 'CGM intelligence, inside Epic.', description:
      'AI on continuous glucose monitor streams, Dexcom, FreeStyle Libre, Medtronic Guardian, fused with nutrition, insulin and activity context. Delivered inside the Epic workflow via HL7 and FHIR, under a HIPAA perimeter.', highlights: ['CGM streaming + glycemic risk', 'Epic in-basket integration', 'HL7 v2 and FHIR R4'], ctaLabel: 'Explore Healthcare', ctaTo: '/healthcare', },
];

export function DomainSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (n: number) => setI(((n % slides.length) + slides.length) % slides.length);

  const slide = slides[i];
  const Icon = slide.icon;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white border-y border-gray-200"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="max-w-7xl mx-auto px-6 min-h-[75vh] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="w-full grid md:grid-cols-2 gap-12 items-center py-24"
          >
            {/* Left: content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                  <Icon className="size-5 text-white" />
                </div>
                <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                  {slide.eyebrow}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight mb-6">
                {slide.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                {slide.description}
              </p>
              <div className="space-y-2 mb-10">
                {slide.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
              <Link
                to={slide.ctaTo}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                {slide.ctaLabel}
                <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Right: big typographic illustration */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="text-[14rem] lg:text-[18rem] font-light text-gray-100 leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="size-32 lg:size-40 text-gray-900 opacity-80" strokeWidth={1} />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => go(idx)}
            aria-label={`Go to slide ${idx + 1}: ${s.eyebrow}`}
            className={`transition-all duration-500 h-1 ${
              idx === i ? 'w-12 bg-gray-900' : 'w-6 bg-gray-300 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => go(i - 1)}
        aria-label="Previous slide"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        onClick={() => go(i + 1)}
        aria-label="Next slide"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"
      >
        <ChevronRight className="size-6" />
      </button>
    </section>
  );
}
