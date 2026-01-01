import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/ChatbotIA';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Violet Strategy | Agencia de Marketing y Publicidad',
  description: 'Marketing, diseño y publicidad que construyen marcas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}