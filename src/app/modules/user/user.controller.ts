import { Request, Response } from 'express';
import httpStatus from 'http-status';
import config from '../../../config';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './user.service';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await UserService.createUser(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await UserService.createAdmin(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin created successfully',
    data: result,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await UserService.loginUser(data);
  const { refreshToken } = result;

  // set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  res.status(200).send({
    statusCode: httpStatus.OK,
    success: true,
    message: 'User login successfully!',
    data: result,
  });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const query = req.query;
  const result = await UserService.getAllUsers(query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Users fetched successfully',
    data: result,
  });
});

const getAllAdminUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllAdminUsers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Admin Users fetched successfully',
    data: result,
  });
});

const getAllNormalUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllNormalUsers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Normal Users fetched successfully',
    data: result,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UserService.getSingleUser(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single User fetched successfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = req.user;
  const data = req.body;
  const result = await UserService.updateUser(id, user, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UserService.deleteUser(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: result,
  });
});

const userProfile = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log({ user: req?.user });
  const result = await UserService.userProfile(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Profile fetched successfully',
    data: result,
  });
});

const updateUserProfile = catchAsync(async (req: Request, res: Response) => {
  const id = req.user?.userId;
  const data = req.body;
  const result = await UserService.updateUserProfile(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Profile updated successfully',
    data: result,
  });
});

export const UserController = {
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
