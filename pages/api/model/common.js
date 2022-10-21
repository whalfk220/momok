import { pool } from "../config/db";

export class Common{
  constructor(){}


  async getEgg(idx){
    let res = {
      errMsg : "",
      success:true,
      result:{
        egg :0
      },
      insertId:0,
      status : 200
    }

    try{
      const sql = "SELECT egg  from users u where u.idx = ?";
      const [rows, fields] = await pool.query(sql,[idx]);
      // console.log(rows);
      if(rows.length){
        res.result.egg = rows[0].egg;
      }
    }catch(err){
      res.errMsg = err;
      res.status = 400;
      res.success = false;
    }
    return res;
  }
}