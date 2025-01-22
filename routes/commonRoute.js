import express from "express";
import { getCartData } from "../services/cartService.js";

const router = express.Router()

router.get('/', async(req,res) =>{
    const {cartData,cartCount } = await getCartData(req)
    res.render('index',{cartData,cartCount })
})

router.get('/about-us', async(req,res) =>{
    const {cartData,cartCount } = await getCartData(req)
    res.render('about-us',{cartData,cartCount})
});

router.get('/contact-us', async(req,res) =>{
    const {cartData,cartCount } = await getCartData(req)
    res.render('contact-us', {cartData,cartCount })
});
 
router.get('/how-it-works', async(req,res) =>{
    const {cartData,cartCount } = await getCartData(req)
    res.render('how-it-works',{cartData,cartCount })
})
 

export default router