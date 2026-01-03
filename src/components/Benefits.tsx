import { CheckCircle } from 'lucide-react';

const benefits = [
  '10x more qualified leads than manual research',
  'Save 20+ hours per week on lead generation',
  '300% average ROI increase in first quarter',
  'GDPR-compliant and enterprise-grade security',
  '24/7 automated lead discovery and outreach',
  'Real-time analytics and performance tracking',
];

export function Benefits() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose AIWizLab?</h2>
          <p className="text-xl text-muted-foreground">
            Proven results for apparel and sportswear businesses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-lg border border-border">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-foreground font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

