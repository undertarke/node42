import { Body, Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';
import { ApiBody, ApiParam, ApiProperty, ApiQuery, ApiTags } from '@nestjs/swagger';

class userTypeDto {
  @ApiProperty()
  id: number

  @ApiProperty()
  email: string

  @ApiProperty()
  userName: string
}

@ApiTags("ứng dụng")
@Controller("/app")
export class AppController {
  constructor(private readonly appService: AppService) { }


  @ApiParam({
    name: "id"
  })
  @ApiQuery({
    name: "phone"
  })
  @ApiBody({
    type: userTypeDto
  })
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