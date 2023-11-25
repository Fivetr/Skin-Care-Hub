import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    items: { type: Array, required: true, default: [] },
    quantity: { type: Number, required: true }
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;