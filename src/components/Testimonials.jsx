const testimonials = [
  {
    id: 1,
    name: 'Ama K.',
    role: 'Professional Chef',
    content: 'These spices have transformed my cooking. The flavors are authentic and the quality is unmatched.',
    image: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Kwame B.',
    role: 'Health Enthusiast',
    content: 'Since incorporating these spices into my diet, Ive noticed significant improvements in my digestion and energy levels.',
    image: '/images/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'Esi M.',
    role: 'Home Cook',
    content: 'Affordable yet premium quality. My family can taste the difference in every meal I prepare with these spices.',
    image: '/images/testimonial-3.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-black text-gold-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-2xl text-xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">{testimonial.name}</h3>
                  <p className="text-gold-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;