import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FaqService } from './faq.service';

const createFaq = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await FaqService.createFaq(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faq created successfully',
    data: result,
  });
});

const getAllFaqs = catchAsync(async (req: Request, res: Response) => {
  const result = await FaqService.getAllFaqs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all faq successfully',
    data: result,
  });
});

const getSingleFaq = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await FaqService.getSingleFaq(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get single faq successfully',
    data: result,
  });
});

const updateFaq = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const result = await FaqService.updateFaq(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faq updated successfully',
    data: result,
  });
});

const deleteFaq = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await FaqService.deleteFaq(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faq deleted successfully',
    data: result,
  });
});

export const FaqController = {
  createFaq,
  getAllFaqs,
  getSingleFaq,
  updateFaq,
  deleteFaq,
};
