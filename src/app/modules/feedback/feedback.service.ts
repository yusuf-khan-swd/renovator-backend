import { Feedback } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createFeedback = async (data: Feedback): Promise<Feedback> => {
  return await prisma.feedback.create({ data });
};

const getAllFeedbacks = async (): Promise<Feedback[]> => {
  return await prisma.feedback.findMany({
    orderBy: { createdAt: 'desc' },
  });
};

const getSingleFeedback = async (id: string): Promise<Feedback | null> => {
  return await prisma.feedback.findUnique({
    where: { id },
  });
};

const updateFeedback = async (
  id: string,
  data: Partial<Feedback>
): Promise<Feedback | null> => {
  return await prisma.feedback.update({
    where: { id },
    data,
  });
};

const deleteFeedback = async (id: string): Promise<Feedback | null> => {
  return await prisma.feedback.delete({ where: { id } });
};

export const FeedbackService = {
  createFeedback,
  getAllFeedbacks,
  getSingleFeedback,
  updateFeedback,
  deleteFeedback,
};
