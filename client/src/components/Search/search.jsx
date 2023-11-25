import React from "react";

function search({ setSearchInput,setMinPriceInput,setMaxPriceInput,setTypeValue, handleSubmit, handleFilter }) {
  return (
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
      <div class="tw-flex">
        <div>
          <input
            type="number"
            id="min-price"
            placeholder="Min Price USD"
            className="tw-w-[8rem] tw-px-2 tw-py-2 tw-text-sm tw-text-gray-900 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-50 tw-mt-4"
            onChange={(e) => {
              setMinPriceInput(e.target.value);
            }
          }
          />
        </div>
        <div className="tw-ml-4">
          <input
            type="number"
            id="max-price"
            placeholder="Max Price USD"
            className="tw-w-[8rem] tw-px-2 tw-py-2 tw-text-sm tw-text-gray-900 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-50 tw-mt-4"
            onChange={(e) => setMaxPriceInput(e.target.value)}
          />
        </div>
        <div className="tw-ml-4">
          <select class="tw-gray-90 tw-w-[7rem] tw-mt-4 tw-border tw-border-gray-300 tw-bg-gray-50 hover:tw-bg-gray-80 tw-font-medium tw-rounded-lg tw-text-sm tw-px-2 tw-py-2"
          onChange={(e) => setTypeValue(e.target.value)}
          >
            <option value="Catergory">Catergory</option>
            <option value="Moisturiser">Moisturiser</option>
            <option value="Serum">Serum</option>
            <option value="Oil">Oil</option>
            <option value="Mist">Mist</option>
            <option value="Balm">Balm</option>
            <option value="Mask">Mask</option>
            <option value="Peel">Peel</option>
            <option value="Eye Care">Eye Care</option>
            <option value="Cleanser">Cleanser</option>
            <option value="Toner">Toner</option>
            <option value="Exfoliator">Exfoliator</option>
            <option value="Bath Salts">Bath Salts</option>
            <option value="Body Wash">Body Wash</option>
            <option value="Bath Oil">Bath Oil</option>
          </select>
        </div>
        <button
          className="tw-text-white tw-w-[7rem] tw-ml-4 tw-mt-4 tw-bg-blue-700 hover:tw-bg-blue-800  focus:tw-outline-none focus:tw-ring-blue-300 tw-font-medium tw-rounded-lg tw-text-sm"
          onClick={handleFilter}
          >
          Apply Filter
          </button>
      </div>
    </div>
  );
}

export default search;
