import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portafolio';
import Contact from '@/components/Contact';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}