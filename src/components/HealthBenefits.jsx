const benefits = [
  {
    title: 'Improved Digestion',
    description: 'Our spices contain natural compounds that aid digestion and reduce bloating.',
    icon: '🍃',
  },
  {
    title: 'Enhanced Immunity',
    description: 'Packed with antioxidants that help strengthen your immune system.',
    icon: '🛡️',
  },
  {
    title: 'Anti-inflammatory',
    description: 'Natural anti-inflammatory properties help reduce body inflammation.',
    icon: '❤️',
  },
  {
    title: 'Rich in Nutrients',
    description: 'Excellent source of essential vitamins and minerals for overall health.',
    icon: '🌿',
  },
];

const HealthBenefits = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Health Benefits of Our Spices
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Nature's medicine cabinet in every pinch
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-gold-500 rounded-md shadow-lg text-2xl">
                      {benefit.icon}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="mt-5 text-base text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthBenefits;