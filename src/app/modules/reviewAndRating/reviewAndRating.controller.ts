import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReviewAndRatingService } from './reviewAndRating.service';

const createReviewAndRating = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    const userId = req.user?.userId;
    data.userId = userId;
    const result = await ReviewAndRatingService.createReviewAndRating(data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review created successfully',
      data: result,
    });
  }
);

const getAllReviewAndRatings = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ReviewAndRatingService.getAllReviewAndRatings();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get all Review successfully',
      data: result,
    });
  }
);

const getSingleReviewAndRating = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ReviewAndRatingService.getSingleReviewAndRating(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get single Review successfully',
      data: result,
    });
  }
);

const updateReviewAndRating = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const data = req.body;
    const result = await ReviewAndRatingService.updateReviewAndRating(id, data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review updated successfully',
      data: result,
    });
  }
);

const deleteReviewAndRating = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ReviewAndRatingService.deleteReviewAndRating(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Review deleted successfully',
      data: result,
    });
  }
);

const serviceReviews = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ReviewAndRatingService.serviceReviews(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all review for single service successfully',
    data: result,
  });
});

const userReviews = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ReviewAndRatingService.userReviews(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all review for a user successfully',
    data: result,
  });
});

const adminReviews = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewAndRatingService.adminReviews();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all reviews for admin successfully',
    data: result,
  });
});

export const ReviewAndRatingController = {
  createReviewAndRating,
  getAllReviewAndRatings,
  getSingleReviewAndRating,
  updateReviewAndRating,
  deleteReviewAndRating,
  serviceReviews,
  userReviews,
  adminReviews,
};
