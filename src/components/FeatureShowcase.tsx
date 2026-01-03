export function FeatureShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">
              Comprehensive Dashboard
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Get a complete view of your lead generation pipeline. Monitor campaigns, 
              track conversions, and make data-driven decisions with our intuitive dashboard.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-foreground">Real-time campaign performance metrics</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-foreground">Lead quality scoring and prioritization</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span className="text-foreground">Automated workflow management</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86"
              alt="Analytics Dashboard"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

