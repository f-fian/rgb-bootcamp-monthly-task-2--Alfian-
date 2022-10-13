import { Controller,Post,Get,Body, Param, ParseIntPipe,Put,Delete,HttpCode } from '@nestjs/common';
import { ClinicRequest } from 'src/request/clinic.request';
import { JadwalTestService } from './jadwalTest.service';
import { JadwalTestRequest } from 'src/request/jadwalTest.request';

@Controller("clinic/:clinicId/covid19/:covidId/jadwal")
export class JadwalTestController {
  constructor(private readonly JadwalTestService: JadwalTestService) {}


  @Post()
  jadwalTestClinicPost(@Body() JadwalTestRequest:JadwalTestRequest,
  @Param("clinicId",ParseIntPipe) clinicId:number,
  @Param("covidId",ParseIntPipe) covidId:number){
    return this.JadwalTestService.cmcJadwalTestPost(clinicId,covidId,JadwalTestRequest)
  }

  @Get()
  jadwalTestClinicGetList(@Body() JadwalTestRequest:JadwalTestRequest,
  @Param("clinicId",ParseIntPipe) clinicId:number,
  @Param("covidId",ParseIntPipe) covidId:number){
    return this.JadwalTestService.cmcJadwalTestGetList(clinicId,covidId,JadwalTestRequest)
  }

  // @Get(":tanggal")
  // jadwalTestClinicGet(@Body() JadwalTestRequest:JadwalTestRequest,
  // @Param("clinicId",ParseIntPipe) clinicId:number,
  // @Param("covidId",ParseIntPipe) covidId:number){
  //   return this.JadwalTestService.cmcJadwalTestGet(clinicId,covidId,tanggal,JadwalTestRequest,)
  // }

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
