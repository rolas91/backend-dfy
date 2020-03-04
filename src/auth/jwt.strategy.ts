import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import moment from 'moment';

import { AuthService } from "./auth.service";
import { UserService } from "../mapping/users/user.service";
import { ErrorResponse } from "./auth.dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService, private userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
            ,
            secretOrKey: process.env.PRIVATE_KEY
        });
    }

    //Validacion del token
    async validate(payload: any, done: VerifiedCallback) {
        let user = await this.userService.findById(payload.sub);
        if (user!==undefined) {
            if (moment().unix() > payload.exp) { //Si el token ya expiro
                return new ErrorResponse('El token ha expirado',401,false)
            } else {
                const user = this.authService.validateUser(payload);
                if (!user) {// modificar luego
                    return done(
                        new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED)
                    );
                }
                return done(null, user, payload.iat);
            }
        } else {
            return new ErrorResponse('The user dont exist',404,false);
        }
    }
}