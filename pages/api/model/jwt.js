import jwt from "jsonwebtoken";
import {secretKey,option} from "../config/secretKey";

export class Jwt{
  constructor(){}

  /**
   * jwt 토큰 생성
   * @param {*} idx 
   * @param {*} email 
   * @returns 
   */
  async tokenSign(idx,email){
    const data = {
      idx : idx,
      email : email
    }
    const token = jwt.sign(data,secretKey,option);
    return token;
  }

  /**
   * 리플래시 토큰 발급(추후 수정 예정)
   * @returns 
   */
  async refreshTokenSing(){
    const refresh = jwt.sign({},secretKey,{
      expiresIn: '14d',
      issuer: 'slim9'
    })
    return refresh;
  }

  /**
   * jwt 토큰 디코드
   * @param {*} token 
   * @returns 
   */
  async getUserInfo(token){
    const info = jwt.decode(token,secretKey);
    return info;
  }


  /**
   * Jwt 토큰 검증
   * @param {*} token 
   * @returns 
   */
  async verify(token){
    let verifyToken;
    try{
      verifyToken = jwt.verify(token,secretKey);
    }catch(err){
      return err.message;
      // if (err.message === 'jwt expired') {
      //   //토큰 만료
      //     return ;
      // } else if (err.message === 'invalid token') {
      //     //유효하지 않은 토큰
      //     return 2;
      // } else {
      //     //유효하지 않은 토큰
      //     return 2;
      // }
    }
    return {verifyToken};
  }
}