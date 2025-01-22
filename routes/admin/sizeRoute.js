import express from "express";
import { addSize, displaySize } from "../../controllers/admin/sizeController.js";

const router = express.Router();

 router.get('/size-list', displaySize);
 router.get('/add-size', (req,res) =>[
    res.render('admin/add-size')
 ])

 router.post('/add-size', addSize);

export default router