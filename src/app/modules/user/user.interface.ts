import { Roles } from '@prisma/client';

export type IUserLogin = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
};

export type IUser = {
  id: string;
  name: string;
  email: string;
  role: Roles;
};
