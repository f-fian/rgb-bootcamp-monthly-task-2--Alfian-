import { Injectable,Inject,CACHE_MANAGER,BadRequestException} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Clinic } from 'src/model/clinicModel';
import { Cache } from 'cache-manager';

@Injectable()
export class ClinicService {

  constructor(
    @InjectModel(Clinic) private ClinicModel:typeof Clinic,
    @Inject(CACHE_MANAGER) private cacheManager:Cache
  ){}

  async cmcCLinicPost(ClinicRequest):Promise<Clinic>{
    const {nama_clinic,alamat,telepon} = ClinicRequest
    const clinic = await this.findClinicByName(nama_clinic)
    if (clinic){
      throw new BadRequestException("clinic is already exist")
    }
    const newClinic = await this.ClinicModel.create({
      nama_clinic,
      alamat,
      telepon
    })
    return newClinic
  }

  async cmsClinicGet(id){
    const cacheData = await this.cacheManager.get(`clinic-${id}`)
    if (!cacheData){
      console.log("CACHE MISS")
      const clinic = await this.ClinicModel.findOne({
        where:{
          id
        }
      })
      await this.cacheManager.set(`clinic-${id}`,clinic)
      return clinic
    }
    console.log("CACHE KE HITT")
    return cacheData
    
  }

  async cmsClinicGetList(){
    const cacheData = await this.cacheManager.get(`clinicList`)
    if (!cacheData){
      console.log("CACHE MISS")
      const clinic = await this.ClinicModel.findAll()
      await this.cacheManager.set(`clinicList`,clinic)
      return clinic
    }
    console.log("CACHE KE HITT")
    return cacheData
  }

  async cmsCLinicUpdate(ClinicRequest,id){
    const {nama_clinic,alamat,telepon} = ClinicRequest
    const updatedClinic = await this.ClinicModel.update({
      nama_clinic,
      alamat,
      telepon
    },{where:{id}}
    )
    if (updatedClinic[0]==0){
      throw new BadRequestException("Clinic yang di update tidak ada")
    }
    return await this.ClinicModel.findOne({where:{id}})
  }

  async cmsClinicDelete(id){
    await this.ClinicModel.destroy({
      where:{
        id
      }
    })
  }

  async findClinicByName(nama_clinic){
    return await this.ClinicModel.findOne({
      where:{
        nama_clinic,
      }
    })
  }
}
