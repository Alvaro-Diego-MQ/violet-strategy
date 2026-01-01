"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Palette, Megaphone, BarChart3, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Branding',
    shortDesc: 'IDENTIDAD CON ALMA.',
    longDesc: 'Diseñamos el ADN de tu marca: logotipos, manuales de identidad y estrategias de posicionamiento que generan confianza y lealtad.',
    icon: <Palette size={48} />,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800'
  },
  {
    title: 'Marketing',
    shortDesc: 'RESULTADOS MEDIBLES.',
    longDesc: 'Estrategias basadas en datos para atraer leads cualificados y convertirlos en clientes reales mediante embudos de venta optimizados.',
    icon: <BarChart3 size={48} />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800'
  },
  {
    title: 'Publicidad',
    shortDesc: 'IMPACTO MASIVO.',
    longDesc: 'Campañas creativas en Meta Ads, Google y medios digitales con segmentación avanzada para maximizar tu retorno de inversión (ROI).',
    icon: <Megaphone size={48} />,
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800'
  },
  {
    title: 'Diseño Web',
    shortDesc: 'EXPERIENCIA PREMIUM.',
    longDesc: 'Desarrollamos sitios web ultrarrápidos y optimizados para SEO, con interfaces intuitivas (UX/UI) que cautivan a tus usuarios.',
    icon: <Globe size={48} />,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-brand-violet font-black uppercase tracking-[0.3em] text-xs">Especialidades</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mt-4 uppercase tracking-tighter italic">
            ¿Qué <span className="text-brand-violet">hacemos?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[450px] w-full [perspective:1500px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-4xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-900">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill 
            className="object-cover opacity-60 blur-[1px]"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <div className="relative z-10 h-full p-8 flex flex-col items-center justify-end text-center pb-12">
            <div className="text-white mb-8 bg-brand-violet/40 backdrop-blur-md p-5 rounded-3xl border border-white/20 shadow-xl">
              {service.icon}
            </div>
            <h3 className="text-3xl font-black text-white mb-3 uppercase italic tracking-tighter drop-shadow-lg">
              {service.title}
            </h3>
            <div className="bg-brand-violet/20 border border-brand-violet/40 backdrop-blur-md px-4 py-2 rounded-full">
               <p className="text-brand-violet font-black text-[10px] uppercase tracking-[0.2em]">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-brand-violet rounded-4xl p-10 flex flex-col items-center justify-center text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <Image src={service.image} alt="bg" fill className="object-cover" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-6 uppercase italic tracking-tighter underline decoration-white/30 underline-offset-8">
              {service.title}
            </h3>
            <p className="text-white font-bold text-sm leading-relaxed mb-10">
              {service.longDesc}
            </p>
            <button className="flex items-center gap-3 bg-white text-brand-violet px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl">
              Saber más <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}