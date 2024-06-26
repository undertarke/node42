import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
export declare class VideoController {
    private readonly videoService;
    constructor(videoService: VideoService);
    upload(file: Express.Multer.File): Express.Multer.File;
    uploadMultiple(file: Express.Multer.File[]): Express.Multer.File[];
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
    findOne(id: string): any;
    update(id: string, updateVideoDto: UpdateVideoDto): string;
    remove(id: string): string;
}
