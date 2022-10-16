import { Injectable,UnauthorizedException,BadRequestException} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/model/userModel';
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private UserModel:typeof User){}

  async userSignup(UserRequest): Promise<any> {
    const {nik,firstName,lastName,password,phone,email,birthDate,address} = UserRequest
    console.log(nik);
    const userByEmail = await this.findUserByEmail(email)
    if (userByEmail){throw new BadRequestException("Email sudah digunakan. Mohon gunakan email lainnya")}
    const userByNik = await this.findUserByNik(nik)
    if (userByNik){throw new BadRequestException("No KTP sudah digunakan. Mohon gunakan No KTP lainnya")}
    const hashedPassword = await bcrypt.hash(password,await bcrypt.genSalt(10))
    const newUser = await this.UserModel.create({
      nik,
      firstName,
      lastName,
      password:hashedPassword,
      phone,
      email,
      birthDate,
      address
    })
    return {url:"http://127.0.0.1:5500/signin.html"}
  }
  async userSignin(UserLoginRequest): Promise<any> {
    const {email,password} = UserLoginRequest
    const user = await this.findUserByEmail(email)
    if (user && await bcrypt.compare(password,user.password)){
      return {url:"http://127.0.0.1:5500/clinic.html"}
    }else throw new UnauthorizedException("cek kembali email atau password anda")

  }


  async findUserByEmail(email){
    return await this.UserModel.findOne({
      where:{
        email
      }
    })
  }

  async findUserByNik(nik){
    return await this.UserModel.findOne({
      where:{
        nik
      }
    })
  }

  
    








}
