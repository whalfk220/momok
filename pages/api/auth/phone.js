const { Auth } = require("../model/auth");

const handler = async (req,res)=>{
  if (req.method === 'POST') {
    const auth = new Auth();
    const {phone} = req.body;
    const result = await auth.duplicateCheck(phone);
    res.status(result.status).json(result);
  }else{
    res.status(400).json({ err: 'method eror' })  
  }
}

export default handler;