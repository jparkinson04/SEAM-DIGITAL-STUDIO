import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import RotatingGraphics from '@/components/RotatingGraphics';
import Services from '@/components/Services';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <RotatingGraphics />
      <Services />
      <About />
      <HowItWorks />
      <FAQ />
    </>
  );
}
