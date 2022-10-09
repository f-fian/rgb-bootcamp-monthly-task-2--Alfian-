import { Injectable,Inject,CACHE_MANAGER,BadRequestException} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cache } from 'cache-manager';
import { Covid19 } from 'src/model/covid19Model';

@Injectable()
export class Covid19Service {

  constructor(
    @InjectModel(Covid19) private Covid19Model:typeof Covid19,
    @Inject(CACHE_MANAGER) private cacheManager:Cache
  ){}

  async cmsCovid19Post(Covid19Request):Promise<Covid19>{
    const {nama_test,deskripsi,harga} = Covid19Request
    const clinic = await this.findCovid19ByName(nama_test)
    if (clinic){
      throw new BadRequestException("clinic is already exist")
    }
    const newClinic = await this.Covid19Model.create({
      nama_test,
      deskripsi,
      harga
    })
    return newClinic
  }

  async cmsCovid19Get(id){
    const cacheData = await this.cacheManager.get(`covid19-${id}`)
    if (!cacheData){
      console.log("CACHE MISS")
      const covid19 = await this.Covid19Model.findOne({
        where:{
          id
        }
      })
      await this.cacheManager.set(`covid19-${id}`,covid19)
      return covid19
    }
    console.log("CACHE KE HITT")
    return cacheData
    
  }

  async cmsCovid19GetList(){
    const cacheData = await this.cacheManager.get(`covid19List`)
    if (!cacheData){
      console.log("CACHE MISS")
      const covid19 = await this.Covid19Model.findAll()
      await this.cacheManager.set(`covid19List`,covid19)
      return covid19
    }
    console.log("CACHE KE HITT")
    return cacheData
  }

  async cmsCovid19Update(Covid19Request,id){
    const {nama_test,deskripsi,harga} = Covid19Request
    const updatedCovid19 = await this.Covid19Model.update({
      nama_test,
      deskripsi,
      harga
    },{where:{id}}
    )
    if (updatedCovid19[0]==0){
      throw new BadRequestException("Clinic yang di update tidak ada")
    }
    return await this.Covid19Model.findOne({where:{id}})
  }

  async cmsCovid19Delete(id){
    await this.Covid19Model.destroy({
      where:{
        id
      }
    })
  }

  async findCovid19ByName(nama_test){
    return await this.Covid19Model.findOne({
      where:{
        nama_test,
      }
    })
  }
}
