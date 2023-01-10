import { randomUUID } from 'node:crypto';

export interface UserProps {
  name: string;
  phone: string;
  email: string;
  authProvider: string;
  createdAt?: Date;
}

export class User {
  public readonly id: string;
  public props: Required<UserProps>;

  constructor(props: UserProps, id?: string) {
    this.id = id ?? randomUUID();

    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
    };
  }

  static create(props: UserProps, id?: string) {
    return new User(props, id);
  }

  get name() {
    return this.props.name;
  }

  get phone() {
    return this.props.phone;
  }

  get email() {
    return this.props.email;
  }

  get authProvider() {
    return this.props.authProvider;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
