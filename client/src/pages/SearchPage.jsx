import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductsGrid from "../components/Search/products";
import { CiShoppingBasket } from "react-icons/ci";

function SearchPage() {
  const [products, setProducts] = useState();
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState();
  const [searchInput, setSearchInput] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPRoducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/search/products");
        const data = await response.json();
        setProducts(data);
        setMaxPage(Math.ceil(data.length / 10));
        setTimeout(() => {
          setLoading(false);
        }, 900);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchPRoducts();
  }, []);
  const handleLeft = () => {
    if (page === 1) {
      setPage(maxPage);
    } else setPage((prev) => prev - 1);
  };
  const handleRight = () => {
    if (page == maxPage) {
      setPage(1);
    } else setPage((prev) => prev + 1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `/api/search/products?userInput=${searchInput}`
      );
      const data = await response.json();
      setProducts(data);
      setPage(1);
      setMaxPage(Math.ceil(data.length / 10));
      setTimeout(() => {
        setLoading(false);
      }, 900);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <Header />
      <main className="tw-h-[calc(100vh-3.5rem)] ">
        <div className="tw-p-6 tw-mt-5 tw-max-w-5xl tw-mx-auto  tw-h-[10rem]">
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
        {loading ? (
          <div className="tw-flex tw-h-[calc(100vh-15rem)] tw-items-center tw-justify-center tw--mt-5">
            <CiShoppingBasket className="tw-animate-pulse tw-w-[20rem] tw-h-[20rem]" />
          </div>
        ) : (
          <ProductsGrid
            Products={products}
            handleLeft={handleLeft}
            handleRight={handleRight}
            Page={page}
          />
        )}
      </main>

      <Footer />
    </>
  );
}

export default SearchPage;
