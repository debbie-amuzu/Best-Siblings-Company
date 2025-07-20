// import abtimg from '../../assets/images/all5g.jpg';
const abtimg = "/images/all5g.jpg";

const About = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-8 lg:mb-0">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              About Our Spice Company
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Founded with a passion for health and flavor, our company specializes in processing 
              premium agricultural spices into finished products that bring both taste and wellness 
              to your table.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our journey began with a simple mission: to make the health benefits of local spices 
              accessible to everyone at affordable prices without compromising on quality.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Located in Lashibi Comm 17 Behind transcort house, we take pride in sourcing our 
              ingredients locally and processing them with care to preserve their natural goodness.
            </p>
            <div className="mt-8 bg-gold-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gold-800 mb-2">Our Unique Selling Proposition</h3>
              <p className="text-gold-700">
                Selling the health benefits of our local spices at an affordable price accessible to all.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={abtimg}
              alt="About our spices"
              className="w-34 h-34 rounded-lg shadow-lg"
            />
            <div className="mt-6 bg-black text-gold-400 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Business Overview</h3>
              <ul className="space-y-2">
                <li><strong>Industry:</strong> Agriculture</li>
                <li><strong>Primary Business:</strong> Processing agricultural spices</li>
                <li><strong>Secondary Business:</strong> Peanut oil production</li>
                <li><strong>Challenge Solved:</strong> Creating a supply of healthy spices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;