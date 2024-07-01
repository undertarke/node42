import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(
        private jwtService: JwtService

    ) { }
    login() {
        let token = this.jwtService.sign({ data: "abc" }, { algorithm: "HS256", expiresIn: "5d", secret: "BI_MAT" })

        // sai email
        // sai mật khẩu

        throw new HttpException("sai email ,pass", 403)

        return token;
    }
}
