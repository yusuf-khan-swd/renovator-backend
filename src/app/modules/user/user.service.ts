import { User } from '@prisma/client';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { ENUM_USER_ROLE } from '../../../enums/user';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import {
  ILoginUserResponse,
  IUser,
  IUserLogin,
  IUserResponse,
} from './user.interface';

const createUser = async (data: User): Promise<IUserResponse> => {
  data.role = 'user';
  return await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });
};

const createAdmin = async (data: User): Promise<IUserResponse> => {
  data.role = 'admin';
  return await prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });
};

const loginUser = async (data: IUserLogin): Promise<ILoginUserResponse> => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: data?.email,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  const isPasswordMatch = isUserExist.password === data.password;

  if (isUserExist.password && !isPasswordMatch) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  const { id: userId, role } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

const getAllUsers = async (
  query: any
): Promise<IUserResponse[] | undefined> => {
  let result;

  if (query?.role === 'all') {
    result = await prisma.user.findMany({
      where: { role: { in: [ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER] } },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  } else if (query?.role) {
    const validRole =
      query?.role === ENUM_USER_ROLE.USER
        ? ENUM_USER_ROLE.USER
        : query?.role === ENUM_USER_ROLE.ADMIN
        ? ENUM_USER_ROLE.ADMIN
        : undefined;

    result = await prisma.user.findMany({
      where: {
        role: validRole,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  } else {
    result = await prisma.user.findMany({
      where: { role: { in: [ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER] } },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  return result;
};

const getAllAdminUsers = async (): Promise<IUserResponse[] | undefined> => {
  const result = await prisma.user.findMany({
    where: { role: ENUM_USER_ROLE.ADMIN },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  return result;
};

const getAllNormalUsers = async (): Promise<IUserResponse[] | undefined> => {
  const result = await prisma.user.findMany({
    where: { role: ENUM_USER_ROLE.USER },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: { createdAt: 'desc' },
  });

  return result;
};

const getSingleUser = async (
  id: string
): Promise<IUserResponse | null | undefined> => {
  const isUserExist = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  return isUserExist;
};

const updateUser = async (
  id: string,
  user: any,
  data: Partial<IUser>
): Promise<IUserResponse | null | undefined> => {
  const isUserExist = await prisma.user.findUnique({ where: { id } });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  let result;

  if (user.role === ENUM_USER_ROLE.SUPER_ADMIN) {
    result = await prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
  } else {
    const isUserRoleUser = isUserExist.role === 'user';

    if (!isUserRoleUser) {
      throw new ApiError(
        httpStatus.NOT_FOUND,
        'Admin can only update user information'
      );
    }

    result = await prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });
  }

  return result;
};

const deleteUser = async (id: string): Promise<IUserResponse | null> => {
  return await prisma.user.delete({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });
};

const userProfile = async (id: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

const updateUserProfile = async (
  id: string,
  data: Partial<User>
): Promise<IUserResponse | null> => {
  const result = await prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User update failed');
  }

  return result;
};

export const UserService = {
  createUser,
  createAdmin,
  getAllUsers,
  getAllAdminUsers,
  getAllNormalUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  userProfile,
  updateUserProfile,
  loginUser,
};
