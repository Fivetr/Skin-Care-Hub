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

  
//     <div>
//       <Button onClick={handleAddToCart}>Add to Cart</Button>
//     </div>
  // return <div>{id}</div>;
  
  return(
    <div class="tw-flex tw-min-h-screen tw-items-center tw-justify-center tw-bg-gray-100">
  <div class="tw-flex tw-font-sans">
    <div class="tw-flex-none tw-w-48 tw-relative">
      <img src="https://images.unsplash.com/photo-1699412958387-2fe86d46d394?q=80&w=3329&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover" loading="lazy" />
    </div>
    <form class="tw-flex-auto tw-p-6">
      <div class="tw-flex tw-flex-wrap">
        <h1 class="tw-flex-auto tw-text-xl ftw-ont-semibold tw-text-gray-900">
          Pullover Unisex
        </h1>
        <div class="tw-text-lg tw-font-semibold tw-text-black-500">
          $110.00
        </div>
        <div class="tw-w-full tw-flex-none tw-text-sm tw-font-medium tw-text-black-700 tw-mt-2">
          In stock
        </div>
      </div>
      <div class="tw-flex tw-space-x-4 tw-mb-6 tw-text-sm tw-font-medium">
        <div class="tw-flex-auto tw-flex tw-space-x-4">
          <button class="tw-h-10 tw-px-6 tw-font-semibold tw-rounded-md tw-border tw-border-balck-800 tw-text-gray-900" type="button">
            Add to cart
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
  );
}

export default ProductDetail;
