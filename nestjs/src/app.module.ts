import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [VideoModule, UserModule,
     ConfigModule.forRoot({ isGlobal: true })
    ],
  controllers: [AppController],
  providers: [AppService,JwtStrategy],
})

export class AppModule { }


// quản lý theo đối tượng
// module: kết nối controller và service của đối tượng đó lại với nhau. Kết nối các đối tượng module khác
// service: nơi định nghĩa logic, tính toán,..
// controller: Nơi tạo API

// đặt trên đầu anotation
// @:  decorator 


// nest g resource video --no-spec