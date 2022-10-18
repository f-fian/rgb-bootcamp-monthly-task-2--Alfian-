import { Controller,Post,Get,Body, Param, ParseIntPipe,Put,Delete,HttpCode } from '@nestjs/common';
import { JadwalService } from './jadwal.service';
import { JadwalRequest } from 'src/request/jadwal.request';
import { ValidationPipe } from '@nestjs/common';


@Controller("jadwal")
export class JadwalController {
  constructor(private readonly JadwalService: JadwalService) {}


  @Post()
  jadwalPost(@Body(new ValidationPipe()) JadwalRequest:JadwalRequest){
    return this.JadwalService.jadwalPost(JadwalRequest)
  }
  @Get(":id")
  jadwalGet(@Param("id",ParseIntPipe) id:number){
    return this.JadwalService.jadwalGet(id)
  }

}
