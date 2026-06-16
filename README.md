# 🤖 Violet Strategy - Landing Page con IA

<div align="center">

<img src="public/logo.png" alt="Violet Strategy Logo" width="180" height="180"/>

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge\&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-8E75FF?style=for-the-badge\&logo=google-gemini\&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completado-brightgreen?style=for-the-badge)

<p align="center">
  <br />
  <a href="https://tu-demo.vercel.app">
    <img src="https://img.shields.io/badge/🌐%20DESPLIEGUE%20EN%20VIVO-VER%20DEMO%20AQUÍ-7C3AED?style=for-the-badge" alt="Demo en Vivo" height="45"/>
  </a>
</p>

</div>

---

## 📖 Descripción del Proyecto

Este proyecto consiste en el desarrollo de una landing page moderna para una agencia de marketing digital ficticia llamada **Violet Strategy**, construida con tecnologías modernas del ecosistema React.

La característica principal del proyecto es la integración de un **chatbot impulsado por Inteligencia Artificial mediante la API de Gemini**, diseñado para interactuar con los visitantes del sitio y proporcionar información contextual sobre los servicios, la empresa y el contenido disponible dentro de la plataforma.

El asistente comprende consultas en lenguaje natural, mantiene el contexto conversacional y limita sus respuestas al dominio de información definido para la empresa.

---

## 🎯 Objetivos del Proyecto

* 🤖 Integrar Inteligencia Artificial en una experiencia web real.
* 🎨 Crear una interfaz moderna y atractiva para una agencia digital.
* ⚡ Implementar una arquitectura escalable basada en componentes reutilizables.
* 📱 Garantizar una experiencia responsive para todos los dispositivos.
* 🧠 Desarrollar un chatbot capaz de comprender lenguaje natural.
* 🚀 Aplicar buenas prácticas de desarrollo con Next.js y TypeScript.

---

## ✨ Características Implementadas

### 🌐 Landing Page Moderna

* Hero Section interactiva.
* Presentación de servicios.
* Portafolio de proyectos.
* Información corporativa.
* Testimonios de clientes.
* Formulario de contacto.
* Navegación intuitiva.
* Diseño responsive.

### 🤖 Chatbot con IA

* Integración con Gemini API.
* Comprensión de lenguaje natural.
* Conversaciones contextualizadas.
* Respuestas enfocadas exclusivamente en la empresa.
* Interfaz conversacional moderna.
* Indicadores de estado y carga.
* Historial de mensajes durante la sesión.

### 🎨 Experiencia de Usuario

* Animaciones con Framer Motion.
* Modo oscuro.
* Componentes reutilizables.
* Transiciones suaves.
* Diseño moderno inspirado en agencias digitales premium.

---

## 🛠️ Tecnologías Utilizadas

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/Framer%20Motion-000000?style=for-the-badge&logo=framer&logoColor=white"/>
  <img src="https://img.shields.io/badge/Gemini%20API-8E75FF?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Lucide-111111?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
</p>

---

## 📂 Arquitectura del Proyecto

```text
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── api/
│       └── chat/
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── ChatbotIA.tsx
│   └── Footer.tsx
│
├── public/
│   ├── logo.png
│   └── assets/
│
└── styles/
```

---

## 📁 Descripción de Carpetas

| Carpeta    | Función                                          |
| ---------- | ------------------------------------------------ |
| app        | Configuración principal de rutas y layout        |
| api/chat   | Endpoint encargado de la comunicación con Gemini |
| components | Componentes reutilizables de la interfaz         |
| public     | Recursos estáticos e imágenes                    |
| styles     | Estilos globales del proyecto                    |

---

## 🧠 Funcionamiento del Chatbot

El chatbot actúa como un asistente virtual especializado en la información de Violet Strategy.

### Flujo de funcionamiento

1. El usuario envía una consulta.
2. La aplicación procesa el mensaje.
3. Se envía el contexto a Gemini API.
4. Gemini genera una respuesta contextual.
5. La respuesta es mostrada en la interfaz.
6. El asistente mantiene el enfoque en los servicios y contenido del sitio.

---

## 🚀 Instalación y Ejecución

### Clonar repositorio

```bash
git clone https://github.com/TU-USUARIO/violet-strategy.git
```

### Ingresar al proyecto

```bash
cd violet-strategy
```

### Instalar dependencias

```bash
npm install
```

### Crear variables de entorno

```env
.env.local
```

```env
GEMINI_API_KEY=TU_API_KEY
```

### Ejecutar proyecto

```bash
npm run dev
```

Abrir:

```text
http://localhost:3000
```

---

## 🌐 Despliegue

El proyecto puede desplegarse fácilmente en plataformas compatibles con Next.js como:

* Vercel
* Netlify
* Railway

La versión de producción se encuentra disponible en:

👉 https://tu-demo.vercel.app

---

## 👨‍💻 Autor

### A. Diego

* GitHub: https://github.com/Alvaro-Diego-MQ

---

## ⚠️ Aviso

Este proyecto fue desarrollado con fines educativos y de práctica profesional para demostrar la integración de Inteligencia Artificial conversacional dentro de una aplicación web moderna construida con Next.js.
