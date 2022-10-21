import { withMiddleware } from "../middleware/verify";
import { Common } from "../model/common";

const handler = async(req,res) =>{
  const {idx} = req.user;
  const common = new Common();
  if(req.method === "GET"){
    const result = await common.getEgg(idx);
    res.status(result.status).json(result)  
  }else{
    res.status(400).json({ err: 'method eror' }) 
  }
}

export default withMiddleware("tokenVerify")(handler);