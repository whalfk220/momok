import { Auth } from "../model/auth";

const handler = async (req,res) => {
  if(req.method === "PUT"){
    // console.log(req.body);
    const params = req.body;
    const auth = new Auth();
    const result = await auth.otherInfoUpdate(params);
    // console.log(params);
    res.status(result.status).json(result)  
  }else{
    res.status(400).json({ err: 'method eror' })  
  }
}

export default handler;