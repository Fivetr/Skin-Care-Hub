import React from "react";
import { useNavigate } from "react-router-dom";

function productCard({ id, product_name, image_url }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/search/${id}`);
  };
  return (
    <div
      onClick={() => handleClick(id)}
      className="tw-p-10 tw-cursor-pointer hover:tw-ring-2 hover:tw-ring-gray-400 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow tw-w-[24rem] tw-h-[20rem] tw-flex-col tw-flex tw-gap-2 tw-justify-center tw-items-center"
    >
      <h2 className="tw-mb-2 tw-text-[1.34rem] tw-font-bold tw-tracking-tight tw-text-gray-900">
        {product_name}
      </h2>
      <img src={image_url} className="tw-w-[10rem] tw-h-[10rem]" />
    </div>
  );
}

export default productCard;
