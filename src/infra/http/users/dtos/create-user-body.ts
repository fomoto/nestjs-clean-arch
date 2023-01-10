import { IsNotEmpty } from 'class-validator';

export class CreateUserBody {
  name: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  authProvider: string;
}
