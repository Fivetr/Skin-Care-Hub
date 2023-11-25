import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function NewProductPage() {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [ingredient, setIngredient] = useState("");
  const [ingredientsList, setIngredientsList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleAddIngredient = () => {
    if (ingredient.trim() !== "") {
      if (ingredientsList.length < 10) {
        setIngredientsList([...ingredientsList, ingredient]);
        setIngredient("");
        setErrorMessage("");
      } else {
        setErrorMessage("Maximum 10 ingredients can be added");
      }
    }
  };

  const handleDeleteIngredient = (index) => {
    const updatedList = ingredientsList.filter((_, i) => i !== index);
    setIngredientsList(updatedList);
    setIngredient("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = {
        product_name: name,
        product_type: type,
        clean_ingreds: ingredientsList,
        price: price,
        image_url: image,
      };
      const response = await fetch("/api/products", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      console.log(response);
      if (response.ok) {
        toast.success("Added product successfully");
        navigate("/search");
      } else {
        console.error("Could not add product");
      }
    } catch (e) {
      console.error("Error in adding product", e);
    }
  };
  return (
    <>
      <Header />
      <main
        className="tw-h-[calc(100vh-3.5rem)] tw-h-screen tw-flex tw-flex-col tw-justify-center tw-items-center"
        style={{ textAlign: "center" }}
      >
        <h2 className="tw-mt-4 tw-text-3xl tw-font-semibold tw-text-gray-800 tw-pb-2">
          Add Product
        </h2>
        <form
          onSubmit={handleSubmit}
          className="tw-w-full tw-max-w-md tw-bg-white tw-rounded tw-px-8 tw-pt-6 tw-pb-8"
        >
          <div className="tw-mb-3">
            <input
              type="text"
              id="product-name"
              className="tw-gray-90 tw-w-[10rem] tw-mr-5 tw-mt-4 tw-border tw-border-gray-300 tw-bg-gray-50 hover:tw-bg-gray-80 tw-font-medium tw-rounded-lg tw-text-sm tw-px-2 tw-py-2"
              placeholder="Product name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <select
              class="tw-gray-90 tw-w-[7rem] tw-mt-4 tw-border tw-border-gray-300 tw-bg-gray-50 hover:tw-bg-gray-80 tw-font-medium tw-rounded-lg tw-text-sm tw-px-2 tw-py-2"
              onChange={(e) => setType(e.target.value)}
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
          <div className="tw-mb-3">
            <input
              type="text"
              id="price"
              className="tw-gray-90 tw-w-[17rem] tw-mr-3 tw-mt-4 tw-border tw-border-gray-300 tw-bg-gray-50 hover:tw-bg-gray-80 tw-font-medium tw-rounded-lg tw-text-sm tw-px-2 tw-py-2"
              placeholder="Product price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="tw-mb-3">
            <input
              type="text"
              id="image"
              className="tw-gray-90 tw-w-[17rem] tw-mr-3 tw-mt-4 tw-border tw-border-gray-300 tw-bg-gray-50 hover:tw-bg-gray-80 tw-font-medium tw-rounded-lg tw-text-sm tw-px-2 tw-py-2"
              placeholder="Product image url"
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="tw-mb-3">
            <input
              type="text"
              id="image"
              className="tw-gray-90 tw-w-[17rem] tw-mr-3 tw-mt-4 tw-border tw-border-gray-300 tw-bg-gray-50 hover:tw-bg-gray-80 tw-font-medium tw-rounded-lg tw-text-sm tw-px-2 tw-py-2"
              placeholder="Add ingredient"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            />
            <button
              className="tw-flex-shrink-0 tw-bg-teal-500 hover:tw-bg-teal-700 tw-border-teal-500 hover:tw-border-teal-700 tw-text-sm tw-border-4 tw-text-white tw-py-1 tw-px-2 tw-rounded-lg"
              type="button"
              onClick={handleAddIngredient}
            >
              Add
            </button>
          </div>
          <div className="mt-4">
            {ingredientsList.map((item, index) => (
              <span
                key={index}
                className="tw-inline-block tw-bg-gray-200 tw-rounded-full tw-px-3 tw-py-1 tw-text-sm tw-font-semibold tw-text-gray-700 tw-mr-2 tw-mb-2"
              >
                {item}
                <button
                  className="tw-ml-2 tw-text-white-500 hover:tw-text-white-700 focus:tw-outline-none"
                  onClick={() => handleDeleteIngredient(index)}
                >
                  &#x2715;
                </button>
              </span>
            ))}
          </div>
          {errorMessage && (
            <p className="tw-text-red-500 tw-mt-2 tw-text-sm">{errorMessage}</p>
          )}
          <button
            className="tw-flex-shrink-0 tw-bg-blue-500 tw-mb-3 tw-mt-4 hover:tw-bg-blue-700 tw-border-blue-500 hover:tw-border-blue-700 tw-text-sm tw-border-4 tw-text-white tw-py-1 tw-px-2 tw-rounded-lg"
            type="button"
            onClick={handleSubmit}
          >
            Add Product
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default NewProductPage;
