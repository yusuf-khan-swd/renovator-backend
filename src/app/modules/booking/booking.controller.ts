import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BookingService } from './booking.service';

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const userId = req.user?.userId;
  data.userId = userId;
  const result = await BookingService.createBooking(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Created booking successfully',
    data: result,
  });
});

const getAllBookings = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const result = await BookingService.getAllBookings(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all bookings successfully',
    data: result,
  });
});

const getSingleBooking = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = req.user;

  const result = await BookingService.getSingleBooking(id, user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get single booking successfully',
    data: result,
  });
});

export const BookingController = {
  createBooking,
  getAllBookings,
  getSingleBooking,
};
