"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ExternalLink } from 'lucide-react';

const categories = ['Todos', 'Branding', 'Web', 'Ads', 'Estrategia'];

const projects = [
  { 
    id: 1, 
    cat: 'Web', 
    title: 'FinTech Platform', 
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800' 
  },
  { 
    id: 2, 
    cat: 'Branding', 
    title: 'Luxury Essence', 
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800' 
  },
  { 
    id: 3, 
    cat: 'Ads', 
    title: 'Social Campaign', 
    img: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800' 
  },
  { 
    id: 4, 
    cat: 'Estrategia', 
    title: 'Growth Analysis', 
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800' 
  },
  { 
    id: 5, 
    cat: 'Web', 
    title: 'AI Dashboard', 
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800' 
  },
  { 
    id: 6, 
    cat: 'Branding', 
    title: 'Organic Identity', 
    img: 'https://images.immediate.co.uk/production/volatile/sites/30/2024/09/Organic-veg-box-420477b.jpg?quality=90&fit=700,350'
  },
  { 
    id: 7, 
    cat: 'Ads', 
    title: 'Global Launch', 
    img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800' 
  },
  { 
    id: 8, 
    cat: 'Web', 
    title: 'Creative Agency', 
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800' 
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('Todos');

  const filtered = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.cat === filter);

  return (
    <section id="portafolio" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-left">
            <span className="text-brand-violet font-black uppercase tracking-[0.3em] text-xs px-1">Portafolio Premium</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic leading-none mt-4">
              Nuestros <span className="text-brand-violet">Casos</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  filter === c 
                  ? 'bg-brand-violet text-white shadow-xl shadow-brand-violet/30' 
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 border border-transparent dark:border-slate-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[600px]">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] rounded-4xl overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-2xl"
              >
                <Image 
                  src={p.img} 
                  alt={p.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={p.id <= 4}
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                  <span className="text-brand-violet font-black uppercase tracking-widest text-[10px] mb-2">{p.cat}</span>
                  <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase mb-6 leading-tight">{p.title}</h3>
                  
                  <div className="flex justify-between items-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-950 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-lg">
                      <ExternalLink size={18} />
                    </div>
                    <div className="w-10 h-10 bg-brand-violet rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Plus size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}