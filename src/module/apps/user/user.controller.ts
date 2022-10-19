import { Controller,Post,Get,Body, Redirect, Req,Res, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRequest } from 'src/request/user.request';
import { UserLoginRequest } from 'src/request/userLogin.request';
import { Request,Response } from 'express';

@Controller("user")
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Redirect()
  @Post("signup")
  Signup(@Body() UserRequest:UserRequest){
    console.log("masuk gak");
    return this.UserService.userSignup(UserRequest)
  }

  @Redirect()
  @Post("signin")
  async Signin(
    @Body() UserLoginRequest:UserLoginRequest,
    @Res() res:Response){
    const urlAndJwt = await this.UserService.userSignin(UserLoginRequest)
    res.cookie("jwt",urlAndJwt[1])
    res.cookie("booking",urlAndJwt[2])
    return (urlAndJwt[0])
  }

  @Post("cookie")
  async cookie(@Req() request:Request){
    console.log("masuk roouter cookie");
    const jwt = Object.keys(request.body)[0]
    const hasil = await this.UserService.checkcookie(jwt)
    return hasil
  }

  @Post("booking")
  async bookingPostData(
  @Body() UserRequest:UserRequest){
    console.log("masuk router booking");
    console.log(UserRequest);
    return this.UserService.bookingPost(UserRequest)
  }

  @Get("booking/:id")
  async bookingGetData(
  @Param("id",ParseIntPipe) id:number){
    return this.UserService.bookingGet(id)
  }
}
