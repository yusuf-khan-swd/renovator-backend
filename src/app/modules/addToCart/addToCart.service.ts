import { AddToCart } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createAddToCart = async (data: AddToCart): Promise<AddToCart> => {
  return await prisma.addToCart.create({ data });
};

const getAllAddToCarts = async (): Promise<AddToCart[]> => {
  return await prisma.addToCart.findMany();
};

const getSingleAddToCart = async (id: string): Promise<AddToCart | null> => {
  return await prisma.addToCart.findUnique({
    where: { id },
  });
};

const updateAddToCart = async (
  id: string,
  data: Partial<AddToCart>
): Promise<AddToCart | null> => {
  return await prisma.addToCart.update({
    where: { id },
    data,
  });
};

const deleteAddToCart = async (id: string): Promise<AddToCart | null> => {
  return await prisma.addToCart.delete({ where: { id } });
};

export const AddToCartService = {
  createAddToCart,
  getAllAddToCarts,
  getSingleAddToCart,
  updateAddToCart,
  deleteAddToCart,
};
