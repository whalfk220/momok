import {Auth} from "../model/auth.js"

/**
 * 회원가입 라우터
 * @param {*} req 
 * @param {*} res 
 */
const handler = async (req, res) => {
  if (req.method === 'POST') {
    const auth = new Auth();
    const params = req.body;
    const result = await auth.join(params);
    res.status(result.status).json(result);
  }else{
    res.status(400).json({ err: 'method eror' })  
  }
}

export default handler