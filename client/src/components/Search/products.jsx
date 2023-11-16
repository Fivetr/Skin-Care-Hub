import React, { useState, useEffect } from "react";

function products() {
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
    <div className="tw-container tw-mx-auto">
      <div className="tw-grid tw-grid-cols-1 tw-gap-8 tw-place-items-center tw-border tw-border-black">
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
              className="tw-p-6 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow tw-w-[25rem] tw-h-[18rem] tw-flex-col tw-flex tw-justify-center tw-items-center"
            >
              <h5 className="tw-mb-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-gray-900">
                {product_name}
              </h5>

              <p className="tw-mb-3 tw-font-normal tw-text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              {product_name}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default products;
