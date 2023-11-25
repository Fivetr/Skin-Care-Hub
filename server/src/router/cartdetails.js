import express from "express";
import Cart from '../db/cart.js';

const router = express.Router();

router.get("/mycart", async (req, res) => {

});

router.post("/add", async(req, res) => {
    // console.log(req.body.user.user._id)
    const user = req.body.user.user._id;
    const item = req.body.product;
    const cart = await Cart.findOne({ user: user })
    .then((cart) => {
        if(cart){
            cart.items.push(item);
            cart.save.then(() => res.end());
        } else{
            Cart.create({
                userId: user,
                items: [item],
                quantity: req.body.quantity
            })
            .then(() => res.end());
        }
        
    });
    return cart;
    
});

export default router;