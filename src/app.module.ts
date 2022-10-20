import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite', //-> u forRoot se specifira koji drajver koristimo, tj koji SQL
    entities: ['dist/**/*entity.js'], //-> kazemo gde trazimo entitete, po konvenciji kako se prave, videce se kasnije
    synchronize: true, //-> nije siguran jer automatski azurira direktno u bazu svakim pozivom aplikacije
    //nakon ovoga smo sa terminalom generisali boilerplate kod -> nest g resource users
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
