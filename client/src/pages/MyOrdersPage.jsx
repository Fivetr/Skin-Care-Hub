import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function MyOrdersPage() {

    const user = useSelector((state) => state.user);
    const [transactions, setTransactions] = useState();
    const navigate = useNavigate();

    const viewOrder = (id) => {
        navigate(`/order/${id}`);
      };

    const renderMyOrders = () =>
    transactions
      ? transactions.map((transaction, index) => {
          return (
            <div
              key={`${transaction._id}`}
              className="tw-pt-5 tw-pb-5"
            >
              <div className="tw-rounded-md tw-shadow-lg tw-relative">
                <div className="tw-flex tw-flex-row lg:tw-flex-row tw-px-6 tw-py-4 tw-bg-white tw-flex-wrap">
                  <div className="tw-basis-1/4 tw-w-70 tw-mt-2 lg:tw-mt-0">
                  <span className="tw-inline-block tw-rounded-full tw-px-4 tw-py-2 tw-text-sm md:tw-text-base tw-font-semibold tw-mr-2">
                    Order# {transaction.orderId}
                  </span>
                  </div>
                  <div className="tw-basis-1/4 tw-w-70">
                  <span className="tw-inline-block tw-rounded-full tw-px-4 tw-py-2 tw-text-sm md:tw-text-base tw-font-semibold tw-mr-2">
                    Date {transaction.date}
                  </span>
                  </div>
                  <div className="tw-basis-1/4 tw-text-sm tw-w-40 tw-pt-2 lg:tw-mt-0 tw-font-semibold">
                    $ {transaction.orderData[0].purchase_units[0].amount.value}
                  </div>
                  <div className="tw-basis-1/4 tw-px-4 tw-w-70 tw-mt-2 lg:tw-mt-0">
                    <button className="tw-h-10 tw-bg-blue-500 tw-hover:bg-blue-700 tw-text-sm tw-text-white tw-font-bold py-2 px-6 my-3 tw-rounded-md content-center tw-px-2"
                        onClick={() => viewOrder(transaction._id)}
                    >
                        View Details
                    </button>
                  
                  </div>
                </div>
              </div>
            </div>
          );
        })
      : null;
  
    useEffect(() => {
        const getTransactions = async () => {
          // console.log(user)
          if (!user) {
            //todo - error msg?
            return false;
          }
          try {
            const response = await fetch(`/api/transaction/myorders/${user.user._id}`, {
              method: "GET",
            });
            const data = await response.json();
            setTransactions(data);
            console.log(data)
          } catch (e) {
            console.log(e.message);
          }
        };
        getTransactions();
      }, []);

  return (
    <>
      <Header />
        <main className="tw-h-[calc(92vh-3.5rem)]">
        {transactions ?
        <>
            <div className="tw-h-20 tw-flex tw-flex-row tw-justify-center">
                <div className="tw-text-base lg:tw-text-2xl md:tw-text-xl tw-font-bold tw-pt-10">
                    Purchase History
                </div>
            </div>
            <div className=" tw-h-auto tw-mx-auto">
                <div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-center lg:tw-gap-3">
                <section className="tw-flex tw-mx-auto tw-items-center tw-justify-center tw-text-xl tw-h-auto">
                    <div>
                    {transactions ? renderMyOrders() : null}
                    </div>
                </section>
                </div>
            </div>
        </>
      : null}
        </main>    
      <Footer />
    </>
  );
}

export default MyOrdersPage;
