import { User } from 'src/application/entities/user.entity';
import { IUsersRepository } from 'src/application/repositories/users-repository';

export class InMemoryUsersRepository implements IUsersRepository {
  public users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }
}
