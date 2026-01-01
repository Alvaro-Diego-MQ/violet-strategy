"use client";
import { motion } from 'framer-motion';
import { MousePointer2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors">
      {/* Elementos abstractos de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-brand-violet/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-full mb-8 border border-slate-200 dark:border-slate-800">
            <Sparkles size={16} className="text-brand-violet" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">Marketing de Nueva Generación</span>
          </div>

          <h1 className="text-[12vw] md:text-[8vw] font-black text-slate-950 dark:text-white tracking-[-0.05em] leading-[0.8] uppercase italic">
            Violet <br />
            <span className="text-brand-violet inline-block translate-x-[2vw]">Strategy</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mt-16 items-center text-left max-w-4xl">
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-tight tracking-tight">
              Construimos ecosistemas digitales que <span className="text-slate-950 dark:text-white font-bold italic">impactan, convierten y perduran.</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-start md:justify-end">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-5 bg-brand-violet text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-brand-violet/40"
              >
                Iniciar Proyecto
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl font-black uppercase tracking-widest text-sm border border-slate-200 dark:border-slate-800"
              >
                Nuestro Trabajo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] font-black uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-slate-900 dark:bg-white" />
      </motion.div>
    </section>
  );
}