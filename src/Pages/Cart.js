import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Componenets/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // acc -> Accumulator
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row justify-between xs:11/12 sm:10/12 md:9/12 lg:w-8/12 mx-auto gap-5">
          <div className="lg:w-8/12 xs:w-full">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div className="lg:w-4/12 xs:w-full flex flex-col justify-between gap-5 my-14">
            <div className="flex flex-col gap-5 ">
              <div className="font-semibold text-xl text-green-800">
                Your Cart
              </div>
              <div className="font-semibold text-5xl text-green-700 -mt-5">
                Summary
              </div>
              <p className="text-xl">
                <span className="text-gray-700 font-semibold text-xl">
                  Total Items: {cart.length}
                </span>
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold ">Total Amount: ${totalAmount}</p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition-all border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link to="/">
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition-all font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
