import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link to={`/products/${product.id}`}>
        <img 
          className="w-full h-48 object-cover" 
          src={product.image} 
          alt={product.name} 
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-600 line-clamp-2">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-bold text-gold-600">GHS {product.price.toFixed(2)}</span>
            <button className="px-3 py-1 bg-gold-500 text-white text-sm font-medium rounded hover:bg-gold-600 focus:outline-none">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;