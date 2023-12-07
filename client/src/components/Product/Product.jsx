import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Product({
  id,
  name,
  type,
  price,
  img,
  quantity,
  ingredients,
  handleAddToCart
}) {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const user = useSelector(state => state.user.exist);
  const navigate = useNavigate();
  const handleDeleteProduct = async () => {
    try {
      const response = await fetch("/api/products/"+id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      });
      toast.success("Deleted product successfully.");
      console.log(response);
      navigate("/search");
    } catch (e) {
      console.log(e);
    }
  }
  const handleEditProduct = () => {
    navigate("/products/edit/"+id);
  }
    return (
      <div className="tw-h-[calc(90vh-3.5rem)] tw-overflow-y-scroll tw-overflow-x-hidden">
        <div className="tw-flex tw-justify-end tw-mt-4 tw-mr-4">
        {isAdmin && <span className="tw-flex tw-flex-row tw-items-start tw-mt-4 tw-space-x-4 ">
        <button
            className="tw-flex tw-items-center tw-text-white tw-w-[2rem] tw-bg-yellow-400 hover:tw-bg-yellow-500 focus:tw-outline-none focus:tw-ring-yellow-200 tw-font-medium tw-rounded-lg tw-text-md"
            onClick={handleEditProduct}
          >
           <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="currentColor" class="bi bi-pencil-fill tw-mr-2 tw-ml-2" viewBox="0 0 16 16">
           <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
          </svg>
          </button>
        <button
            className="tw-flex tw-items-center tw-text-white tw-w-[2rem] tw-bg-red-700 hover:tw-bg-red-800 focus:tw-outline-none focus:tw-ring-red-300 tw-font-medium tw-rounded-lg tw-text-md"
            onClick={handleDeleteProduct}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="currentColor" class="bi bi-trash3-fill tw-mr-2 tw-ml-2" viewBox="0 0 16 16">
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
            </svg>
          </button>
      </span>
      }
        </div>
        
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-w-full tw-ml-4 tw-mr-4 tw-mx-auto tw-overflow-hidden tw-rounded-md tw-relative">  
          {/* Product Image */}
          <div className="lg:tw-w-1/3 tw-flex">
              <img className="tw-w-full tw-h-auto tw-object-cover tw-justify-center" src={img} alt={name} />
          </div>
      
    
          {/* Product Information and Ingredients */}
          <div className="lg:tw-w-2/3 tw-px-6 tw-py-4 tw-bg-white">
            <div className="tw-font-bold tw-text-xl tw-mb-2 tw-text-gray-800">{name}</div>
            <p className="tw-text-gray-600 tw-text-base">{type}</p>
        
            {/* Ingredients Section */}
            <div className="tw-mt-4">
              <h3 className="tw-font-bold tw-text-lg">Ingredients: </h3>
              <p className="tw-text-gray-600">
                  {ingredients.join(', ')}
              </p>
            </div>
        
            {/* Other Product Details */}
            <div className="tw-flex tw-justify-between tw-items-center tw-mt-4">
              <span className="tw-inline-block tw-font-bold tw-text-xl tw-mr-2">
                ${price}
              </span>
              {quantity > 0 ? (
                <span className="tw-inline-block tw-bg-green-500 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-font-semibold">
                  In Stock
                </span>
              ) : (
                <span className="tw-inline-block tw-bg-red-500 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-font-semibold">
                  Out of Stock
                </span>
              )}
            </div>
            <div className="tw-mt-4">
                {isAdmin && <span className="tw-font-semibold tw-text-md">Available quantity : {quantity}</span>}
            </div>
            {
              (user && !isAdmin) && <button 
                      className="tw-flex tw-items-center tw-justify-center tw-text-white tw-end-2.5 tw-bottom-2.5 tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-py-2" type="button"
                      onClick={handleAddToCart}
                      >
                      Add to cart
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart4 tw-mr-2 tw-ml-2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                        </svg>
                      </button>
            }
            
          </div>
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