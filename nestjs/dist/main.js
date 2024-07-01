"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express = require("express");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.use(express.static("."));
    const config = new swagger_1.DocumentBuilder().setTitle("node 42").addBearerAuth().build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("/swagger", app, document);
    await app.listen(8080);
}
bootstrap();
//# sourceMappingURL=main.js.map