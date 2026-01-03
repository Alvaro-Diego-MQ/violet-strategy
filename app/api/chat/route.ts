import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "model";
  content: string;
}

const API_KEY = process.env.GEMINI_API_KEY || ""; 

if (!API_KEY) {
  console.warn("⚠️ GEMINI_API_KEY no está definida en las variables de entorno");
}

const genAI = new GoogleGenerativeAI(API_KEY);

export async function POST(req: Request) {
  try {
    const { messages }: { messages: ChatMessage[] } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); 
    
    const systemPrompt = `Eres Violet AI, el asistente experto y entusiasta de Violet Strategy. 💜✨

REGLAS DE ORO:
1. PERSONALIDAD: Alegre, profesional y directa. Evita párrafos largos.
2. FORMATO: No uses negritas con asteriscos (**). Usa emojis para resaltar y organizar la información.
3. LIMITACIÓN: Solo respondes sobre Violet Strategy (Branding, Diseño Web, Marketing, Publicidad). 
4. FILTRO: Si preguntan algo ajeno a la empresa (ej. cocina, política, otros temas), responde: 
   "¡Me encantaría ayudarte! 😊 Pero mi especialidad es el éxito de tu marca en Violet Strategy. 🚀 ¿Te gustaría que hablemos de branding o marketing? 💜"
5. ESTRUCTURA: Usa saltos de línea para que el texto sea fácil de leer.

SERVICIOS DE LA EMPRESA:
- Branding: Identidad visual y logotipos.
- Diseño Web: Sitios rápidos y modernos.
- Marketing: Estrategias digitales y SEO.
- Publicidad: Campañas en Meta y Google Ads.

¡Responde siempre con buena energía pero de forma breve! 🌟

Datos extras este es tu correo violet_strategy@gmail.com
tu numero es +51 923 695 393
tu direccion es Santa Catalina 117, Arequipa
Usa esta información para ayudar a los usuarios interesados en Violet Strategy.
el horario de atencion es Lunes a Viernes de 9am a 6pm hora Peruana`;

    const history = messages.slice(0, -1).map((m: ChatMessage) => ({
      role: m.role,
      parts: [{ text: m.content }],
    }));

    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: systemPrompt }] },
        { role: "model", parts: [{ text: "Entendido. Soy la inteligencia de Violet Strategy." }] },
        ...history
      ],
    });

    const lastUserContent = messages[messages.length - 1].content;
    const result = await chat.sendMessage(lastUserContent);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });

  } catch (error: unknown) { 
    console.error("Gemini Error:", error);

    const serverError = error as { status?: number };

    if (serverError.status === 429) {
      return NextResponse.json({ 
        content: "¡Hola! Mi cerebro está procesando muchas marcas ahora mismo. 🚀 Por favor, dame un minuto e inténtalo de nuevo o hablemos por el formulario." 
      });
    }

    if (serverError.status === 404) {
        return NextResponse.json({ 
          content: "Parece que el modelo que estoy usando ha sido actualizado. Por favor, contacta con soporte de Violet Strategy." 
        });
    }

    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}