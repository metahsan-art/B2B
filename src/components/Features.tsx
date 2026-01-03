import { Zap, Target, BarChart3, Users, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Matching',
    description: 'Advanced algorithms match your products with the perfect prospects automatically.',
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Target specific niches: gym equipment, sports teams, martial arts, and more.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track performance metrics and optimize your campaigns with data-driven insights.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team to manage leads and coordinate outreach.',
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'GDPR-compliant data handling with enterprise-grade security.',
  },
  {
    icon: Sparkles,
    title: 'Automated Workflows',
    description: 'Set up automated sequences that nurture leads from first contact to conversion.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to scale your B2B lead generation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

