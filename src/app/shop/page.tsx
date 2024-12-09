'use client'
// pages/shopping-cart.tsx
import React, { useState } from "react";
import Image from "next/image";

const initialCartItems = [
  { name: "Burger", price: 10.99, quantity: 2, image: "/product_img.png" },
  { name: "Fresh Lime", price: 3.49, quantity: 1, image: "/Mask Group (1).png" },
  { name: "Pizza", price: 9.99, quantity: 4, image: "/Mask Group (2).png" },
  { name: "Chocolate Muffin", price: 4.49, quantity: 1, image: "/product_img (1).png" },
  { name: "Cheese Butter", price: 11.99, quantity: 3, image: "/product_img (2).png" },
];

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (newQuantity >= 0) {
      setCartItems((prev) =>
        prev.map((item, i) =>
          i === index ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === "DISCOUNT10") {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
    }
  };

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCharges = cartSubtotal > 50 ? 0 : 30.0;
  const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges;

  return (
    <div className="bg-gray-50 font-sans">
      {/* Header */}
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
    <Image
      src= '/upper.png'
      alt="Banner Image"
      className="absolute inset-0 w-full h-full object-cover"
      
      layout="fill"
    />
    <div className="min-h-[350px] relative z-50 max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-6">
      <h2 className="text-white md:text-5xl text-3xl font-bold mb-8">
        Shop
      </h2>
      <div className="flex items-center space-x-2 text-black">
        <a href="/" className="text-white">Home</a>
        <span className="text-white"> &gt; </span>
        <a href="/about" className="text-orange-500">Shop</a>
      </div>
    </div>
  </div>
      {/* Main Content */}
      <main className="py-12  text-black  border-blackpx-6 md:px-16 lg:px-28">
        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse shadow-lg bg-white rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-4 font-semibold">Product</th>
                <th className="p-4 font-semibold">Price</th>
                <th className="p-4 font-semibold">Quantity</th>
                <th className="p-4 font-semibold">Total</th>
                <th className="p-4 font-semibold">Remove</th>
              </tr>
            </thead>
            <tbody className=" border-black">
              {cartItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4 flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <span className="font-medium">{item.name}</span>
                  </td>
                  <td className="p-4">${item.price.toFixed(2)}</td>
                  <td className="p-4">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(index, parseInt(e.target.value) || 0)
                      }
                      className="w-16 border rounded px-2 py-1 text-center"
                      aria-label={`Quantity of ${item.name}`}
                      min="0"
                    />
                  </td >
                  <td className="p-4 ">${(item.price * item.quantity).toFixed(2)}</td>
                  <td
                    className="p-4 text-red-500 cursor-pointer hover:text-red-700"
                    onClick={() => handleRemoveItem(index)}
                    role="button"
                    aria-label={`Remove ${item.name}`}
                  >
                    &times;
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Coupon and Summary Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10">
          {/* Coupon Section */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-lg font-semibold mb-2">Apply Coupon</h2>
            <div className="flex items-center">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                className="flex-grow border rounded-l px-4 py-2"
                aria-label="Coupon Code"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-orange-500 text-white px-6 py-2 rounded-r font-semibold hover:bg-orange-600"
                aria-label="Apply Coupon"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-4">
                <span>Cart Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Discount</span>
                <span>${(cartSubtotal * discount).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>${shippingCharges.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-orange-500 text-white mt-4 py-3 rounded font-semibold hover:bg-orange-600"
                aria-label="Proceed to Checkout"
              >
               <a href="/checkout"> Proceed to Checkout</a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCart;
