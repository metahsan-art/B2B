export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Simple Setup, Powerful Results</h2>
          <p className="text-xl text-muted-foreground">
            Get started in minutes, see results in days
          </p>
        </div>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
              1
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">Define Your Ideal Customer</h3>
              <p className="text-muted-foreground">
                Tell us about your target market, product categories, and ideal customer profile. 
                Our AI learns your preferences.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
              2
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">AI Finds Perfect Matches</h3>
              <p className="text-muted-foreground">
                Our system scans millions of businesses, analyzing data points to find companies 
                that match your criteria perfectly.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
              3
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">Automated Outreach</h3>
              <p className="text-muted-foreground">
                Personalized emails are sent automatically. Track opens, clicks, and responses 
                all from one dashboard.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
              4
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-2">Convert & Scale</h3>
              <p className="text-muted-foreground">
                Watch your pipeline fill with qualified leads. Scale successful campaigns 
                and optimize underperformers with real-time data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

