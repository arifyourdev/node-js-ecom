import connect from "../../db/connect.js";
import { disAllSizes } from "../../services/admin/sizeServices.js";
 

export const displaySize = async (req,res) =>{
    try{
      const sizeData = await disAllSizes();
      res.render('admin/size-list',{sizeData:sizeData})
    }catch(e){
        console.log(e)
    }
}

export const addSize = async (req, res) => {
  try {
    const { size_name, quantity, status } = req.body;
    
    console.log('Received data:', size_name, quantity, status);  // Log the input values
    
    // Check if any of the values are undefined or null
    if (size_name === undefined || quantity === undefined || status === undefined) {
      return res.status(400).send('Missing required fields');
    }

    await connect.execute(
      "INSERT INTO size (size_name, quantity, status, created_at) VALUES (?, ?, ?, NOW())",
      [size_name, quantity, status]
    );
    
    res.redirect('/admin/size-list');
  } catch (e) {
    console.log(e);
    res.status(500).send('Error inserting data');
  }
};
