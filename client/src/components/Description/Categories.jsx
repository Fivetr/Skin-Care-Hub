import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    image: "/Images/00001Image.jpg",
    title: "Moisturiser",
    to: "/search",
  },
  {
    image: "/Images/00008Image.jpg",
    title: "Serum",
    to: "/search",
  },
  {
    image: "/Images/00009Image.jpg",
    title: "Oil",
    to: "/search",
  },
  {
    image: "/Images/00007Image.jpg",
    title: "Mist",
    to: "/search",
  },
  {
    image: "/Images/00006Image.jpg",
    title: "Balm",
    to: "/search",
  },
  {
    image: "/Images/00005Image.jpg",
    title: "Mask",
    to: "/search",
  },
  {
    image: "/Images/00004Image.jpg",
    title: "Peel",
    to: "/search",
  },
  {
    image: "/Images/00003Image.jpg",
    title: "Eye Care",
    to: "/search",
  },
  {
    image: "/Images/00002Image.jpg",
    title: "Cleanser",
    to: "/search",
  },
  {
    image: "/Images/00014Image.jpg",
    title: "Toner",
    to: "/search",
  },
  {
    image: "/Images/00013Image.jpg",
    title: "Exfoliator",
    to: "/search",
  },
  {
    image: "/Images/00012Image.jpg",
    title: "Bath Salts",
    to: "/search",
  },
  {
    image: "/Images/00011Image.jpg",
    title: "Body Wash",
    to: "/search",
  },
  {
    image: "/Images/00010Image.jpg",
    title: "Bath Oil",
    to: "/search",
  },
];

const CategoryTile = ({ image, title, to }) => {
  return (
    <div className="tw-w-40 tw-h-40 tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-white tw-rounded-lg tw-shadow-md">
      <Link to={to} className="tw-text-gray-600 hover:tw-text-green-500 tw-no-underline ">
        <img
            src={image}
            alt={title}
            className="tw-w-full tw-h-24 tw-object-cover tw-rounded-t-lg"
        />
        <h3 className="tw-text-base tw-font-semibold tw-text-center mt-4">{title}</h3>
    </Link>
    </div>
  );
};

const Categories = () => {
    return (
      <div className="tw-bg-red-300 tw-py-12 tw-px-4">
        <h2 className="tw-text-2xl tw-font-bold tw-text-center tw-mb-8">Explore Categories</h2>
        <div className="tw-flex tw-flex-wrap-reverse tw-justify-center tw-gap-4">
          {categories.map((category, index) => {
            if (index % 14 === 0) {
              return (
                <div className="tw-w-full tw-flex tw-flex-wrap tw-justify-center tw-gap-4 tw-mb-4">
                  <CategoryTile key={category.title} {...category} />
                </div>
              );
            } else {
              return <CategoryTile key={category.title} {...category} />;
            }
          })}
        </div>
      </div>
    );  
};

export default Categories;
