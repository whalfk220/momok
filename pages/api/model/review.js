

import {pool} from "../config/db.js"
export class Review{
  constructor(){}


  async addGrade(userIdx,params){
    let res = {
      errMsg : "",
      success:true,
      status:200,
      insertId:0
    }
    try{
      const sql = `INSERT INTO momok.restaurant_grade
      (grade, user_idx, restaurant_idx)
      VALUES(?, ?, ?)`;
      const param =[params.grade,userIdx,params.restaurantIdx];
      const result = await pool.query(sql,param);
      if(!result[0].insertId){
        res.errMsg = "등록 실패";
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
}