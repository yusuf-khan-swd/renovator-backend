import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { CartService } from './cart.service';

const createCart = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const userId = req.user?.userId;
  data.userId = userId;
  const result = await CartService.createCart(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service added to cart successfully',
    data: result,
  });
});

const getAllCarts = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await CartService.getAllCarts(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all cart successfully',
    data: result,
  });
});

const getSingleCart = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await CartService.getSingleCart(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get single cart successfully',
    data: result,
  });
});

const updateCart = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const result = await CartService.updateCart(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart updated successfully',
    data: result,
  });
});

const deleteCart = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await CartService.deleteCart(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cart deleted successfully',
    data: result,
  });
});

export const CartController = {
  createCart,
  getAllCarts,
  getSingleCart,
  updateCart,
  deleteCart,
};
