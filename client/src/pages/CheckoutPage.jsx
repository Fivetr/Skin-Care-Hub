import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CartDetails from "../components/Checkout/Cart";

function CheckoutPage() {
  const user = useSelector((state) => state.user);
  const [items, setItems] = useState();

  const handleAddToCart = async (product) => {
    // console.log(user)
    if (!user) {
      //todo - error msg?
      return false;
    }
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: user, product: product, quantity: 1 }),
      });
      //   console.log(response);
      const data = await response.json();
      //   console.log(data.items)
      setItems(data.items);
    } catch (e) {
      console.log(e);
    }
  };

  const handleRemoveFromCart = async (product) => {
    // console.log(user)
    if (!user) {
      //todo - error msg?
      return false;
    }
    try {
      const response = await fetch("/api/cart/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: user, product: product, quantity: 1 }),
      });
      //   console.log(response);
      const data = await response.json();
      //   console.log(data.items)
      setItems(data.items);
    } catch (e) {
      console.log(e);
    }
  };

  const renderItems = () =>
    // console.log(items)
    items != "undefined" && items.cart != "undefined"
      ? items.map((product, index) => {
          return (
            // console.log(product.product._id)
            <div
              key={`${product.product._id}`}
              className="tw-pt-5 tw-pb-5 lg:tw-w-[37rem] tw-w-[17rem] md:tw-w-[30rem]"
            >
              <div className="tw-overflow-hidden tw-rounded-md tw-shadow-lg tw-w-25 tw-relative">
                <div className="tw-flex-initial tw-absolute tw-top-2 tw--left-1 ">
                  <span className="tw-inline-block tw-rounded-full tw-px-4 tw-py-2 tw-text-sm md:tw-text-base tw-font-semibold tw-mr-2">
                    ${product.product.price}
                  </span>
                </div>
                <div className="tw-flex tw-flex-col lg:tw-flex-row tw-px-6 tw-py-4 tw-bg-white">
                  <img
                    className="tw-flex-none tw-w-60 tw-h-60 tw-object-cover"
                    src={product.product.image_url}
                    alt={product.product.product_name}
                  />
                  <div className="tw-flex-initial tw-w-70 tw-mt-2 lg:tw-mt-0">
                    <div className="tw-font-bold tw-text-xl tw-mb-2 tw-text-gray-800">
                      {product.product.product_name}
                    </div>
                    <p className="tw-text-gray-600 tw-text-base">
                      {product.product.product_type}
                    </p>
                  </div>
                </div>
                <div className="tw-flex tw-justify-between tw-items-center tw-px-6 tw-py-2 tw-text-white">
                  <div className="tw-flex-initial tw-w-70"></div>
                  <span className="tw-bg-green-500 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-font-semibold">
                    <div className="tw-flex tw-flex-row">
                      <button
                        className="tw-flex-none tw-w-10"
                        onClick={() => handleRemoveFromCart(product.product)}
                      >
                        -
                      </button>
                      <span className="tw-flex-none tw-items-center">
                        {product.quantity}
                      </span>
                      <button
                        className="tw-flex-none tw-w-10"
                        onClick={() => handleAddToCart(product.product)}
                      >
                        +
                      </button>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          );
        })
      : null;

  const getPrice = () => {
    let price = 0;
    // console.log(items)
    items
      ? items.map((item, index) => {
          // console.log(item.product.price);
          price = price + item.quantity * item.product.price;
        })
      : null;
    return price;
  };

  const getQuantity = () => {
    let quantity = 0;
    items
      ? items.map((item, index) => {
          quantity = quantity + item.quantity;
        })
      : null;
    return quantity;
  };

  useEffect(() => {
    const getCart = async () => {
      // console.log(user)
      if (!user) {
        //todo - error msg?
        return false;
      }
      try {
        const response = await fetch(`/api/cart/mycart/${user.user._id}`, {
          method: "GET",
        });
        const data = await response.json();
        setItems(data.items);
        // console.log(data.items)
      } catch (e) {
        console.log(e.message);
      }
    };
    getCart();
  }, []);

  return (
    <>
      <Header />
      <div className="tw-h-20 tw-w-full tw-flex tw-flex-row tw-justify-center">
        <div className="tw-text-base lg:tw-text-2xl md:tw-text-xl tw-font-bold tw-pt-10">
          Shopping Cart ({getQuantity()} items)
        </div>
      </div>
      <div className=" tw-h-auto tw-max-w-[1440px]  tw-mx-auto">
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-center lg:tw-gap-3">
          <section className="tw-flex tw-mx-auto tw-items-center tw-justify-center tw-text-xl tw-h-auto">
            <div>
              {items ? renderItems() : null}
              {/* {items ? 
                            <CartDetails 
                                cart = {items}
                            />
                        : null} */}
            </div>
          </section>

          <section className="tw-flex tw-pb-12 lg:tw-pr-2 tw-items-center tw-mt-[5rem] tw-justify-center tw-h-[20rem] tw-text-3/4  ">
            <div className="tw-pt-5 tw-pb-5 lg:tw-w-[25rem] tw-w-[20rem] md:tw-w-[23rem] tw-border tw-border-gray-200 tw-rounded-none md:tw-rounded-md">
              <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
                <button className="tw-w-3/4 tw-bg-blue-500  tw-hover:bg-blue-700 text-white tw-font-bold py-2 px-6 my-3 tw-rounded-full content-center">
                  Continue to Checkout
                </button>
              </div>
              <hr className="tw-divide-y tw-divide-gray-50 tw-dark:divide-gray-50" />
              <div className="tw-flex tw-flex-row px-6 py-2 my-1">
                <div className="tw-basis-1/12"></div>
                <div className="tw-font-bold tw-text-lg mb-2 tw-basis-3/4">
                  Subtotal ({getQuantity()} items)
                </div>
                <div className="tw-font-bold tw-text-lg mb-2 tw-basis-1/4">
                  ${getPrice()}
                </div>
              </div>
              <div className="tw-flex tw-flex-row px-6 pb-2 pt-0">
                <div className="tw-basis-1/12"></div>
                <div className="tw-text-base mb-2 tw-basis-3/4">Shipping</div>
                <div className="tw-font-bold tw-text-base mb-2 tw-basis-1/4 tw-text-green-600">
                  Free
                </div>
              </div>

              <hr className="tw-divide-y tw-divide-gray-50 tw-dark:divide-gray-50" />
              <div className="tw-flex tw-flex-row px-6 py-2">
                <div className="tw-basis-1/12"></div>
                <div className="tw-font-bold tw-text-lg mb-2 tw-basis-3/4">
                  Estimated Total
                </div>
                <div className="tw-font-bold tw-text-lg mb-2 tw-basis-1/4">
                  ${getPrice()}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckoutPage;
