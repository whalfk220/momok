import jwt from "jsonwebtoken";
import { Jwt } from "../model/jwt";

async function handler(req,res){
  if (req.method === 'POST') {
    if (req.headers.authorization && req.headers.refresh) {
      const authToken = req.headers.authorization.split('Bearer ')[1];
      const refreshToken = req.headers.refresh;
      const jwtUtil = new Jwt();
      const authResult = await jwtUtil.verify(authToken);
      const decoded = await jwtUtil.getUserInfo(authToken);
      if (decoded === null) {
        res.status(401).send({
          success: false,
          message: 'No authorized!',
        });
      }
      const refreshResult = await jwtUtil.verify(refreshToken);
      if(authResult.verifyToken === undefined){
        if(refreshResult.verifyToken === undefined){
          res.status(401).send({
            success: false,
            message: 'No authorized!',
          });
        }else{
          const newToken = await jwtUtil.tokenSign(decoded.idx,decoded.email);
          res.status(200).send({ // 새로 발급한 access token과 원래 있던 refresh token 모두 클라이언트에게 반환합니다.
            success: true,
            data: {
              accessToken: newToken,
              refreshToken,
            },
          });
        }
      }else{
        res.status(400).send({
          success: false,
          message: 'Acess token is not expired!',
        });
      }
    }else { // access token 또는 refresh token이 헤더에 없는 경우
      res.status(400).send({
        success: false,
        message: 'Access token and refresh token are need for refresh!',
      });
    }
  }

}

export default handler;