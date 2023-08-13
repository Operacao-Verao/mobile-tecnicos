import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as passport from 'passport';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.useGlobalPipes(new ValidationPipe());

  app.use(
    session({
      secret: 'nau',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 }
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  
  const config = new DocumentBuilder()
  .addBearerAuth()
  .setTitle('Técnicos mobile')
  .setDescription("API criada para a aplicação dos técnicos da Defesa Civil de Franco da Rocha.")
  .setVersion('1.0')
  .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
