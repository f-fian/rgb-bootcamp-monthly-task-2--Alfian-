import { Controller,Post,Get,Body, Redirect } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRequest } from 'src/request/user.request';
import { UserLoginRequest } from 'src/request/userLogin.request';

@Controller("user")
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Redirect()
  @Post("signup")
  adminSignup(@Body() UserRequest:UserRequest){
    console.log("masuk gak");
    return this.UserService.userSignup(UserRequest)
  }

  @Redirect()
  @Post("signin")
  adminSignin(@Body() UserLoginRequest:UserLoginRequest){
    return this.UserService.userSignin(UserLoginRequest)
  }
  
}
