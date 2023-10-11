import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createCategory = async (data: Category): Promise<Category> => {
  return await prisma.category.create({ data });
};

const getAllCategories = async (): Promise<Category[]> => {
  return await prisma.category.findMany();
};

const getSingleCategory = async (id: string): Promise<Category | null> => {
  return await prisma.category.findUnique({
    where: { id },
    include: { books: true },
  });
};

const updateCategory = async (
  id: string,
  data: Partial<Category>
): Promise<Category | null> => {
  return await prisma.category.update({
    where: { id },
    data,
  });
};

const deleteCategory = async (id: string): Promise<Category | null> => {
  return await prisma.category.delete({ where: { id } });
};

export const CategoryService = {
  createCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
  deleteCategory,
};
