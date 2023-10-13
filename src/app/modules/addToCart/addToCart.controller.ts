import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AddToCartService } from './addToCart.service';

const createAddToCart = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await AddToCartService.createAddToCart(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review created successfully',
    data: result,
  });
});

const getAllAddToCarts = catchAsync(async (req: Request, res: Response) => {
  const result = await AddToCartService.getAllAddToCarts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all Review successfully',
    data: result,
  });
});

const getSingleAddToCart = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AddToCartService.getSingleAddToCart(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get single Review successfully',
    data: result,
  });
});

const updateAddToCart = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const result = await AddToCartService.updateAddToCart(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review updated successfully',
    data: result,
  });
});

const deleteAddToCart = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AddToCartService.deleteAddToCart(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review deleted successfully',
    data: result,
  });
});

export const AddToCartController = {
  createAddToCart,
  getAllAddToCarts,
  getSingleAddToCart,
  updateAddToCart,
  deleteAddToCart,
};
