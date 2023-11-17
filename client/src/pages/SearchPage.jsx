import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductsGrid from "../components/Search/products";

function SearchPage() {
  const [Products, setProducts] = useState();
  const [Page, setPage] = useState(1);
  const [MaxPage, setMaxPage] = useState();
  const [SearchInput, setSearchInput] = useState();
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
    } else setPage((prev) => prev - 1);
  };
  const handleRight = () => {
    if (Page == MaxPage) {
      setPage(1);
    } else setPage((prev) => prev + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredProducts = Products.filter((product) => {
      return (
        product.product_name
          .toLowerCase()
          .includes(SearchInput.toLowerCase()) ||
        product.product_type
          .toLowerCase()
          .includes(SearchInput.toLowerCase()) ||
        product.clean_ingreds
          .map((item) => item.toLowerCase())
          .includes(SearchInput.toLowerCase())
      );
    });
    setProducts(filteredProducts);
    setPage(1);
    setMaxPage(Math.ceil(filteredProducts.length / 10));
  };
  return (
    <>
      <Header />
      <div className="tw-p-6 tw-mt-5 tw-max-w-5xl tw-mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="tw-relative">
            <input
              type="search"
              id="default-search"
              className="tw-block tw-w-full tw-p-4 tw-ps-10 tw-text-sm tw-text-gray-900 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-50 "
              placeholder="Search Products..."
              onChange={(e) => setSearchInput(e.target.value)}
              required
            />
            <button
              type="submit"
              className="tw-text-white tw-absolute tw-end-2.5 tw-bottom-2.5 tw-bg-blue-700 hover:tw-bg-blue-800 focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-py-2"
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
