import connect from "../db/connect.js"
import { getAllCategory } from "../services/admin/catService.js";
import { getAllProduct } from "../services/admin/prouctService.js"
import { getCartData } from "../services/cartService.js";

export const disByCategory = async (req,res) =>{
    try{
        const {cat_slug} = req.params;
        res.render('collection',{cat_slug})
    }catch(e){
        console.log(e)
    }
}

export const viewProduct = async (req,res) =>{
    try{
       const prodData = await getAllProduct();
       const catData = await getAllCategory();
       const {cartData,cartCount } = await getCartData(req)
       res.render('product', {prodData,cartData,cartCount,catData})
    }catch(e){
        console.log(e)
    }
}

export const viewProductDetail = async (req, res, next) => {
    try {
        const { product_id, p_seo } = req.params; 
        if (!product_id || !p_seo) {
            return res.status(400).send("Invalid product ID or URL.");
        }
        const [proDetailData] = await connect.execute(
            "SELECT * FROM products WHERE id = ? AND p_url = ?", 
            [product_id, p_seo]
        );
        const [sizeData] = await connect.execute("Select * from p_size Where product_id = ?",[proDetailData[0].id]);
        const [proImages] = await connect.execute("Select * from pro_images Where product_id = ?",[proDetailData[0].id])
        if (!proDetailData.length) {
            return res.status(404).send("Product not found.");
        }
        const {cartData,cartCount } = await getCartData(req);
        const catData = await getAllCategory()
        res.render('product-detail', { 
            proDetailData: proDetailData[0],
            sizes:sizeData,
            proImages:proImages,
            cartData,cartCount,
            catData
        });
    } catch (e) {
        console.error("Error fetching product details:", e);
        return res.status(500).send("Internal Server Error");
    }
};

