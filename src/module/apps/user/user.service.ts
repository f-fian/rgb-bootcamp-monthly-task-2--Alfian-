import { Injectable,UnauthorizedException,BadRequestException} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/model/userModel';
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private UserModel:typeof User){}

  async userSignup(UserRequest): Promise<any> {
    
  }

  async userSignin(UserRequest): Promise<any> {
    
  }


  async findUserByEmail(email){
    return await this.UserModel.findOne({
      where:{
        email
      }
    })
  }
    








}
