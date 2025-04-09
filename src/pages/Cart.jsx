import { useState } from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Cart</h1>
        <div className="text-center text-gray-500 text-lg sm:text-xl py-12">
          Your cart is empty
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Cart</h1>
      
      {/* Cart Items */}
      <div className="space-y-4 sm:space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {/* Image Section */}
              <div className="flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 sm:w-20 sm:h-20 object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* Title and Price */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium text-gray-900 line-clamp-2">{item.title}</h3>
                    <p className="text-xl font-semibold text-primary">${item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200 transition-colors text-lg"
                    >
                      -
                    </button>
                    <span className="w-10 text-center text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200 transition-colors text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <div className="mt-4 sm:mt-0">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-full sm:w-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-6 sm:mt-8 bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex justify-between items-center mb-6 text-lg sm:text-xl font-bold">
          <span>Total:</span>
          <span className="text-primary">${getCartTotal()}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-md transition-colors duration-200 text-base sm:text-lg"
        >
          Proceed to Checkout
        </button>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 sm:px-6 py-3 rounded-lg shadow-lg animate-slide-in text-sm sm:text-base">
          Order placed successfully!
        </div>
      )}
    </div>
  );
};

export default Cart; 