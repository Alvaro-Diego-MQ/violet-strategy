import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 dark:bg-black text-slate-300 pt-16 pb-8 border-t border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        
        <div className="col-span-1">
          <span className="text-2xl font-black text-white mb-4 block italic uppercase">
            VIOLET <span className="text-brand-violet">STRATEGY</span>
          </span>
          <p className="text-sm leading-relaxed text-slate-400 font-medium">
            Construyendo el futuro de las marcas a través del diseño estratégico y el marketing de alto impacto.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Agencia</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><a href="#servicios" className="hover:text-brand-violet transition-colors">Servicios</a></li>
            <li><a href="#portafolio" className="hover:text-brand-violet transition-colors">Portafolio</a></li>
            <li><a href="#nosotros" className="hover:text-brand-violet transition-colors">Sobre Nosotros</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contacto</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="hover:text-white transition-colors">violet_strategy@gmail.com</li>
            <li className="hover:text-white transition-colors">+51 923 695 393</li>
            <li className="hover:text-white transition-colors">Santa Catalina 117, Arequipa</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Síguenos</h4>
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="p-3 bg-slate-900 rounded-xl hover:bg-brand-violet hover:text-white transition-all transform hover:-translate-y-1">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-900 text-center text-xs text-slate-500 font-bold uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Violet Strategy. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}