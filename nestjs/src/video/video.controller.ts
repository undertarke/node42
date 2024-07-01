import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles, UseGuards, Req } from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiProperty, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';


class UploadTypeDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  hinhAnh: any;
}


@ApiBearerAuth()
@UseGuards(AuthGuard("CHECK_TOKEN"))
@ApiTags("vi déo")
@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) { }
  // yarn add @types/multer

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: UploadTypeDto
  })
  @UseInterceptors(FileInterceptor("hinhAnh", {
    storage: diskStorage({
      destination: process.cwd() + "/public/img",
      filename: (req, file, callback) => callback(null, new Date().getTime() + "_" + file.originalname)
    })
  }))
  @Post("/upload")
  upload(@UploadedFile() file: Express.Multer.File) {
    return file
  }


  @UseInterceptors(FilesInterceptor("hinhAnh", 10, {
    storage: diskStorage({
      destination: process.cwd() + "/public/img",
      filename: (req, file, callback) => callback(null, new Date().getTime() + "_" + file.originalname)
    })
  }))
  @Post("/upload-multiple")
  uploadMultiple(@UploadedFiles() file: Express.Multer.File[]) {
    return file
  }











  @Post()
  create(@Body() createVideoDto: CreateVideoDto) {
    return this.videoService.create(createVideoDto);
  }

  
  @Get()
  findAll(@Req() req) {

    let data = req.user

    return this.videoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto) {
    return this.videoService.update(+id, updateVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoService.remove(+id);
  }
}


// B1: yarn add prisma @prisma/client
// B2: yarn prisma init
// B3: update file .ENV và schema.prisma
// B4: yarn prisma db pull
// B5: yarn prisma generate