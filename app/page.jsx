import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Ticker from '@/components/Ticker';
import Services from '@/components/Services';
import About from '@/components/About';
import HowItWorks from '@/components/HowItWorks';
import Testimonial from '@/components/Testimonial';
import FAQ from '@/components/FAQ';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Ticker />
        <Services />
        <About />
        <HowItWorks />
        <Testimonial />
        <FAQ />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
