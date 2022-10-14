import { Injectable,Inject,CACHE_MANAGER,BadRequestException} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JadwalTest } from 'src/model/jadwalTestModel';
import { Cache } from 'cache-manager';
import { ClinicCovid19 } from 'src/model/clinicCovid19Model';

@Injectable()
export class JadwalTestService {

  constructor(
    @InjectModel(JadwalTest) private JadwalTestModel:typeof JadwalTest,
    @InjectModel(ClinicCovid19) private ClinicCovid19Model:typeof ClinicCovid19,
    @Inject(CACHE_MANAGER) private cacheManager:Cache
  ){}

  async cmcJadwalTestPost(clinic_id,covid19_id,JadwalTestRequest):Promise<any>{
    const {tanggal,jam,kuota} = JadwalTestRequest
   
   
    const clinicCovid19 = await this.findClinicCovidId(clinic_id,covid19_id)
    const jadwalTestClinic = await this.JadwalTestModel.create({
      clinic_covid_id:clinicCovid19.id,
      tanggal:tanggal,
      jam,
      kuota
    })
    return jadwalTestClinic
  }
  async cmcJadwalTestGetList(clinic_id,covid19_id):Promise<any>{
    const clinicCovid19 = await this.findClinicCovidId(clinic_id,covid19_id)
    const jadwalTestClinic = await this.JadwalTestModel.findAll({
      where:{
        clinic_covid_id:clinicCovid19.id}
    })
    return jadwalTestClinic
  }
  async cmcJadwalTestGetDay(clinic_id,covid19_id,tanggal):Promise<any>{
    const clinicCovid19 = await this.findClinicCovidId(clinic_id,covid19_id)
    const jadwalTestClinic = await this.JadwalTestModel.findAll({
      where:{
        clinic_covid_id:clinicCovid19.id,
        tanggal}
    })
    return jadwalTestClinic
  }


 









  async findClinicCovidId(clinic_id,covid19_id) {
    return await this.ClinicCovid19Model.findOne({
      where:{
        clinic_id,
        covid19_id
      }
    })
  }

  // async cmsClinicGet(id){
  //   const cacheData = await this.cacheManager.get(`clinic-${id}`)
  //   if (!cacheData){
  //     console.log("CACHE MISS")
  //     const clinic = await this.ClinicModel.findOne({
  //       where:{
  //         id
  //       }
  //     })
  //     await this.cacheManager.set(`clinic-${id}`,clinic)
  //     return clinic
  //   }
  //   console.log("CACHE KE HITT")
  //   return cacheData
    
  // }

  // async cmsClinicGetList(){
  //   const cacheData = await this.cacheManager.get(`clinicList`)
  //   if (!cacheData){
  //     console.log("CACHE MISS")
  //     const clinic = await this.ClinicModel.findAll()
  //     await this.cacheManager.set(`clinicList`,clinic)
  //     return clinic
  //   }
  //   console.log("CACHE KE HITT")
  //   return cacheData
  // }

  // async cmsCLinicUpdate(ClinicRequest,id){
  //   const {nama_clinic,alamat,telepon} = ClinicRequest
  //   const updatedClinic = await this.ClinicModel.update({
  //     nama_clinic,
  //     alamat,
  //     telepon
  //   },{where:{id}}
  //   )
  //   if (updatedClinic[0]==0){
  //     throw new BadRequestException("Clinic yang di update tidak ada")
  //   }
  //   return await this.ClinicModel.findOne({where:{id}})
  // }

  // async cmsClinicDelete(id){
  //   await this.ClinicModel.destroy({
  //     where:{
  //       id
  //     }
  //   })
  // }

  // async findClinicByName(nama_clinic){
  //   return await this.ClinicModel.findOne({
  //     where:{
  //       nama_clinic,
  //     }
  //   })
  // }
}
