import { Injectable } from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import {Strategy} from "passport-jwt"
import { cookieExtractor } from 'src/utils/utils';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: cookieExtractor,
      ignoreExpiration: false,
      secretOrKey: "secret",
    });
  }

  async validate(payload: any) {
    console.log(payload);
    console.log("----------")
    console.log("jwt strategy");
    return {username:payload.username,UserId:payload.sub}
  }
}


