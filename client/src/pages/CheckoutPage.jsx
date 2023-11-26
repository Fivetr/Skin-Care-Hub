import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CartDetails from '../components/Checkout/Cart';

function CheckoutPage() {
    return (
        <>
            <Header />
            <section className="tw-flex tw-tems-center tw-justify-center tw-text-xl tw-border-b tw-border-black tw-h-[calc(100vh-3.5rem)]">
                <CartDetails />
            </section>
            <Footer />
        </>
    );
}

export default CheckoutPage;