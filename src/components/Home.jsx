import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate, useOutletContext } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const { cartItems, setCartItems } = useOutletContext();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    if (e.target.value == "All") {
      fetchData(`https://fakestoreapi.com/products/`);
    } else {
      fetchData(`https://fakestoreapi.com/products/category/${e.target.value}`);
    }
  };

  const fetchCategory = () => {
    fetch("https://fakestoreapi.com/products/categories").then((response) =>
      response.json().then((data) => {
        data.unshift("All");
        setCategories(data);
        fetchData(`https://fakestoreapi.com/products/`);
      })
    );
  };
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    } 
  };

  const addToCart = (item) => {
    setCartItems((prevItem) => [...prevItem, item]);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    fetchCategory();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <ClipLoader color={"#3498db"} size={80} />
      </div>
    );
  }

  return (
    <div className="w-11/12 m-auto mt-4 md:flex">
      <div className=" md:w-1/5">
        <label
          htmlFor="options"
          className="block text-sm font-medium text-gray-700 "
        >
          Choose a Categories
        </label>
        <select
          id="options"
          onChange={handleCategoryChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>

        <button
          onClick={() => navigate("/cart")}
          className="mt-4 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          Go to Cart {cartItems.length > 0 && `(${cartItems.length})`}
        </button>
      </div>
      <div
        className="md:w-4/5 mt-4 flex flex-wrap  justify-center overflow-auto"
        style={{ height: "100vh" }}
      >
        {products.map((product) => (
          <div key={product.id} className=" w-1/2 md:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
              <img
                className="w-1/2 object-cover"
                src={product.image}
                alt={product.title}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">${product.price}</p>
                <button
                  className="w-full flex items-center justify-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                  onClick={() => addToCart(product)}
                >
                  <FaShoppingCart style={{ marginRight: "5px" }} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
