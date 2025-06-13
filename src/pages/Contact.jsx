import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Have questions about our products or want to place a bulk order? 
              Fill out the form and we'll get back to you as soon as possible.
            </p>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Business Information</h2>
              <div className="space-y-3">
                <p className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>Lashibi Comm 17 Behind transcort house</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">📞</span>
                  <span>[Your Phone Number]</span>
                </p>
                <p className="flex items-start">
                  <span className="mr-2">✉️</span>
                  <span>[Your Email Address]</span>
                </p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Business Hours</h3>
                <ul className="space-y-1">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
           {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;