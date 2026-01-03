import { Search, Users, Mail, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'AI scans millions of businesses to find perfect matches',
  },
  {
    icon: Users,
    title: 'Qualify',
    description: 'Advanced filters ensure only high-quality leads',
  },
  {
    icon: Mail,
    title: 'Engage',
    description: 'Automated personalized outreach sequences',
  },
  {
    icon: CheckCircle,
    title: 'Convert',
    description: 'Track and nurture leads to successful conversions',
  },
];

export function ProcessDiagram() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">How We Work</h2>
          <p className="text-xl text-muted-foreground">
            A simple, powerful process that delivers results
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{index + 1}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

