import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { UsersController } from './users.controller';
import { CreateUser } from '@application/use-cases/users/create-user';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [CreateUser],
})
export class UsersModule {}
