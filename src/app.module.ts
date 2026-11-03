import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '132Xxiv?',
    database:'nike',
    autoLoadEntities:true,
    synchronize:true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
