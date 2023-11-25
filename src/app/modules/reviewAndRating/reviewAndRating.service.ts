import { ReviewAndRating } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createReviewAndRating = async (
  data: ReviewAndRating
): Promise<ReviewAndRating> => {
  return await prisma.reviewAndRating.create({ data });
};

const getAllReviewAndRatings = async (): Promise<ReviewAndRating[]> => {
  return await prisma.reviewAndRating.findMany();
};

const getSingleReviewAndRating = async (
  id: string
): Promise<ReviewAndRating | null> => {
  return await prisma.reviewAndRating.findUnique({
    where: { id },
    include: { service: { include: { category: true } } },
  });
};

const updateReviewAndRating = async (
  id: string,
  data: Partial<ReviewAndRating>
): Promise<ReviewAndRating | null> => {
  return await prisma.reviewAndRating.update({
    where: { id },
    data,
  });
};

const deleteReviewAndRating = async (
  id: string
): Promise<ReviewAndRating | null> => {
  return await prisma.reviewAndRating.delete({ where: { id } });
};

const serviceReviews = async (id: string): Promise<ReviewAndRating[]> => {
  return await prisma.reviewAndRating.findMany({
    where: { serviceId: id },
    include: { user: true },
    orderBy: { createdAt: 'desc' },
  });
};

const userReviews = async (id: string): Promise<ReviewAndRating[]> => {
  return await prisma.reviewAndRating.findMany({
    where: { userId: id },
    include: { service: true },
    orderBy: { createdAt: 'desc' },
  });
};

const adminReviews = async (): Promise<ReviewAndRating[]> => {
  return await prisma.reviewAndRating.findMany({
    include: { service: true },
    orderBy: { createdAt: 'desc' },
  });
};

export const ReviewAndRatingService = {
  createReviewAndRating,
  getAllReviewAndRatings,
  getSingleReviewAndRating,
  updateReviewAndRating,
  deleteReviewAndRating,
  serviceReviews,
  userReviews,
  adminReviews,
};
