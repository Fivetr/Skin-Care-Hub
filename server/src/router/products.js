import express from "express";
import { GetAllProducts } from "../db/products.js";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req.query);
  const userInput = req.query.userInput || '';
  const minPrice = parseFloat(req.query.minPrice) || 0;
  const maxPrice = parseFloat(req.query.maxPrice) || Infinity;
  const type = req.query.type || '';
  console.log(userInput);
  console.log(minPrice);
  console.log(maxPrice);
  console.log(type);

  let products = await GetAllProducts();
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  shuffleArray(products);

  let filteredProducts = products
  if(userInput) {
    filteredProducts = filteredProducts.filter((product) => {
      return (
        product.product_name.toLowerCase().includes(userInput.toLowerCase()) ||
        product.product_type.toLowerCase().includes(userInput.toLowerCase()) ||
        product.clean_ingreds
          .map((item) => item.toLowerCase())
          .includes(userInput.toLowerCase())
      );
    });
  }

  if(minPrice > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      return (
        product.price >= minPrice
      );
    });
  }

  if(maxPrice < Infinity) {
    filteredProducts = filteredProducts.filter((product) => {
      return (
        product.price <= maxPrice
      );
    });
  }

  if(type && type != 'Category') {
    filteredProducts = filteredProducts.filter((product) => {
      return (
        product.product_type.toLowerCase() === type.toLowerCase()
      );
    });
  }
  return res.status(200).json(filteredProducts);
});

// router.get("/categories", async (req, res) => {
//   try {
//     let products = await GetAllProducts();
//     const categories = [...new Set(products.map((product) => product.product_type))];
//     res.status(200).json(categories);
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

router.post("/", () => { });
export default router;
