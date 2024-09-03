import React from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = ({ item }) => {
  return (
    <div className=" bg-blue-400 flex justify-between items-center p-4 md:py-6 text-white md:mx-20 md:rounded-md">
      <NavLink to="/" className="text-xl md:text-3xl">
        ShoppingCart
      </NavLink>

      <div className="flex md:px-8 gap-4 md:gap-10">
        <NavLink to="/" className="flex items-center md:text-xl">
          <FaHome style={{ marginRight: "5px" }} /> Home
        </NavLink>
        <NavLink to="/cart" className="flex items-center md:text-xl ">
          <FaShoppingCart style={{ marginRight: "5px" }} />
          Cart Items {item.length === 0 ? "" : item.length}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
