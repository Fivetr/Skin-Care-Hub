import express from "express";
import { GetAllProducts } from "../db/products.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  let products = await GetAllProducts();
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  shuffleArray(products);

  return res.status(200).json(products);
});

router.post("/products", () => {});
export default router;
