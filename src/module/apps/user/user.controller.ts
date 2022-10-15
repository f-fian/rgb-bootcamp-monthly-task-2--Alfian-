import { Controller,Post,Get,Body } from '@nestjs/common';
import { UserService } from './user.service';
import { AdminRequest } from 'src/request/admin.request';

@Controller("user")
export class UserController {
  constructor(private readonly UserService: UserService) {}


  @Post("Signup")
  adminSignup(@Body() AdminRequest:AdminRequest){
    return this.UserService.userSignup(AdminRequest)
  }

  @Post("Signin")
  adminSignin(@Body() AdminRequest:AdminRequest){
    return this.UserService.userSignin(AdminRequest)
  }
  
}
