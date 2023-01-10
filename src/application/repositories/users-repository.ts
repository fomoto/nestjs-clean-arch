import { User } from '../entities/user.entity';

export abstract class IUsersRepository {
  abstract create(user: User): Promise<void>;
}
