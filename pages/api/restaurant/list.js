import { withMiddleware } from "../middleware/verify"
import { Restaurant } from "../model/restaurant";

const handler = async(req,res)=>{
  // console.log("card");
  const {idx} = req.user;
  console.log(idx);
  const restaurant = new Restaurant();
  if(req.method === "GET"){
    const result = await restaurant.getFoodCard(idx);
    res.status(result.status).json(result)
  }else{
    res.status(400).json({ err: 'method eror' })  
  }
}


export default withMiddleware("tokenVerify")(handler);