import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller("/app")
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Get("/demo/:id")
  getHello(@Req() req, @Res() res) {
    let { id } = req.params
    let { id2 } = req.query
    return "123"

  }

  @Get()
  getDemo(){
    
  }

}

