import { DatabaseModule } from '@infra/database/database.module';
import { UsersController } from '@infra/http/users/users.controller';
import { Module } from '@nestjs/common';
import { UsersModule } from './infra/http/users/users.module';

@Module({
  imports: [UsersModule, DatabaseModule],
})
export class AppModule {}
