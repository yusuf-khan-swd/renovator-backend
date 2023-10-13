import { Faq } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createFaq = async (data: Faq): Promise<Faq> => {
  return await prisma.faq.create({ data });
};

const getAllFaqs = async (): Promise<Faq[]> => {
  return await prisma.faq.findMany();
};

const getSingleFaq = async (id: string): Promise<Faq | null> => {
  return await prisma.faq.findUnique({
    where: { id },
  });
};

const updateFaq = async (
  id: string,
  data: Partial<Faq>
): Promise<Faq | null> => {
  return await prisma.faq.update({
    where: { id },
    data,
  });
};

const deleteFaq = async (id: string): Promise<Faq | null> => {
  return await prisma.faq.delete({ where: { id } });
};

export const FaqService = {
  createFaq,
  getAllFaqs,
  getSingleFaq,
  updateFaq,
  deleteFaq,
};
