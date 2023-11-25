import express from "express";
import { GetAllProducts, getProductById } from "../db/products.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  const userInput = req.query.userInput;
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

  if (userInput) {
    const filteredProducts = products.filter((product) => {
      return (
        product.product_name.toLowerCase().includes(userInput.toLowerCase()) ||
        product.product_type.toLowerCase().includes(userInput.toLowerCase()) ||
        product.clean_ingreds
          .map((item) => item.toLowerCase())
          .includes(userInput.toLowerCase())
      );
    });
    return res.status(200).json(filteredProducts);
  }
  return res.status(200).json(products);
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

router.post("/products", () => {});

router.get("/:id", async (req, res) => {
  let product = await getProductById(req.params.id);
  return res.status(200).json(product);
})
export default router;
