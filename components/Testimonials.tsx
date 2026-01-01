"use client";
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  { 
    id: 1, 
    name: 'Ana García', 
    role: 'CEO TechStore', 
    text: 'Violet Strategy cambió nuestra forma de vender por internet. El diseño es simplemente otro nivel.', 
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    name: 'Luis Rivas', 
    role: 'Fundador Bloom', 
    text: 'La mejor inversión que hemos hecho en marketing. Entienden la marca mejor que nosotros mismos.', 
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    name: 'Sara Wu', 
    role: 'Directora Creativa', 
    text: 'Profesionales, rápidos y con una visión estética impecable. Totalmente recomendados.', 
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop' 
  },
  { 
    id: 4, 
    name: 'Carlos Méndez', 
    role: 'Marketing Manager', 
    text: 'Lograron captar la esencia de nuestra empresa desde la primera reunión. Resultados increíbles.', 
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop' 
  },
  { 
    id: 5, 
    name: 'Elena Santoro', 
    role: 'Founder de Luna', 
    text: 'El soporte y la creatividad de Violet no tiene competencia. Nuestra marca ahora tiene alma.', 
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop' 
  },
  { 
    id: 6, 
    name: 'Roberto J.', 
    role: 'E-commerce Lead', 
    text: 'Aumentamos nuestra tasa de conversión en un 200% gracias a la nueva estrategia publicitaria.', 
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop' 
  },
  { 
    id: 7, 
    name: 'Marta Díaz', 
    role: 'Socia en Prime', 
    text: 'Lo que más valoro es su transparencia y la calidad humana del equipo. Son socios estratégicos reales.', 
    img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=150&h=150&auto=format&fit=crop' 
  },
  { 
    id: 8, 
    name: 'Javier Soler', 
    role: 'App Developer', 
    text: 'Su diseño UI/UX es de clase mundial. Lograron simplificar un producto muy complejo.', 
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&h=150&auto=format&fit=crop' 
  },
  { 
    id: 9, 
    name: 'Laura Pons', 
    role: 'Influencer Manager', 
    text: 'Creatividad pura. Sus campañas de social media siempre se vuelven tendencia en nuestro nicho.', 
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&h=150&auto=format&fit=crop' 
  }
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const totalPages = Math.ceil(testimonials.length / 3);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setPage((prevPage) => (prevPage + newDirection + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 8000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    })
  };

  return (
    <section id="testimonios" className="py-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden border-t border-slate-100 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none">
              Nuestros <span className="text-brand-violet">Clientes</span>
            </h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-sm">
              Casos de éxito y experiencias reales
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => paginate(-1)} 
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-lg text-brand-violet hover:scale-110 transition-all border border-slate-200 dark:border-slate-800"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => paginate(1)} 
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-lg text-brand-violet hover:scale-110 transition-all border border-slate-200 dark:border-slate-800"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative min-h-[450px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
            >
              {testimonials.slice(page * 3, (page + 1) * 3).map((t) => (
                <div 
                  key={t.id} 
                  className="bg-slate-50 dark:bg-slate-900 p-8 rounded-4xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <Quote className="text-brand-violet/20 mb-4" size={40} />
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-brand-violet text-brand-violet" />
                      ))}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 font-medium italic leading-relaxed mb-8">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-800 pt-6">
                    <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-brand-violet/20 bg-slate-200 dark:bg-slate-800">
                      <Image src={t.img} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white leading-none text-sm uppercase italic">{t.name}</h4>
                      <p className="text-[10px] text-brand-violet font-black mt-1 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > page ? 1 : -1);
                setPage(i);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                i === page ? 'w-16 bg-brand-violet' : 'w-4 bg-slate-300 dark:bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}