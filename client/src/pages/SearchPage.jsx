import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductsGrid from "../components/Search/products";

function SearchPage() {
  const [Products, setProducts] = useState();
  const [Page, setPage] = useState(1);
  const [MaxPage, setMaxPage] = useState();
  useEffect(() => {
    const fetchPRoducts = async () => {
      const response = await fetch("/api/search/products");
      const data = await response.json();
      setProducts(data);
      setMaxPage(Math.ceil(data.length / 10));
    };
    fetchPRoducts();
  }, []);
  const handleLeft = () => {
    if (Page === 1) {
      setPage(MaxPage);
    } else setPage((prev) => (prev -= 1));
  };
  const handleRight = () => {
    if (Page == MaxPage) {
      setPage(1);
    } else setPage((prev) => (prev += 1));
  };
  return (
    <>
      <Header />
      <div className="tw-p-6 tw-mt-5 tw-max-w-5xl tw-mx-auto">
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
      <ProductsGrid
        Products={Products}
        handleLeft={handleLeft}
        handleRight={handleRight}
        Page={Page}
      />
      <Footer />
    </>
  );
}

export default SearchPage;
