import { Controller,Post,Get,Body, Param, ParseIntPipe,Put,Delete,HttpCode } from '@nestjs/common';
import { ClinicRequest } from 'src/request/clinic.request';
import { Covid19Service } from './covid19.service';
import { Covid19Request } from 'src/request/covid19.request';


@Controller("covid19")
export class Covid19Controller {
  constructor(private readonly Covid19Service: Covid19Service) {}


  @Post()
  covid19Post(@Body() Covid19Request:Covid19Request){
    return this.Covid19Service.cmsCovid19Post(Covid19Request)
  }

  @Get(":id")
  covid19Get(@Param("id",ParseIntPipe) id:number){
    return this.Covid19Service.cmsCovid19Get(id)
  }

  @Get()
  covid19GetList(){
    return this.Covid19Service.cmsCovid19GetList()
  }

  @Put(":id")
  covid19Update(
    @Body() Covid19Request:Covid19Request,
    @Param("id",ParseIntPipe) id:number){
    return this.Covid19Service.cmsCovid19Update(Covid19Request,id)
  }

  @Delete(":id")
  @HttpCode(204)
  covid19Delete(
    @Param("id",ParseIntPipe) id:number){
    this.Covid19Service.cmsCovid19Delete(id)
  }

}
