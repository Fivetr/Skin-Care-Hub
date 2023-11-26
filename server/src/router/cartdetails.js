import express from "express";
import Cart from '../db/cart.js';

const router = express.Router();

router.get("/mycart", async (req, res) => {

});

router.post("/add", async(req, res) => {
    // console.log(req.body.user.user._id)
    const user = req.body.user.user._id;
    const item = req.body.product;

    // console.log(user)
    const cart = await Cart.findOne({ userId: user })
    .then((cart) => {
        if(cart){
            const index = cart.items.findIndex((prod) => prod._id == item._id);
            if(index > -1){
                cart.quantity = cart.quantity + 1;
            }else{
                cart.items.push(item);
            }
            // console.log(index);
            
            cart.save().then(() => res.end());
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