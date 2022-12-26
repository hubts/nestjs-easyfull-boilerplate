import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { Logger, VersioningType } from "@nestjs/common";
import { AppConfig } from "@config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const logger = new Logger("Main");

    try {
        const app = await NestFactory.create<NestExpressApplication>(AppModule);

        // CORS
        app.enableCors({
            allowedHeaders: "Content-Type",
            methods: "GET, PUT, POST, DELETE",
            credentials: true,
            origin: "*",
        });

        // API
        app.setGlobalPrefix("api");
        app.enableVersioning({
            type: VersioningType.URI,
        });

        // Swagger
        const swaggerConfig = new DocumentBuilder()
            .setTitle("NestJS Boilerplate Swagger")
            .setDescription("Swagger for API in NestJS");
        const swaggerDocument = SwaggerModule.createDocument(
            app,
            swaggerConfig.build()
        );
        const swaggerPath = "docs";
        SwaggerModule.setup(swaggerPath, app, swaggerDocument, {
            explorer: true,
        });

        // Start
        const config = AppConfig();
        await app.listen(config.port, async () => {
            logger.log(`Application is running on ${await app.getUrl()}`);
            logger.log(
                `Documentation is ready: ${await app.getUrl()}/${swaggerPath}`
            );
        });
    } catch (error) {
        logger.error(`Failed to start the application: ${error}`);
        process.exit(1);
    }
}
bootstrap();
