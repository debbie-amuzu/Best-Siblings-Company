import heroim from "../assets/images/pke.png";
// import herovideo from "../assets/images/hero2.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative  pb-8 bg-black sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* z-10 */}
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gold-500 sm:text-5xl md:text-6xl">
                <span className="block">Premium Spices</span>
                <span className="block text-white">For Healthier Living</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover the health benefits of our locally sourced, natural
                spices at prices everyone can afford.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/products"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gold-500 hover:bg-gold-700 md:py-4 md:text-lg md:px-10"
                  >
                    Shop Now
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gold-500 bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[50%]">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full "
          src={heroim}
          alt="Assortment of spices"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default Hero;
