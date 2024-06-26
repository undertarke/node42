import { Body, Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

type userTypeDto = {
  id: number,
  email: string,
  userName: string
}

@ApiTags("ứng dụng")
@Controller("/app")
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Get("/demo/:id")
  getHello(@Req() req, @Res() res) {
    let { id } = req.params
    let { phone } = req.query
    let { email, userName } = req.body;
    return "123"

  }

  // localhost:8080/app/test?phone=113
  @Get("/test/:id")
  getDemo(
    @Param("id") id: string,
    @Query("phone") phone: string,
    @Body() body: userTypeDto,
    
  ) {
    
    let { email, userName } = body

    return { id, phone, email, userName }

  }

  

}

// entity => DAO => Model => Database First
// DTO: Data Transfer Object