"use client";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 bg-slate-50 dark:bg-slate-900 rounded-4xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl">
          
          {/* Información de la Agencia */}
          <div className="p-12 md:p-16 bg-brand-violet text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic leading-none mb-6">
                Hablemos de <br /> tu <span className="text-slate-900">futuro.</span>
              </h2>
              <p className="text-white/80 font-medium mb-12 max-w-sm">
                ¿Listo para que tu marca sea el centro de atención? Nuestro equipo está a un mensaje de distancia.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-white/50">Escríbenos</p>
                    <p className="font-bold">violet_strategy@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-white/50">Llámanos</p>
                    <p className="font-bold">+51 923 695 393</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-white/50">Visítanos</p>
                    <p className="font-bold">Santa Catalina 117, Arequipa</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10 flex gap-4">
                {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-brand-violet transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nombre</label>
                  <input type="text" className="w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-3 outline-none focus:border-brand-violet transition-colors dark:text-white" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Empresa</label>
                  <input type="text" className="w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-3 outline-none focus:border-brand-violet transition-colors dark:text-white" placeholder="Opcional" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email</label>
                <input type="email" className="w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-3 outline-none focus:border-brand-violet transition-colors dark:text-white" placeholder="email@ejemplo.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Mensaje</label>
                <textarea rows={4} className="w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-3 outline-none focus:border-brand-violet transition-colors dark:text-white resize-none" placeholder="¿Cómo podemos ayudarte?" />
              </div>
              
              <button className="w-full py-5 bg-slate-900 dark:bg-white dark:text-slate-950 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-violet dark:hover:bg-brand-violet dark:hover:text-white transition-all group">
                Enviar Mensaje <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}