import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// tham số thứ 2 là key dùng để liên kết với AuthGuard chặn API bên controller API
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,"CHECK_TOKEN") {
    constructor(config: ConfigService) {
        super({
            // luôn luôn truyền bằng header
            // truyền key là token: token
            // jwtFromRequest: ExtractJwt.fromHeader("token"),

            // truyền key là Authorization: Bearer ...
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "BI_MAT",
        });
    }

    async validate(tokenDecode) {
        
        return tokenDecode;
    }
}  

// yarn add @nestjs/passport passport passport-local  @nestjs/jwt passport-jwt @types/passport-jwt