import React from "react";
import { useOutletContext } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { cartItems } = useOutletContext();
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center  mt-8">
      {cartItems.length === 0 ? (
        <div className=" h-[75vh] flex flex-col items-center justify-center text-cyan-500">
          <p className="text-center text-red-500 text-2xl">
            Nothing in your cart
          </p>
          <button onClick={() => navigate("/")}>Click to Add Items</button>
          <FaShoppingCart className="text-4xl mt-4" />
        </div>
      ) : (
        <div className="">
          <ul className="space-y-4">
            <h2 className="text-2xl text-center font-bold mb-4">Cart Items</h2>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="border p-4 rounded-lg flex justify-between gap-4 w-4/5 m-auto"
              >
                <div className="w-3/5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-400 ">
                    <span className="text-gray-800">Description</span>:{" "}
                    {item.description}
                  </p>
                  <p className="text-yellow-400 ">Price: ${item.price}</p>
                </div>
                <div className="w-1/4 ">
                  <img
                    className="  object-cover rounded-lg"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartItems;
