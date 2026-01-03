const industries = [
  'Fitness & Gym Equipment',
  'Sports Team Apparel',
  'Martial Arts Gear',
  'Athletic Footwear',
  'Outdoor Sports',
  'Yoga & Wellness',
  'Cycling Apparel',
  'Swimming Gear',
];

export function Industries() {
  return (
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Serving All Industries</h2>
          <p className="text-xl text-muted-foreground">
            Specialized solutions for every niche in apparel and sportswear
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-border text-center hover:shadow-lg transition-shadow"
            >
              <p className="text-foreground font-medium">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

