import { Injectable,Inject,CACHE_MANAGER,BadRequestException} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Clinic } from 'src/model/clinicModel';
import { JadwalTest } from 'src/model/jadwalTestModel';
import { Cache } from 'cache-manager';

@Injectable()
export class JadwalTestService {

  constructor(
    @InjectModel(Clinic) private JadwalTestModel:typeof JadwalTest,
    @Inject(CACHE_MANAGER) private cacheManager:Cache
  ){}

  async cmcJadwalTestPost(JadwalTestRequest):Promise<any>{
    const {clinic_covid_id,tanggal,jam,kuota} = JadwalTestRequest
    const jadwalTestClinic = await this.findJadwalTest(clinic_covid_id,tanggal,jam)
    if (jadwalTestClinic){
      throw new BadRequestException("Jadwal Test tersebut sudah ada")
    }
    return await this.JadwalTestModel.create({
      clinic_covid_id,
      tanggal,
      jam,
      kuota
    })
  }
  async findJadwalTest(clinic_covid_id,tanggal,jam) {
    return await this.JadwalTestModel.findOne({
      where:{
        clinic_covid_id,
        tanggal,
        jam
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
