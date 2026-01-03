const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Sales Director, FitPro Equipment',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    quote: 'AIWizLab transformed our lead generation. We went from 10 leads per month to over 200 qualified prospects.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, TeamWear Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    quote: 'The AI matching is incredibly accurate. We\'re closing deals with companies we never would have found manually.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Manager, ActiveGear Co.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    quote: 'ROI increased 300% in the first quarter. The automated workflows save us 20 hours per week.',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of successful businesses using AIWizLab
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-border">
              <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

