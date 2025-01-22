import express from "express";
import { disByCategory, viewProduct ,viewProductDetail } from "../controllers/prodController.js";
 
const router = express.Router();

router.get('/collection/:cat_slug',disByCategory)
router.get('/product', viewProduct);
router.get('/product-detail/:p_seo/:product_id', viewProductDetail);
 

export default router