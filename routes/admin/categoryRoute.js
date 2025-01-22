import express from "express";
import { disCategory ,addCategory} from "../../controllers/admin/categoryController.js";
const router = express.Router();

router.get('/category-list', disCategory);

router.get('/add-category',(req,res) =>{
    res.render('admin/add-category')
})
router.post('/add-category',addCategory)

export default router