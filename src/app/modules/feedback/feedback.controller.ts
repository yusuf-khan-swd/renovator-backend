import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FeedbackService } from './feedback.service';

const createFeedback = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await FeedbackService.createFeedback(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback created successfully',
    data: result,
  });
});

const getAllFeedbacks = catchAsync(async (req: Request, res: Response) => {
  const result = await FeedbackService.getAllFeedbacks();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all feedback successfully',
    data: result,
  });
});

const getSingleFeedback = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await FeedbackService.getSingleFeedback(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get single feedback successfully',
    data: result,
  });
});

const updateFeedback = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const result = await FeedbackService.updateFeedback(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback updated successfully',
    data: result,
  });
});

const deleteFeedback = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await FeedbackService.deleteFeedback(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Feedback deleted successfully',
    data: result,
  });
});

export const FeedbackController = {
  createFeedback,
  getAllFeedbacks,
  getSingleFeedback,
  updateFeedback,
  deleteFeedback,
};
