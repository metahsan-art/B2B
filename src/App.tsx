import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { FeatureShowcase } from './components/FeatureShowcase';
import { ProcessDiagram } from './components/ProcessDiagram';
import { UseCases } from './components/UseCases';
import { HowItWorks } from './components/HowItWorks';
import { Industries } from './components/Industries';
import { Testimonials } from './components/Testimonials';
import { Benefits } from './components/Benefits';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <FeatureShowcase />
      <ProcessDiagram />
      <UseCases />
      <HowItWorks />
      <Industries />
      <Testimonials />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}
