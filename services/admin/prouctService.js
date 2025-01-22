import connect from "../../db/connect.js";
export const getAllProduct = async (req,res) =>{
    try{
      const [productData] = await connect.execute("SELECT * FROM products");
      return productData;
    }catch(e){
        console.log(e)
    }
}

