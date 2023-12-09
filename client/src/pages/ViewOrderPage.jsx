import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function ViewOrderPage() {

    const [transaction, setTransaction] = useState();
    const { id } = useParams();

    const renderMyOrder = () =>
        transaction.orderData[0].purchase_units[0].items ?
            transaction.orderData[0].purchase_units[0].items.map((item, index) => {
                console.log(item)
                return (
                    <div
                      key={`${index}`}
                      className="tw-pt-5 tw-pb-5 lg:tw-w-[37rem] tw-w-[17rem] md:tw-w-[30rem]"
                    >
                      <div className="tw-overflow-hidden tw-rounded-md tw-shadow-lg tw-w-25 tw-relative">
                        <div className="tw-flex tw-flex-row lg:tw-flex-row tw-px-6 tw-py-4 tw-bg-white">
                            <div className="tw-basis-1/3 tw-left-1 ">
                                <span className="tw-inline-block tw-rounded-full tw-px-4 tw-py-2 tw-text-sm md:tw-text-base tw-font-semibold tw-mr-2">
                                    Price ${item.unit_amount.value}
                                </span>
                            </div>
                            <div className="tw-basis-1/3 tw-font-bold tw-text-xl tw-mb-2 tw-text-gray-800">
                                Name {item.name}
                            </div>
                            <p className="tw-basis-1/3 tw-text-gray-600 tw-text-base">
                                Quantity {item.quantity}
                            </p> 
                        </div>
                      </div>
                    </div>
                );
            })
            
        : null;
  
    useEffect(() => {
        const getOrder = async () => {
          try {
            const response = await fetch(`/api/transaction/order/${id}`, {
              method: "GET",
            });
            const data = await response.json();
            setTransaction(data);
            console.log(data)
          } catch (e) {
            console.log(e.message);
          }
        };
        getOrder();
      }, []);

  return (
    <>
      <Header />
      
      {transaction ?
      <>
        <div className="tw-h-20 tw-w-full tw-flex tw-flex-row tw-justify-center">
        <div className="tw-text-base lg:tw-text-2xl md:tw-text-xl tw-font-bold tw-pt-10">
            Order# {transaction.orderId}
        </div>
      </div>
      <div className=" tw-h-auto tw-max-w-[1440px]  tw-mx-auto">
        <div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-center lg:tw-gap-3">
          <section className="tw-flex tw-mx-auto tw-items-center tw-justify-center tw-text-xl tw-h-auto">
            <div>
            <div className="tw-overflow-hidden tw-rounded-md tw-shadow-lg tw-w-25 tw-relative">
                        <div className="tw-flex tw-flex-row lg:tw-flex-row tw-px-6 tw-py-4 tw-bg-white">
                            <div className="tw-basis-1/3 tw-left-1 ">
                                <span className="tw-inline-block tw-rounded-full tw-font-bold tw-px-4 tw-py-2 tw-mr-2">
                                    Price
                                </span>
                            </div>
                            <div className="tw-basis-1/3 tw-font-bold tw-mb-2 tw-text-gray-800">
                                Product
                            </div>
                            <p className="tw-basis-1/3 tw-font-bold tw-text-gray-800">
                                Quantity
                            </p> 
                        </div>
                      </div>
              {transaction ? renderMyOrder() : null}
            </div>
          </section>

          <section className="tw-flex tw-pb-12 lg:tw-pr-2 tw-items-center tw-mt-[5rem] tw-justify-center tw-h-[20rem] tw-text-3/4  ">
            <div className="tw-pt-5 tw-pb-5 lg:tw-w-[25rem] tw-w-[20rem] md:tw-w-[23rem] tw-border tw-border-gray-200 tw-rounded-none md:tw-rounded-md">
              <div className="tw-flex tw-flex-col tw-justify-center tw-items-center"> 
                  Payment Information
              </div>
              <hr className="tw-divide-y tw-divide-gray-50 tw-dark:divide-gray-50" />
              <div className="tw-flex tw-flex-row px-6 py-2 my-1">
                <div className="tw-basis-1/12"></div>
                <div className="tw-font-bold tw-text-lg mb-2 tw-basis-3/4">
                  Total Amount
                </div>
                <div className="tw-font-bold tw-text-lg mb-2 tw-basis-1/4">
                  ${transaction.orderData[0].purchase_units[0].amount.value}
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
                <div className="tw-flex tw-flex-col">
                    <div className="tw-font-bold tw-text-lg mb-2 tw-basis-3/4">
                        Shipping Address 
                    </div>
                    <div className="tw-text-lg mb-2 tw-basis-1/4">
                        {transaction.orderData[0].purchase_units[0].shipping.address.address_line_1}
                    </div>
                    <div className="tw-text-lg mb-2 tw-basis-1/4"> 
                        {transaction.orderData[0].purchase_units[0].shipping.address.admin_area_1}, {transaction.orderData[0].purchase_units[0].shipping.address.admin_area_2} 
                    </div>
                    <div className="tw-text-lg mb-2 tw-basis-1/4">
                        {transaction.orderData[0].purchase_units[0].shipping.address.country_code}, {transaction.orderData[0].purchase_units[0].shipping.address.postal_code}
                    </div>
                </div>
                
              </div>
            </div>
          </section>
        </div>
      </div>
        </>
      : null}  
      <Footer />
    </>
  );
}

export default ViewOrderPage;
