import {NestFactory} from '@nestjs/core';
import cors from 'cors';
import {AppModule} from './app/app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.use(cors());
	await app.listen(3000);
}

bootstrap();
