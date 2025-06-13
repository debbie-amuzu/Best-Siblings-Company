import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic
    console.log('Subscribed with:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="bg-gold-700 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Stay updated with our latest products</span>
          <span className="block">and health tips</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gold-200">
          Subscribe to our newsletter for exclusive offers and health benefits of our spices.
        </p>
        
        {subscribed ? (
          <div className="mt-8 bg-white rounded-md p-4">
            <p className="text-gold-700 font-medium">Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 sm:flex">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gold-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gold-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gold-700 focus:ring-white"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
        
        <p className="mt-3 text-sm text-gold-200">
          We care about your data. Read our{' '}
          <a href="/privacy" className="text-white font-medium underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;