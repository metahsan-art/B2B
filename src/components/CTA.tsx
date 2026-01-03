import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Lead Generation?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join hundreds of successful businesses using AIWizLab to scale their sales pipeline.
          Start your free trial today - no credit card required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Start Free Trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
            Schedule Demo
          </Button>
        </div>
        <p className="mt-6 text-sm opacity-75">
          ✓ 14-day free trial  ✓ No credit card required  ✓ Cancel anytime
        </p>
      </div>
    </section>
  );
}

