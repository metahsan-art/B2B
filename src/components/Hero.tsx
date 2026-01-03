import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
          AI-Powered B2B Lead Generation
          <span className="block text-primary/80 mt-2">for Apparel & Sportswear</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Transform your sales pipeline with intelligent automation. Find, engage, and convert 
          high-quality leads in the apparel and sportswear industry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
        <div className="mt-12">
          <img
            src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b"
            alt="Dashboard Preview"
            className="rounded-lg shadow-2xl mx-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

