import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../Componenets/Spinner";
import Product from "../Componenets/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.log("Error aagaya! ");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:11/12 sm:10/12 md:9/12 lg:w-8/12 p-2 mx-auto space-y-10 spaxe-x-5 min-h-[80vh]">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
