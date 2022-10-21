import { withMiddleware } from "../middleware/verify"
import { Review } from "../model/review";

const handler = async(req,res)=>{
  const {idx} = req.user;
  if(req.method === "POST"){
    console.log(idx);
    const params = req.body;
    const review = new Review();
    const result = await review.addGrade(idx,params);
    res.status(result.status).json(result)
  }else{
    res.status(400).json({ err: 'method eror' })  
  }
}

export default withMiddleware("tokenVerify")(handler);