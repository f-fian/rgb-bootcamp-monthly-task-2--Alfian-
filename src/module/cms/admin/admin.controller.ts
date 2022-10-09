import { Controller,Post,Get,Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminRequest } from 'src/request/admin.request';

@Controller("admin")
export class AdminController {
  constructor(private readonly AdminService: AdminService) {}


  @Post("Signup")
  adminSignup(@Body() AdminRequest:AdminRequest){
    return this.AdminService.cmsAdminSignup(AdminRequest)
  }

  @Post("Signin")
  adminSignin(@Body() AdminRequest:AdminRequest){
    return this.AdminService.cmsAdminSignin(AdminRequest)
  }
  
}
