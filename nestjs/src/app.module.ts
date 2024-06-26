import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}


// quản lý theo đối tượng
// module: kết nối controller và service của đối tượng đó lại với nhau. Kết nối các đối tượng module khác
// service: nơi định nghĩa logic, tính toán,..
// controller: Nơi tạo API

// đặt trên đầu anotation
// @:  decorator 
