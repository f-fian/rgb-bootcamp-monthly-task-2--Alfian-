import { Controller,Post,Get,Body, Param, ParseIntPipe,Put,Delete,HttpCode } from '@nestjs/common';
import { ClinicRequest } from 'src/request/clinic.request';
import { ClinicService } from './clinic.service';
import { ValidationPipe } from '@nestjs/common/pipes';

@Controller("clinic")
export class ClinicController {
  constructor(private readonly ClinicService: ClinicService) {}
  @Post()
  clinicPost(@Body(ValidationPipe) ClinicRequest:ClinicRequest){
    return this.ClinicService.cmcCLinicPost(ClinicRequest)
  }
  @Get(":id")
  clinicGet(@Param("id",ParseIntPipe) id:number){
    return this.ClinicService.cmsClinicGet(id)
  }
  @Get()
  clinicGetList(){
    return this.ClinicService.cmsClinicGetList()
  }
  @Put(":id")
  cLinicUpdate(
    @Body(ValidationPipe) ClinicRequest:ClinicRequest,
    @Param("id",ParseIntPipe) id:number){
    return this.ClinicService.cmsCLinicUpdate(ClinicRequest,id)
  }
  @Delete(":id")
  @HttpCode(204)
  clinicDelete(
    @Param("id",ParseIntPipe) id:number){
    this.ClinicService.cmsClinicDelete(id)
  }

}
