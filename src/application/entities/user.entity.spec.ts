import { User } from './user.entity';

describe('User', () => {
  it('should be able to create a user', () => {
    const user = new User({
      name: 'John Doe',
      phone: '5514996283958',
      email: 'test@test.org',
      authProvider: 'Provider',
    });

    expect(user).toBeTruthy();
  });
});
