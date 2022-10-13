import { Controller,Post,Get,Body, Param, ParseIntPipe,Put,Delete,HttpCode } from '@nestjs/common';
import { ClinicRequest } from 'src/request/clinic.request';
import { JadwalTestService } from './jadwalTest.service';
import { JadwalTestRequest } from 'src/request/jadwalTest.request';

@Controller("clinic/:clinicId/covid19/jadwal")
export class JadwalTestController {
  constructor(private readonly JadwalTestService: JadwalTestService) {}


  @Post()
  clinicPost(@Body() JadwalTestRequest:JadwalTestRequest){
    return this.JadwalTestService.cmcJadwalTestPost(JadwalTestRequest)
  }

  // @Get(":id")
  // clinicGet(@Param("id",ParseIntPipe) id:number){
  //   return this.JadwalTestService.cmsClinicGet(id)
  // }

  // @Get()
  // clinicGetList(){
  //   return this.JadwalTestService.cmsClinicGetList()
  // }

  // @Put(":id")
  // cLinicUpdate(
  //   @Body() ClinicRequest:ClinicRequest,
  //   @Param("id",ParseIntPipe) id:number){
  //   return this.JadwalTestService.cmsCLinicUpdate(ClinicRequest,id)
  // }

  // @Delete(":id")
  // @HttpCode(204)
  // clinicDelete(
  //   @Param("id",ParseIntPipe) id:number){
  //   this.JadwalTestService.cmsClinicDelete(id)
  // }

}
