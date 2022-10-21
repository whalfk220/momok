
import {Encryption} from "./encryption.js"
import {pool} from "../config/db.js"
import { Jwt } from "./jwt.js";
export class Auth{
  constructor(){}


  /**
   * 회원가입 모델
   * @param {*} params 
   * @returns 
   */
  async join(params){
    let res = {
      errMsg : "",
      success:true,
      status:200,
      insertId:0
    }
    const encry = new Encryption();
    const {hasedPassword,salt} = await encry.createHashPassword(params.pass);
    try{
      const sql = "insert into users (email,name,phone,password,salt) values (?,?,?,?,?);";
      const param =[params.email,params.name,params.phone,hasedPassword,salt];
      const result = await pool.query(sql,param);
      if(!result[0].insertId){
        res.errMsg = "회원가입 실패";
        res.success = false;
      }else{
        res.insertId = result[0].insertId;
      }
    }catch(err){
      res.errMsg = err;
      res.success = false;
      res.status = 400
    }
    return res;
  }

  /**
   * 로그인 모델
   * @param {*} params 
   * @returns 
   */
  async login(params){
    const encry = new Encryption();
    const jwt = new Jwt();
    let res = {
      errMsg : "",
      success:true,
      status:200,
      result:{
        info:{}
      }
    }
    try{
      const sql = "select u.idx ,u.email ,u.password ,u.salt  from users u where u.email = ?";
      const [rows, fields] = await pool.query(sql,[params.email]);
      if(rows.length){
        const passVaild = await encry.checkPassword(params.pass,rows[0].salt,rows[0].password);
        if(passVaild){
          const refresh = await jwt.refreshTokenSing();
          const access = await jwt.tokenSign(rows[0].idx,rows[0].email);

          const usql = "update users set access_token = ? , refresh_token = ? where idx = ?";
          const uresult = await pool.query(usql,[access,refresh,rows[0].idx])
          if(uresult){
            res.result.info = {
              idx : rows[0].idx,
              email : rows[0].email,
              access_token : access,
              refresh_token : refresh
            }
          }else{
            res.errMsg = "토큰 없데이트 실패";
            res.success = false;
          }
        }else{
          res.errMsg = "패스워드가 틀렸습니다.";
          res.success = false;
        }
      }else{
        res.errMsg = "아이디가 없습니다.";
        res.success = false;
      }
    }catch(err){
      res.errMsg = err;
      res.success = false;
      res.status = 400
    }
    return res;
  }

  /**
   * 핸드폰 중복 검사
   * @param {*} phone 
   * @returns 
   */
  async duplicateCheck(phone){
    let res = {
      errMsg : "",
      success : true,
      isDupliate:false,
      status : 200
    }
    try{
      const sql = "select count(*) as cnt from users u where u.phone = ?";
      const [rows,fields] = await pool.query(sql,[phone]);
      // console.log(rows);
      if(rows.length){
        if(rows[0].cnt > 0){
          res.isDupliate = true;
        }
      }
    }catch(err){
      res.errMsg = err;
      res.success = false;
      res.status = 400;
    }
    return res;

  }


  /**
   * 맵기,연속음식,한끼 식사 가격 업데이트
   * @param {*} params 
   */
  async otherInfoUpdate(params){
    let res = {
      errMsg : "",
      success : true,
      status : 200
    }
    try{
      const sql = "UPDATE momok.users SET spicy=?, continuity=?, price=? WHERE idx=?;";
      const result = await pool.query(sql,[params.spicy,params.continuity,params.price,params.userIdx]);
      if(!result){
        res.success = false;
      }
    }catch(err){
      res.errMsg = err;
      res.success = false;
      res.status = 400;
    }
    return res;
  }


  /**
   * 유저 정보 조회
   * @param {*} idx 
   * @returns 
   */
  async findUser(idx){
    let res = {
      errMsg : "",
      success : true,
      result : {},
      status : 200
    }
    try{
      const sql = `select u.idx,u.name ,u.phone ,u.email ,u.spicy ,u.continuity ,u.price,u.egg   from users u where idx = ?;`;
      const [rows,fields] = await pool.query(sql,[idx]);
      if(rows.length){
        res.result = rows[0];
      }
    }catch(err){
      res.errMsg = err;
      res.success = false;
      res.status = 400;
    }
    return res;
  }
}