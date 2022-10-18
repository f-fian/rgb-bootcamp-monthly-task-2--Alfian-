import { Injectable,UnauthorizedException,BadRequestException} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/model/userModel';
import { JwtService } from '@nestjs/jwt/dist';
import { ClinicCovid19 } from 'src/model/clinicCovid19Model';
import { Booking } from 'src/model/bookingModel';
import { Jadwal } from 'src/model/jadwalModel';
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService {
  constructor(
  @InjectModel(User) private UserModel:typeof User,
  @InjectModel(ClinicCovid19) private ClinicCovid19Model:typeof ClinicCovid19,
  @InjectModel(Booking) private BookingModel:typeof Booking,
  @InjectModel(Jadwal) private JadwalModel:typeof Jadwal,
  private readonly jwtService: JwtService,){}

  async userSignup(UserRequest): Promise<any> {
    const {nik,firstName,lastName,password,phone,email,birthDate,address} = UserRequest
    console.log(nik);
    const userByEmail = await this.findUserByEmail(email)
    if (userByEmail){throw new BadRequestException("Email sudah digunakan. Mohon gunakan email lainnya")}
    const userByNik = await this.findUserByNik(nik)
    if (userByNik){throw new BadRequestException("No KTP sudah digunakan. Mohon gunakan No KTP lainnya")}
    const hashedPassword = await bcrypt.hash(password,await bcrypt.genSalt(10))
    const newUser = await this.UserModel.create({
      nik,
      firstName,
      lastName,
      password:hashedPassword,
      phone,
      email,
      birthDate,
      address
    })
    return {url:"http://127.0.0.1:5500/signin.html"}
  }
  async userSignin(UserLoginRequest): Promise<any> {
    console.log("XXX");
    const {email,password} = UserLoginRequest
    const user = await this.findUserByEmail(email)
    const userPayload = {
      nik:user.nik,
      name:`${user.firstName} ${user.firstName}`,
      phone:user.phone,
      address:user.address
    }
    const jwt = this.jwtService.sign(userPayload)
    if (user && await bcrypt.compare(password,user.password)){
      return [{url:"http://127.0.0.1:5500/clinic.html"},jwt]
    }else throw new UnauthorizedException("cek kembali email atau password anda")

  }

  async bookingPost(bookingRequest){
      const {clinic_id,covid19_id,tanggal,jam,nik} = bookingRequest
      const clinicTest = await this.findClinicTest(clinic_id,covid19_id)
      const jadwal = await this.findJadwal(tanggal,jam)
      console.log(clinicTest);
      console.log("pemisah");
      console.log(jadwal);
      const bookingData = await this.BookingModel.create({
        nik,
        jadwal_id:jadwal.id,
        clinic_id,
        covid19_id,
        harga:clinicTest.harga
      })
      return bookingData
  }

  async checkcookie(requestCookie){
    console.log("object");
    console.log("object");
    console.log(requestCookie);
    try{
      const cookie = await this.jwtService.verify(requestCookie)
      return cookie
    }catch {return null}
  }

  // find clinic test buat dapat harga testnya
  async findClinicTest(clinic_id,covid19_id){
      return this.ClinicCovid19Model.findOne({
        where:{clinic_id,covid19_id}
      })
  }

  async findJadwal(tanggal,jam){
    return this.JadwalModel.findOne({where:{tanggal,jam}})
  }



  async findUserByEmail(email){
    return await this.UserModel.findOne({
      where:{email}
    })
  }

  async findUserByNik(nik){
    return await this.UserModel.findOne({
      where:{
        nik
      }
    })
  }

  
  
    








}
