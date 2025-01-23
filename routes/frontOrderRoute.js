import express from 'express';
import { displayOrderSuccess, displayUserOrders ,returnOrder } from '../controllers/orderController.js';
 
 

const router = express.Router();

router.get('/user-orders', displayOrderSuccess);
router.get('/user-order-detail/:order_id', displayUserOrders);

router.post('/return-submit', returnOrder);

export default router;
