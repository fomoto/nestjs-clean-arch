import { IUsersRepository } from '@application/repositories/users-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: IUsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
  exports: [IUsersRepository],
})
export class DatabaseModule {}
