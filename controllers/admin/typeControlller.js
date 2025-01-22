import connect from "../../db/connect.js";
import { disAllType } from "../../services/admin/typeService.js";

export const displayType = async (req,res) =>{
    try{
      const typeData = await disAllType();
      res.render('admin/type-list',{typeData:typeData})
    }catch(e){
        console.log(e)
    }
}

export const addType = async(req,res) =>{
  try{
     const {i_type, status} = req.body;
     await connect.execute("INSERT INTO inventory_type (i_type,status, created_at) VALUES (?, ?, NOW())",[i_type,status]);
     res.redirect('/admin/type-list')
  }catch(e){
    console.log(e)
  }
}