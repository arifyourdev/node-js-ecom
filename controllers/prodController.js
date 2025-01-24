import connect from "../db/connect.js"
import { getAllCategory, getAllTypeCategory } from "../services/admin/catService.js";
import { getAllProduct } from "../services/admin/prouctService.js"
import { disAllType } from "../services/admin/typeService.js";
import { getCartData } from "../services/cartService.js";
import { getWishlistData } from "../services/wishlistService.js";

export const disByCategory = async (req, res) => {
    try {
        const { cat_slug } = req.params;

        // Fetch all categories with their associated wear types
        const [allCategories] = await connect.execute(`
            SELECT c.*, 
                   COUNT(p.id) AS product_count,
                   t.i_type AS i_type,
                   t.id AS wear_type_id
            FROM category c
            LEFT JOIN products p ON c.id = p.cat_id
            LEFT JOIN inventory_type t ON c.wear_type_id = t.id
            GROUP BY c.id
        `);

        // Fetch the selected category details
        const [selectedCategory] = await connect.execute(
            "SELECT * FROM category WHERE cat_slug = ?",
            [cat_slug]
        );

        if (selectedCategory.length === 0) {
            return res.status(404).send("Category not found");
        }

        const cat_id = selectedCategory[0].id;

        // Fetch products for the selected category
        const [prodData] = await connect.execute(
            "SELECT * FROM products WHERE cat_id = ?",
            [cat_id]
        );

        // Fetch cart and type data
        const { cartData, cartCount } = await getCartData(req);
        const typeData = await getAllTypeCategory();

        // Render the template with all data
        res.render("collection", {
            prodData,
            cartData,
            cartCount,
            typeData, // List of all wear types
            catData: allCategories, // Categories including their wear types
            selectedCategory: selectedCategory[0],
        });
    } catch (e) {
        console.error("Error fetching product details:", e);
        return res.status(500).send("Internal Server Error");
    }
};


export const viewProduct = async (req,res) =>{
    try{
       const prodData = await getAllProduct();
       const catData = await getAllCategory();
       const typeData = await disAllType();
       const {cartData,cartCount } = await getCartData(req);
       const {whislistData, wishlistCount} = await getWishlistData(req)
       res.render('product', {prodData,cartData,cartCount,typeData,catData,whislistData, wishlistCount});
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

      // Fetch best seller products
        const [bestSellerData] = await connect.execute('SELECT * FROM products WHERE best_seller = "yes"');

        const [sizeData] = await connect.execute("Select * from p_size Where product_id = ?",[proDetailData[0].id]);
        const [proImages] = await connect.execute("Select * from pro_images Where product_id = ?",[proDetailData[0].id])
        if (!proDetailData.length) {
            return res.status(404).send("Product not found.");
        }
        // Cart & WishList Count
        const {cartData,cartCount } = await getCartData(req);
        const {whislistData, wishlistCount} = await getWishlistData(req)
        const catData = await getAllCategory();
        const typeData = await disAllType();
        res.render('product-detail', { 
            proDetailData: proDetailData[0],
            sizes:sizeData,
            proImages:proImages,
            cartData,cartCount,
            catData,
            typeData,
            bestSellerData,
            whislistData, 
            wishlistCount
        });
    } catch (e) {
        console.error("Error fetching product details:", e);
        return res.status(500).send("Internal Server Error");
    }
};

// New Arrival
export const newArrival = async (req,res) =>{
    const {cartData,cartCount } = await getCartData(req);
    const catData = await getAllCategory();
    const typeData = await disAllType();
    const [newArrivalData] = await connect.execute('Select * from products Where new_arrival = "yes"');
    res.render('index',{newArrivalData,cartData,cartCount,catData,typeData})
}
 