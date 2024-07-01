import { BadRequestException, Controller, ForbiddenException, HttpCode, HttpException, InternalServerErrorException, Post, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,

  ) { }

  @HttpCode(200)
  @Post("/login")
  login() {

    try {

      return this.userService.login()

    } catch (exception) {

      if (exception.status && exception.status != 500)
        throw new HttpException(exception.response, exception.status);
      throw new HttpException("Lỗi Server", 500);
      // throw new ForbiddenException("Lỗi Server");
    }

  }

  @Post("/sign-up")
  signUp() {
    // tự làm
  }


}
