import { Controller,Post,Get,Body } from '@nestjs/common';
import { AdminRequest } from 'src/request/admin.request';
import { ExampleService } from './example.service';

@Controller()
export class ExampleController {
  constructor(private readonly ExampleService: ExampleService) {}
  @Post("example")
  adminSignup(@Body() AdminRequest:AdminRequest){
    console.log(AdminRequest);
  }
}
