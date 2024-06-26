import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
export declare class VideoService {
    private config;
    constructor(config: ConfigService);
    prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    create(createVideoDto: CreateVideoDto): string;
    findAll(): Promise<{
        video_id: number;
        video_name: string | null;
        thumbnail: string | null;
        description: string | null;
        views: number | null;
        source: string | null;
        user_id: number | null;
        type_id: number | null;
    }[]>;
    findOne(id: number): any;
    update(id: number, updateVideoDto: UpdateVideoDto): string;
    remove(id: number): string;
}
