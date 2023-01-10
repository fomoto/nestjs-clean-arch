import { Injectable } from '@nestjs/common';
import { User } from '@application/entities/user.entity';
import { IUsersRepository } from '@application/repositories/users-repository';
import { PrismaService } from '../prisma.service';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';

@Injectable()
export class PrismaUsersRepository implements IUsersRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const raw = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.create({
      data: raw,
    });
  }
}
