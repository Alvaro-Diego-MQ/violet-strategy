"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  const links = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <nav className={`fixed w-full z-60 transition-all duration-500 ${
      scrolled 
      ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl py-5 shadow-2xl border-b border-slate-200/50 dark:border-slate-800/50' 
      : 'bg-transparent py-10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO - Presencia dominante */}
        <Link href="#" className="relative w-52 h-14 transition-transform duration-300 hover:scale-105 active:scale-95">
          <Image 
            src="/logo_v.png" 
            alt="Violet Strategy Logo" 
            fill 
            className="object-contain" 
            priority 
          />
        </Link>

        {/* NAVEGACIÓN DESKTOP - Espaciado Senior */}
        <div className="hidden lg:flex items-center gap-12">
          <ul className="flex items-center gap-10">
            {links.map((l) => (
              <li key={l.name} className="relative group">
                <Link 
                  href={l.href} 
                  className="text-sm font-black uppercase tracking-[0.25em] text-slate-800 dark:text-slate-100 hover:text-brand-violet dark:hover:text-brand-violet transition-colors duration-300"
                >
                  {l.name}
                </Link>
                {/* Indicador de estado activo/hover: Dot elegante */}
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-violet rounded-full opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
              </li>
            ))}
          </ul>

          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2" />
          
          <ThemeToggle />
        </div>

        {/* BOTONES MÓVIL */}
        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setOpen(!open)} 
            className="p-3 text-slate-950 dark:text-white bg-slate-100 dark:bg-slate-900 rounded-2xl transition-colors hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* MENÚ MÓVIL - Full Screen Experience */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 50 }} 
            className="lg:hidden fixed inset-0 top-[90px] bg-white dark:bg-slate-950 z-50 p-8"
          >
            <div className="flex flex-col gap-8">
              {links.map((l, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={l.name}
                >
                  <Link 
                    href={l.href} 
                    onClick={() => setOpen(false)} 
                    className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 dark:text-white hover:text-brand-violet transition-colors"
                  >
                    {l.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="mt-12 pt-12 border-t border-slate-100 dark:border-slate-900">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Síguenos</p>
                <div className="flex gap-6 text-slate-600 dark:text-slate-300">
                   {/* Aquí puedes añadir iconos de redes sociales si lo deseas */}
                   <span className="text-sm font-bold uppercase tracking-widest">Instagram</span>
                   <span className="text-sm font-bold uppercase tracking-widest">LinkedIn</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}