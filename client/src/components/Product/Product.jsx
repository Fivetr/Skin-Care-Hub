import React from "react";

function Product({
  id,
  name,
  type,
  price,
  img,
  quantity,
  handleAddToCart
}) {
    return (
      <div className="tw-max-w-sm tw-mx-auto tw-overflow-hidden tw-rounded-md tw-shadow-lg">
      {/* Product Image */}
      <img className="tw-w-full tw-h-48 tw-object-cover" src={img} alt={name} />

      {/* Product Information */}
      <div className="tw-px-6 tw-py-4 tw-bg-white">
        <div className="tw-font-bold tw-text-xl tw-mb-2 tw-text-gray-800">{name}</div>
        <p className="tw-text-gray-600 tw-text-base">{type}</p>
      </div>

      {/* Product Details */}
      <div className="tw-flex tw-justify-between tw-items-center tw-px-6 tw-py-4 tw-bg-gray-800 tw-text-white">
        <span className="tw-inline-block tw-bg-blue-500 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-font-semibold tw-mr-2">
          ${price}
        </span>
        <span className="tw-inline-block tw-bg-green-500 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-font-semibold">
          In Stock:
        </span>
      </div>
    </div>
    //   <div className="tw-flex tw-min-w-screen  tw-min-h-screen tw-items-center tw-justify-center tw-bg-gray-100">
    //     <div className="tw-flex tw-font-sans">
    //     <div className="tw-h-100 tw-w-64 tw-relative">
    //       <img src={img} class="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover" loading="lazy" />
    //     </div>
    //     <form className="tw-flex-auto tw-pl-6 pt-4 pb-4  tw-w-72 tw-h--30">
    //       <div className="tw-flex tw-flex-wrap">
    //         <h1 className="tw-flex-auto tw-text-xl ftw-ont-semibold tw-text-gray-900">
    //             {name}
    //         </h1>
    //         <div className="tw-text-lg tw-font-semibold tw-text-black-500">
    //             ${price}
    //         </div>
    //         <div className=" tw-text-sm tw-font-medium tw-text-black-700 tw-mt-2">
    //             {type}
    //         </div>
    //       </div>
    //       <div className="tw-flex tw-space-x-4 tw-mt-4 tw-text-sm tw-font-medium">
    //         <div className="tw-flex-auto tw-flex tw-space-x-4">
    //           <button 
    //           className="tw-h-10 tw-px-6 tw-mt-4 tw-font-semibold tw-rounded-md tw-border tw-border-balck-800 tw-text-gray-900" type="button"
    //           onClick={() => handleAddToCart(id,quantity)}
    //           >
    //             Add to cart
    //           </button>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    );
}

export default Product