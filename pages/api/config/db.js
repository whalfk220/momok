import dotenv from "dotenv";
dotenv.config();
import * as mysql from "mysql2";
const pool = mysql.createPool({
  host : process.env.DB_HOST,
  port:process.env.DB_PORT,
  password:process.env.DB_PASS,
  user : process.env.DB_USER,
  database :process.env.DB_MOMOK,
  dateStrings: "date",
}).promise();

export { pool }