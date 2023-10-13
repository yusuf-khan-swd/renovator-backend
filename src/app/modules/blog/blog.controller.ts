import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BlogService } from './blog.service';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await BlogService.createBlog(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.getAllBlogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all blog successfully',
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BlogService.getSingleBlog(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get single blog successfully',
    data: result,
  });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const result = await BlogService.updateBlog(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update blog successfully',
    data: result,
  });
});

const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BlogService.deleteBlog(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete blog successfully',
    data: result,
  });
});

export const BlogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
