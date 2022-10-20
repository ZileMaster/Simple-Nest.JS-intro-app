import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // sad ozemo da injectujemo repozitoriju u users.service
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
