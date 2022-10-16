import { Injectable,UnauthorizedException,BadRequestException
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from 'src/model/adminModel';
import * as bcrypt from "bcrypt"

@Injectable()
export class ExampleService {

  constructor(
    @InjectModel(Admin) private AdminModel:typeof Admin,
    // @Inject(CACHE_MANAGER) private cacheManager:Cache
  ){}



}
