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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const swagger_1 = require("@nestjs/swagger");
class userTypeDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], userTypeDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], userTypeDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], userTypeDto.prototype, "userName", void 0);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello(req, res) {
        let { id } = req.params;
        let { phone } = req.query;
        let { email, userName } = req.body;
        return "123";
    }
    getDemo(id, phone, body) {
        let { email, userName } = body;
        return { id, phone, email, userName };
    }
};
exports.AppController = AppController;
__decorate([
    (0, swagger_1.ApiParam)({
        name: "id"
    }),
    (0, swagger_1.ApiQuery)({
        name: "phone"
    }),
    (0, swagger_1.ApiBody)({
        type: userTypeDto
    }),
    (0, common_1.Get)("/demo/:id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)("/test/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Query)("phone")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, userTypeDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getDemo", null);
exports.AppController = AppController = __decorate([
    (0, swagger_1.ApiTags)("ứng dụng"),
    (0, common_1.Controller)("/app"),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map