import express from "express";
import Transaction from '../db/transactions.js';

const router = express.Router();

router.post("/", async(req, res) => {
    console.log("Called")
    console.log(req.body.orderID)
});

export default router;