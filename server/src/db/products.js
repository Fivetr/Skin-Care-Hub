import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_name: String,
  product_type: String,
  clean_ingreds: [String],
  price: Number,
  image_url: String,
});

const productModel = mongoose.model("products", productSchema);

export const GetAllProducts = async () => {
  try {
    const users = await productModel.find({});
    return users;
  } catch (error) {
    console.error(error);
  }
};
