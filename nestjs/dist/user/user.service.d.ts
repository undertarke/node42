import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(): string;
}
