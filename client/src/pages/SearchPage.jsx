import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Products from "../components/Search/products";

function SearchPage() {
  const [Products, setProducts] = useState();
  const [Page, setPage] = useState(1);
  useEffect(() => {
    const fetchPRoducts = async () => {
      const response = await fetch("/api/search/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchPRoducts();
  }, []);
  return (
    <>
      <Header />
      <div className="tw-p-6 tw-mt-3 tw-max-w-5xl tw-mx-auto">
        <form>
          <div></div>
          <label className="tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 tw-sr-only tw-dark:text-white">
            Search
          </label>
          <div className="tw-relative">
            <input
              type="search"
              id="default-search"
              className="tw-block tw-w-full tw-p-4 tw-ps-10 tw-text-sm tw-text-gray-900 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-50 focus:tw-ring-blue-500 focus:tw-border-blue-500 "
              placeholder="Search Products..."
              required
            />
            <button
              type="submit"
              className="tw-text-white tw-absolute tw-end-2.5 tw-bottom-2.5 tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-py-2"
            >
              Search
            </button>
          </div>
        </form>
        <button className="tw-text-white tw-w-[5rem] tw-mt-4 tw-bg-blue-700 hover:tw-bg-blue-800  focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-py-2">
          Filter
        </button>
      </div>

      <div className="tw-container tw-mx-auto">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-8 tw-place-items-center ">
          {Products?.slice(Page * 10 - 10, Page * 10).map(
            ({
              price,
              image_url,
              product_name,
              product_type,
              _id,
              clean_ingreds,
            }) => (
              <div
                key={_id}
                className="tw-p-10 tw-cursor-pointer hover:tw-ring-2 hover:tw-ring-gray-400 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow tw-w-[24rem] tw-h-[20rem] tw-flex-col tw-flex tw-gap-2 tw-justify-center tw-items-center"
              >
                <h2 className="tw-mb-2 tw-text-[1.34rem] tw-font-bold tw-tracking-tight tw-text-gray-900">
                  {product_name}
                </h2>
                <img src={image_url} className="tw-w-[10rem] tw-h-[10rem]" />
              </div>
            )
          )}
        </div>
      </div>
      <div></div>
    </>
  );
}

export default SearchPage;
