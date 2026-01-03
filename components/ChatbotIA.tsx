"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function ChatbotIA() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      content: '¡Hola! Qué gusto saludarte 💜✨\n\nSoy **Violet AI**. ¿En qué área de tu marca nos enfocamos hoy?\n\n🎨 **Branding**\n💻 **Diseño Web**\n🚀 **Marketing Digital**' 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Función para convertir **texto** en negritas reales y respetar saltos de línea
  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-black text-brand-violet dark:text-fuchsia-400">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      if (data.content) {
        setMessages(prev => [...prev, { role: 'model', content: data.content }]);
      }
    } catch {
      setMessages(prev => [...prev, { role: 'model', content: '¡Ups! Mi sistema tuvo un pequeño hipo 😅 ¿Me lo repites, por fis? ✨' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-70 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.8, y: 50, filter: 'blur(10px)' }}
            className="mb-4 w-[350px] md:w-[400px] h-[550px] bg-white dark:bg-slate-900 rounded-4xl shadow-[0_20px_50px_rgba(124,58,237,0.3)] border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col backdrop-blur-xl"
          >
            {/* Cabecera */}
            <div className="p-5 bg-linear-to-r from-brand-violet to-fuchsia-600 text-white flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 animate-bounce-slow">
                  <Bot size={24} />
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-widest italic">Violet AI</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold opacity-90 uppercase tracking-widest text-white">Online ✨</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-xl transition-all">
                <X size={22} />
              </button>
            </div>

            {/* Cuerpo del Chat */}
            <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-slate-950/50 scroll-smooth">
              {messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-3xl shadow-sm text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user' 
                    ? 'bg-brand-violet text-white rounded-tr-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-none border border-slate-100 dark:border-slate-700'
                  }`}>
                    {/* Renderizado con formato de negritas */}
                    {formatText(m.content)}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-3xl rounded-tl-none shadow-sm flex items-center gap-3">
                    <Loader2 size={16} className="animate-spin text-brand-violet" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Violet está pensando...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
              className="p-5 bg-white dark:bg-slate-900 border-t dark:border-slate-800"
            >
              <div className="relative flex items-center gap-2">
                <input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text" 
                  placeholder="Escribe tu mensaje... ✨"
                  className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-brand-violet transition-all dark:text-white"
                />
                <button 
                  disabled={isLoading}
                  className="bg-brand-violet text-white p-4 rounded-2xl shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 transition-all"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Flotante */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="bg-brand-violet text-white p-5 rounded-full shadow-2xl relative z-70 border-4 border-white dark:border-slate-900"
        >
          <div className="absolute -top-2 -right-2 bg-fuchsia-500 text-[8px] font-black px-2 py-1 rounded-full animate-bounce">
            HOLA! 👋
          </div>
          <Bot size={32} />
        </motion.button>
      )}
    </div>
  );
}