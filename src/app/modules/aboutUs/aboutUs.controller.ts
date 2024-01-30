import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AboutUsService } from './aboutUs.service';

const createAboutUs = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await AboutUsService.createAboutUs(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AboutUs created successfully',
    data: result,
  });
});

const getAllAboutUs = catchAsync(async (req: Request, res: Response) => {
  const result = await AboutUsService.getAllAboutUs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all AboutUs successfully',
    data: result,
  });
});

const getSingleAboutUs = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AboutUsService.getSingleAboutUs(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get single aboutUs successfully',
    data: result,
  });
});

const updateAboutUs = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const result = await AboutUsService.updateAboutUs(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update aboutUs successfully',
    data: result,
  });
});

const deleteAboutUs = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AboutUsService.deleteAboutUs(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete aboutUs successfully',
    data: result,
  });
});

export const AboutUsController = {
  createAboutUs,
  getAllAboutUs,
  getSingleAboutUs,
  updateAboutUs,
  deleteAboutUs,
};
