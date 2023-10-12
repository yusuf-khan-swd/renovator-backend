import { $Enums, Roles } from '@prisma/client';

export type IUserLogin = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
};

export type IUserResponse = {
  id: string;
  name: string;
  email: string;
  role: Roles;
};

export type IUser = {
  id: string;
  name: string;
  email: string;
  role: $Enums.Roles;
};
