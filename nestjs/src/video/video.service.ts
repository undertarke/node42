import { Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class VideoService {

  constructor(private config: ConfigService) { }

  prisma = new PrismaClient()

  create(createVideoDto: CreateVideoDto) {
    return "create"
  }

  async findAll() {
    return await this.prisma.video.findMany()
  }

  findOne(id: number) {
    return this.config.get("DATABASE_URL")
  }

  update(id: number, updateVideoDto: UpdateVideoDto) {
    return `This action updates a #${id} video`;
  }

  remove(id: number) {
    return `This action removes a #${id} video`;
  }
}
