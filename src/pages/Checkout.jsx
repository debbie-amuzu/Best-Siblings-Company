import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Your Order</h2>
              
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Your cart is empty</p>
                  <Link
                    to="/products"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gold-600 hover:bg-gold-700"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {cartItems.map(item => (
                    <div key={item.id} className="py-4 flex">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-20 w-20 object-cover rounded"
                      />
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-medium">{item.name}</h3>
                          <p className="text-lg font-semibold">GHS {item.price.toFixed(2)}</p>
                        </div>
                        <div className="mt-2 flex items-center">
                          <label htmlFor={`quantity-${item.id}`} className="mr-2">Qty:</label>
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
                            className="ml-4 text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="mobile-money"
                    name="payment-method"
                    type="radio"
                    defaultChecked
                    className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300"
                  />
                  <label htmlFor="mobile-money" className="ml-3 block text-sm font-medium text-gray-700">
                    Mobile Money
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="cash-on-delivery"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 text-gold-600 focus:ring-gold-500 border-gray-300"
                  />
                  <label htmlFor="cash-on-delivery" className="ml-3 block text-sm font-medium text-gray-700">
                    Cash on Delivery
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 mt-6 lg:mt-0">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">GHS {cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">GHS 10.00</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">GHS {(cartTotal + 10).toFixed(2)}</span>
                </div>
              </div>

              <button
                disabled={cartItems.length === 0}
                className={`mt-6 w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${cartItems.length === 0 ? 'bg-gray-400' : 'bg-gold-600 hover:bg-gold-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500`}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;