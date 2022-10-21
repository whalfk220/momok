import crypto from "crypto";
import util from "util";

export class Encryption{

  constructor(){
    this.randomBytesPromise = util.promisify(crypto.randomBytes);
    this.pbkdf2Promise = util.promisify(crypto.pbkdf2);
  }

  /**
   * 솔트값 생성
   * @returns salt
   */
  async createRandomSalt(){
    const buf = await this.randomBytesPromise(64);

    return buf.toString("base64");
  }

  /**
   * 암호화된 패스워드 생성
   * @param {*} password 유저 입력 패스워드
   * @returns hashapssword , salt
   */
  async createHashPassword (password){
    const salt = await this.createRandomSalt();
    const key = await this.pbkdf2Promise(password,salt,104906,64,"sha512");
    const hasedPassword = key.toString("base64");
    return {hasedPassword,salt}
  }

    /**
   * 패스워드 검증
   * @param {*} pass 유저 입력 패스워드
   * @param {*} userSalt db에 저장된 솔트값
   * @param {*} userPass db에 저장된 패스워드 값
   * @returns 
   */
  async checkPassword(pass,userSalt,userPass){
    const key = await this.pbkdf2Promise(pass,userSalt,104906,64,"sha512");
    const hasedPassword = key.toString("base64");
    if(hasedPassword === userPass){
      return true;
    }else{
      return false;
    }
  }
}