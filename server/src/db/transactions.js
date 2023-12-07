import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    orderData: { type: Array, required: true, default: [] },
    date: { type: Date, default: Date.now }
});

const transactionModel = mongoose.model("transactions", transactionSchema);

export const getTransactionsByUser = async () => {
    try {
      const users = await transactionModel.find({});
      return users;
    } catch (error) {
      console.error(error);
    }
};