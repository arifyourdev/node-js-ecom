import express from "express";
import { getCartData } from "../services/cartService.js";
import { getAllCategory } from "../services/admin/catService.js";
import { newArrival } from "../controllers/prodController.js";
import { getWishlistData } from "../services/wishlistService.js";
const router = express.Router()

router.get('/', newArrival, async(req,res) =>{
    const {cartData,cartCount } = await getCartData(req);
    const {whislistData, wishlistCount} = await getWishlistData(req)
    const catData = await getAllCategory();
    res.render('index',{cartData,cartCount,catData,whislistData, wishlistCount})
})

router.get('/about-us', async(req,res) =>{
    const {cartData,cartCount } = await getCartData(req);
    const {whislistData, wishlistCount} = await getWishlistData(req)
    const catData = await getAllCategory()
    res.render('about-us',{cartData,cartCount,catData,whislistData, wishlistCount})
});

router.get('/contact-us', async(req,res) =>{
    const {cartData,cartCount } = await getCartData(req);
    const {whislistData, wishlistCount} = await getWishlistData(req)
    const catData = await getAllCategory()
    res.render('contact-us', {cartData,cartCount,catData,whislistData, wishlistCount})
});
 
router.get('/term-condition', async(req,res) =>{
    const {cartData,cartCount } = await getCartData(req)
    const {whislistData, wishlistCount} = await getWishlistData(req)
    const catData = await getAllCategory()
    res.render('term-condition',{cartData,cartCount,catData ,whislistData, wishlistCount})
})

router.get('/privacy-policy', async(req,res) =>{
    const {cartData,cartCount } = await getCartData(req)
    const {whislistData, wishlistCount} = await getWishlistData(req)
    const catData = await getAllCategory()
    res.render('privacy-policy',{cartData,cartCount,catData,whislistData, wishlistCount})
})

router.get('/user-guideline', async(req,res) =>{
    const {cartData,cartCount } = await getCartData(req)
    const {whislistData, wishlistCount} = await getWishlistData(req)
    const catData = await getAllCategory()
    res.render('user-guideline',{cartData,cartCount,catData ,whislistData, wishlistCount})
})
router.get('/cookie-policy', async(req,res) =>{
    const {cartData,cartCount } = await getCartData(req)
    const {whislistData, wishlistCount} = await getWishlistData(req)
    const catData = await getAllCategory()
    res.render('cookie-policy',{cartData,cartCount,catData ,whislistData, wishlistCount})
})
 
router.get('/refund-policy', async(req,res) =>{
    const {cartData,cartCount } = await getCartData(req)
    const {whislistData, wishlistCount} = await getWishlistData(req)
    const catData = await getAllCategory()
    res.render('refund-policy',{cartData,cartCount,catData,whislistData, wishlistCount})
})

export default router