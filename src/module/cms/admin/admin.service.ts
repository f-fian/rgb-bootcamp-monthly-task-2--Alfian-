import { Injectable,UnauthorizedException,BadRequestException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from 'src/model/adminModel';
import * as bcrypt from "bcrypt"

@Injectable()
export class AdminService {

  constructor(
    @InjectModel(Admin) private AdminModel:typeof Admin,
    // @Inject(CACHE_MANAGER) private cacheManager:Cache
  ){}

  async cmsAdminSignup(AdminRequest): Promise<Admin> {
    const {email,password} = AdminRequest
    const admin = await this.findAdminByEmail(email)

    if(admin){
      throw new BadRequestException("email sudah terdaftar")
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    const newAdmin = await this.AdminModel.create({
      email,
      password:hashedPassword
    })
    return newAdmin
  }
  async cmsAdminSignin(AdminRequest): Promise<any> {
    const {email,password} = AdminRequest
    const admin = await this.findAdminByEmail(email)
    if(admin && await bcrypt.compare(password,admin.password)){
      return admin
    } else throw new UnauthorizedException("Cek kembali email atau password anda")
  }
  async findAdminByEmail(email){
    return await this.AdminModel.findOne({
      where:{email}
    })
  }
  
}
