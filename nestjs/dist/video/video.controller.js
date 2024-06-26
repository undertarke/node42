"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoController = void 0;
const common_1 = require("@nestjs/common");
const video_service_1 = require("./video.service");
const create_video_dto_1 = require("./dto/create-video.dto");
const update_video_dto_1 = require("./dto/update-video.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const swagger_1 = require("@nestjs/swagger");
let VideoController = class VideoController {
    constructor(videoService) {
        this.videoService = videoService;
    }
    upload(file) {
        return file;
    }
    uploadMultiple(file) {
        return file;
    }
    create(createVideoDto) {
        return this.videoService.create(createVideoDto);
    }
    findAll() {
        return this.videoService.findAll();
    }
    findOne(id) {
        return this.videoService.findOne(+id);
    }
    update(id, updateVideoDto) {
        return this.videoService.update(+id, updateVideoDto);
    }
    remove(id) {
        return this.videoService.remove(+id);
    }
};
exports.VideoController = VideoController;
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("hinhAnh", {
        storage: (0, multer_1.diskStorage)({
            destination: process.cwd() + "/public/img",
            filename: (req, file, callback) => callback(null, new Date().getTime() + "_" + file.originalname)
        })
    })),
    (0, common_1.Post)("/upload"),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "upload", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)("hinhAnh", 10, {
        storage: (0, multer_1.diskStorage)({
            destination: process.cwd() + "/public/img",
            filename: (req, file, callback) => callback(null, new Date().getTime() + "_" + file.originalname)
        })
    })),
    (0, common_1.Post)("/upload-multiple"),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "uploadMultiple", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_video_dto_1.CreateVideoDto]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_video_dto_1.UpdateVideoDto]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VideoController.prototype, "remove", null);
exports.VideoController = VideoController = __decorate([
    (0, swagger_1.ApiTags)("vi déo"),
    (0, common_1.Controller)('video'),
    __metadata("design:paramtypes", [video_service_1.VideoService])
], VideoController);
//# sourceMappingURL=video.controller.js.map