import { User } from '@application/entities/user.entity';
import { IUsersRepository } from '@application/repositories/users-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUser {
  constructor(private userRepo: IUsersRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, phone, email, authProvider } = request;
    const user = new User({
      name,
      phone,
      email,
      authProvider,
    });
    await this.userRepo.create(user);
    return { user };
  }
}

type CreateUserRequest = {
  name: string;
  phone: string;
  email: string;
  authProvider: string;
};

type CreateUserResponse = {
  user: User;
};
