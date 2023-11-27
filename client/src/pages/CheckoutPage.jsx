import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CartDetails from '../components/Checkout/Cart';

function CheckoutPage() {

    const user = useSelector(state => state.user);
    const [items, setItems] = useState();
    console.log("Inside")
    useEffect(() => {
        const getCart = async () => {
            console.log(user)
            if(!user){
                //todo - error msg?
                return false;
              }
          try {
                const response = await fetch(`/api/cart/mycart/${user.user._id}`, {
                method: "GET"
            });
            const data = await response.json();
            setItems(data.items);
            console.log(data.items)
          } catch (e) {
            console.log(e.message);
          }
        };
        getCart();
      }, []);

    return (
        <>
            <Header />
            <section className="tw-flex tw-tems-center tw-justify-start tw-text-xl tw-border-b tw-border-black tw-h-auto w-1/2 md:w-full">
                {items ? 
                    <CartDetails 
                        cart = {items}
                    />
                : null}
            </section>
            <Footer />
        </>
    );
}

export default CheckoutPage;