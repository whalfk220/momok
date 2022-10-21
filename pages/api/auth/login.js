import {Auth} from "../model/auth.js";



async function handler(req, res) {

  if (req.method === 'POST') {
    const auth = new Auth();
    const params = req.body;
    const result = await auth.login(params);
    res.status(result.status).json(result);
  }else{
    res.status(400).json({ err: 'method eror' })  
  }
}

// export default withMiddleware("tokenVerify")(handler);
export default handler;
