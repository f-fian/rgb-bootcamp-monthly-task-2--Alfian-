import { Controller,Post,Get,Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminRequest } from 'src/request/admin.request';
import { ValidationPipe } from '@nestjs/common/pipes';

@Controller("admin")
export class AdminController {
  constructor(private readonly AdminService: AdminService) {}


  @Post("Signup")
  adminSignup(@Body(ValidationPipe) AdminRequest:AdminRequest){
    return this.AdminService.cmsAdminSignup(AdminRequest)
  }

  @Post("Signin")
  adminSignin(@Body(ValidationPipe) AdminRequest:AdminRequest){
    return this.AdminService.cmsAdminSignin(AdminRequest)
  }
  
}
