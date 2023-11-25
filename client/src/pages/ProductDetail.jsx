import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
function ProductDetail() {
  const { id } = useParams();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchPRoducts = async () => {
      try {
        const response = await fetch(`/api/search/${id}`);
        const data = await response.json();
        console.log(data)
        setProducts(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchPRoducts();
  }, []);

  const handleAddToCart = async () => {
    console.log(id)
    console.log(user)

    if(!user){
      return false;
    }
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user: user, product: products, quantity: 1}),
      });
      // if (!response.ok) {
      //   const response_data = await response.json();
      //   console.log(response_data);
      // }
      // const data = await response.json();
      console.log(response);
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
}

export default ProductDetail;
