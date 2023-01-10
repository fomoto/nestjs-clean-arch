import { User as RawUser } from '@prisma/client';
import { User } from '@application/entities/user.entity';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email,
      authProvider: user.authProvider,
      createdAt: user.createdAt,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User(
      {
        name: raw.name || '',
        phone: raw.phone,
        email: raw.email,
        authProvider: raw.authProvider,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
