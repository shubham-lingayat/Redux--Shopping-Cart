import React from "react";
import { useState, useEffect } from "react";

function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchData() {
    // Making Loader True until we fetch the data
    setLoading(true);

    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.log("Error aagaya!", error);
    }
    // Making Loader False as Data is successfully fetched (or get an error)
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div>
    <Spinner/>
  </div>;
}

export default Home;
