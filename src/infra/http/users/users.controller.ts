import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUser } from '@application/use-cases/users/create-user';
import { CreateUserBody } from './dtos/create-user-body';

@Controller('users')
export class UsersController {
  constructor(private createUser: CreateUser) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    // const { name, phone, email, authProvider } = body;

    const { user } = await this.createUser.execute(body);

    return {
      user: user.toJSON(),
    };
  }
}
