import { Injectable,Inject,CACHE_MANAGER,BadRequestException} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cache } from 'cache-manager';
import { ClinicCovid19 } from 'src/model/clinicCovid19Model';

@Injectable()
export class ClinicCovid19Service {
  constructor(
    @InjectModel(ClinicCovid19) private ClinicCovid19Model:typeof ClinicCovid19,
    @Inject(CACHE_MANAGER) private cacheManager:Cache
  ){}

  async cmsClinicCovid19Post(ClinicCovid19Request,id):Promise<any>{
    const {covid19List,hargaList} = ClinicCovid19Request
    for (let x = 0; x < covid19List.length; x++){
      const clinicCovid19 = await this.findClinicCovid19(id,covid19List[x])
      if (!clinicCovid19){
        await this.ClinicCovid19Model.create({
          clinic_id:id,
          covid19_id:covid19List[x],
          harga:hargaList[x]
        })
      }
    }
    return await this.ClinicCovid19Model.findAll({
      where:{clinic_id:id}
    })
  }

  async cmsClinicCovid19Get(clinicId,covidId){
    const cacheData = await this.cacheManager.get(`clinic-${clinicId}&covidId-${covidId}`)
    if (!cacheData){
      console.log("CACHE MISS")
      const clinicCovid19 = await this.ClinicCovid19Model.findOne({
        where:{
          clinic_id:clinicId,
          covid19_id:covidId 
        }
      })
      await this.cacheManager.set(`clinic-${clinicId}&covidId-${covidId}`,clinicCovid19)
      return clinicCovid19
    }
    console.log("CACHE KE HITT")
    return cacheData
    
  }

  async cmsClinicCovid19GetList(clinicId){
    console.log(clinicId);
    const cacheData = await this.cacheManager.get(`clinicCovid19List-${clinicId}`)
    if (!cacheData){
      console.log("CACHE MISS")
      const clinicCovid19 = await this.ClinicCovid19Model.findAll({where:{clinic_id:clinicId}})
      await this.cacheManager.set(`clinicCovid19List-${clinicId}`,clinicCovid19)
      return clinicCovid19
    }
    console.log("CACHE KE HITT")
    return cacheData
  }

  // async cmsClinicCovid19UpdateList(ClinicCovid19Request,clinicId){
  //   const {nama_test,deskripsi,harga} = ClinicCovid19Request
  //   const updatedCovid19 = await this.ClinicCovid19Model.update({
  //     nama_test,
  //     deskripsi,
  //     harga
  //   },{where:{id}}
  //   )
  //   if (updatedCovid19[0]==0){
  //     throw new BadRequestException("Clinic yang di update tidak ada")
  //   }
  //   return await this.ClinicCovid19Model.findOne({where:{id}})
  // }

  // async cmsClinicCovid19Update(ClinicCovid19Request,clinicId,id){
  //   const {nama_test,deskripsi,harga} = ClinicCovid19Request
  //   const updatedCovid19 = await this.ClinicCovid19Model.update({
  //     nama_test,
  //     deskripsi,
  //     harga
  //   },{where:{id}}
  //   )
  //   if (updatedCovid19[0]==0){
  //     throw new BadRequestException("Clinic yang di update tidak ada")
  //   }
  //   return await this.ClinicCovid19Model.findOne({where:{id}})
  // }

  
  // async cmsClinicCovid19Delete(id){
  //   await this.ClinicCovid19Model.destroy({
  //     where:{
  //       id
  //     }
  //   })
  // }

  async findClinicCovid19(clinic_id,covid19_id){
    return await this.ClinicCovid19Model.findOne({
      where:{
        clinic_id,
        covid19_id
      }
    })
  }
}
