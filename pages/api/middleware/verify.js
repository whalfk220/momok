import { label, Middleware } from "next-api-middleware";
import { Jwt } from "../model/jwt.js";

const tokenVerify = async (req, res, next) => {
  const jwt = new Jwt();
  if (req.headers.authorization) {
    const token = req.headers.authorization.split('Bearer ')[1]; // header에서 access token을 가져옵니다.
    const result = await jwt.verify(token) // token을 검증합니다.
    if (result.verifyToken !== undefined) { // token이 검증되었으면 req에 값을 세팅하고, 다음 콜백함수로 갑니다.
      // req.user = result.verifyToken;
      const info = await jwt.getUserInfo(token);
      req.user = info;
      next();
    } else { // 검증에 실패하거나 토큰이 만료되었다면 클라이언트에게 메세지를 담아서 응답합니다.
      res.status(401).send({
        success: false,
        message: "jwt expired", // jwt가 만료되었다면 메세지는 'jwt expired'입니다.
      });
    }
  }else{
    res.status(400).send({
      success: false,
      message: "not found jwt",
    });
  }
};

export const withMiddleware = label(
  {
    tokenVerify,
  }
);