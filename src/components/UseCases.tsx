const useCases = [
  {
    image: 'https://images.unsplash.com/photo-1632077804406-188472f1a810',
    title: 'Gym Equipment Suppliers',
    description: 'Connect with fitness centers, personal trainers, and gym chains looking for quality equipment.',
  },
  {
    image: 'https://images.unsplash.com/photo-1746003625471-8785a7d19d78',
    title: 'Sports Team Apparel',
    description: 'Reach out to professional and amateur sports teams needing custom uniforms and gear.',
  },
  {
    image: 'https://images.unsplash.com/photo-1725813961320-151288b4c4db',
    title: 'Martial Arts Studios',
    description: 'Target martial arts schools and dojos requiring specialized training equipment and apparel.',
  },
];

export function UseCases() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Perfect For</h2>
          <p className="text-xl text-muted-foreground">
            Tailored solutions for your specific market
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={useCase.image}
                alt={useCase.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

