import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';

function CartDetails(items) {

    const removeItem = () => {
        
    }

    const renderItems = () => (

            // console.log(items)
            items != 'undefined' && items.cart != 'undefined' ? 
            items.cart.map((product, index) => (
                // console.log(product.product._id)
                <div key={`${product.product._id}${index}`} className="tw-overflow-hidden tw-rounded-md tw-shadow-lg">
                    
                    <div className="tw-flex tw-px-6 tw-py-4 tw-bg-white">
                        <img className="tw-w-60 tw-h-60 tw-object-cover" src={product.product.image_url} alt={product.product.product_name} />
                        <div>
                            <div className="tw-font-bold tw-text-xl tw-mb-2 tw-text-gray-800">{product.product.product_name}</div>
                            <p className="tw-text-gray-600 tw-text-base">{product.product.product_type}</p>
                        </div>
                    </div>
                    <div className="tw-flex tw-justify-between tw-items-center tw-px-6 tw-py-4 tw-bg-gray-800 tw-text-white">
                        <span className="tw-inline-block tw-bg-blue-500 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-font-semibold tw-mr-2">
                        ${product.product.price}
                        </span>
                        <span className="tw-inline-block tw-bg-green-500 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-font-semibold">
                        Add more
                        </span>
                    </div>
                </div>

                // <h1> {product.product_name}</h1>
            ))
        : null
        
    )

    return(
        <div>
            {renderItems()}
        </div>
    )
}

export default CartDetails;