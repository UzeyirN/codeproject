import React, { useState, useEffect } from "react";
import axios from "axios";

function Product({ id }) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3070/wishlist/${id}`);
        setProduct(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleIncrement = async () => {
    try {
      const newCount = product.count + 1;
      const newPrice = product.price + 10;

      const response = await axios.patch(`http://localhost:3070/wishlist/${id}`, {
        count: newCount,
        price: newPrice
      });

      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Product Count: {product.count}</p>
      <p>Product Price: {product.price}</p>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default Product;
