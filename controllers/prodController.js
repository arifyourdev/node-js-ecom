import connect from "../db/connect.js"
import { getAllCategory } from "../services/admin/catService.js";
import { getAllProduct } from "../services/admin/prouctService.js"
import { getCartData } from "../services/cartService.js";
import { getWishlistData } from "../services/wishlistService.js";

export const disByCategory = async (req, res) => {
    try {
        const { cat_slug } = req.params;
        const [allCategories] = await connect.execute(`
            SELECT c.*, 
                   COUNT(p.id) AS product_count
            FROM category c
            LEFT JOIN products p ON c.id = p.cat_id
            WHERE c.is_accessories != 0
            GROUP BY c.id
            HAVING product_count > 0
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

        const { cartData, cartCount } = await getCartData(req);

        res.render("collection", {
            prodData,
            cartData,
            cartCount,
            catData: allCategories, // Filtered categories with non-zero product counts
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
       const {cartData,cartCount } = await getCartData(req);
       const {whislistData, wishlistCount} = await getWishlistData(req)
       res.render('product', {prodData,cartData,cartCount,catData,whislistData, wishlistCount});
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
        const catData = await getAllCategory()
        res.render('product-detail', { 
            proDetailData: proDetailData[0],
            sizes:sizeData,
            proImages:proImages,
            cartData,cartCount,
            catData,
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
    const [newArrivalData] = await connect.execute('Select * from products Where new_arrival = "yes"');
    res.render('index',{newArrivalData,cartData,cartCount,catData})
}
 