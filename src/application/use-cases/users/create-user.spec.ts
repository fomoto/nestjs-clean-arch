import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository';
import { CreateUser } from './create-user';

describe('Create user', () => {
  it('should be able to create a user', async () => {
    const repository = new InMemoryUsersRepository();
    const createUser = new CreateUser(repository);

    const { user } = await createUser.execute({
      name: 'John',
      phone: '5514996283958',
      email: 'test@test.org',
      authProvider: 'Provider',
    });

    expect(repository.users).toHaveLength(1);
    expect(repository.users[0]).toStrictEqual(user);
  });
});
