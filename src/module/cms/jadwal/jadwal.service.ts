import { Injectable,Inject,CACHE_MANAGER,BadRequestException} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cache } from 'cache-manager';
import { Jadwal } from 'src/model/jadwalModel';

@Injectable()
export class JadwalService {
  constructor(
    @InjectModel(Jadwal) private JadwalModel:typeof Jadwal,
    @Inject(CACHE_MANAGER) private cacheManager:Cache
  ){}
  async jadwalPost(JadwalRequest){
    const {tanggal,jam} = JadwalRequest
    const jadwal = await this.findJadwal(tanggal,jam)
    if (jadwal){
      throw new BadRequestException("jadwal is already exist")
    }
    const newJadwal = this.JadwalModel.create({
      tanggal,jam
    })
    return newJadwal
  }

  async jadwalGet(id){
    const cacheData = await this.cacheManager.get(`jadwal-${id}`)
    if (!cacheData){
      console.log("CACHE MISS")
      const jadwal = await this.JadwalModel.findOne({
        where:{
          id
        }
      })
      await this.cacheManager.set(`jadwal-${id}`,jadwal)
      return jadwal
    }
    console.log("CACHE KE HITT")
    return cacheData
    
  }



  async findJadwal(tanggal,jam){
    return await this.JadwalModel.findOne({
      where:{
        tanggal,jam
      }
    })
  }

  
}
