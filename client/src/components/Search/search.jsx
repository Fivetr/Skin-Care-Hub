import React from "react";

function search({ setSearchInput, handleFilterChange }) {
  return (
    <div className="tw-p-6 tw-mt-5 tw-max-w-5xl tw-mx-auto  tw-h-[10rem]">
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
    
    </div>
  );
}

export default search;
