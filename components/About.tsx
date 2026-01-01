"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Users, Award, Zap, BarChart, CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'Proyectos Éxito', value: '250+', icon: <Zap size={20} /> },
  { label: 'Marcas Felices', value: '120+', icon: <Users size={20} /> },
  { label: 'Premios Diseño', value: '15', icon: <Award size={20} /> },
  { label: 'ROI Promedio', value: '3.5x', icon: <BarChart size={20} /> },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="nosotros" ref={containerRef} className="py-32 bg-white dark:bg-slate-950 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: COMPOSICIÓN DE IMÁGENES (ESTILO MAGAZINE) */}
          <div className="lg:col-span-6 relative">
            <motion.div style={{ y: y1 }} className="relative z-10 w-4/5 aspect-[3/4] rounded-4xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-900">
              <Image 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000" 
                alt="Working at Violet" 
                fill 
                className="object-cover"
              />
            </motion.div>
            
            <motion.div 
              style={{ y: y2 }}
              className="absolute -right-4 -bottom-12 w-3/5 aspect-square rounded-4xl overflow-hidden shadow-2xl border-8 border-brand-violet/10 z-20"
            >
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" 
                alt="Team Brainstorming" 
                fill 
                className="object-cover"
              />
            </motion.div>

            {/* Elemento decorativo: Círculo de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-violet/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* COLUMNA DERECHA: CONTENIDO ESTRATÉGICO */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-violet font-black uppercase tracking-[0.4em] text-xs px-4 py-2 bg-brand-violet/5 rounded-full inline-block mb-6">
                Desde 2018
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-[0.9]">
                No solo creamos marcas, creamos <span className="text-brand-violet">legados.</span>
              </h2>
              
              <p className="mt-8 text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                En Violet Strategy entendemos que el marketing moderno no se trata de quién grita más fuerte, sino de quién conecta de manera más profunda. 
              </p>
            </motion.div>

            {/* GRID DE ESTADÍSTICAS INTERACTIVAS */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-brand-violet/30 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-brand-violet group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</span>
                  </div>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest leading-none">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* PUNTOS CLAVE DE CONFIANZA */}
            <div className="space-y-4 pt-4">
              {[
                'Enfoque disruptivo centrado en conversión.',
                'Diseño de vanguardia con estándares internacionales.',
                'Transparencia total en métricas y reportes.'
              ].map((text, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-violet/10 flex items-center justify-center text-brand-violet group-hover:bg-brand-violet group-hover:text-white transition-colors">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-bold text-sm tracking-tight">{text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}