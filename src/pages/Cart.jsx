import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link
              to="/products"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gold-600 hover:bg-gold-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-8">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Cart Items ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                  </h3>
                </div>
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="p-4 sm:p-6">
                      <div className="flex items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="ml-4 flex-1">
                          <div className="flex items-start justify-between">
                            <h4 className="text-lg font-medium text-gray-900">{item.name}</h4>
                            <p className="ml-4 text-lg font-semibold text-gold-600">GHS {item.price.toFixed(2)}</p>
                          </div>
                          <div className="mt-2 flex items-center">
                            <label htmlFor={`quantity-${item.id}`} className="mr-2 text-sm text-gray-600">Qty:</label>
                            <input
                              type="number"
                              id={`quantity-${item.id}`}
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                              className="w-16 border border-gray-300 rounded px-2 py-1 text-sm"
                            />
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-4 text-sm text-red-500 hover:text-red-700"
                            >
                              Remove
                            </button>
                          </div>
                          <p className="mt-2 text-sm font-medium text-gray-900">
                            Subtotal: GHS {(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-4 mt-6 lg:mt-0">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">GHS {cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">GHS 10.00</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between">
                    <span className="text-base font-medium">Total</span>
                    <span className="text-base font-medium">GHS {(cartTotal + 10).toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <Link
                    to="/checkout"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gold-600 hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
                  >
                    Proceed to Checkout
                  </Link>
                  <Link
                    to="/products"
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;