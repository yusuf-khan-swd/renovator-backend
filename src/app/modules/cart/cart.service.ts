import { Cart } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createCart = async (data: Cart): Promise<Cart> => {
  return await prisma.cart.create({ data });
};

const getAllCarts = async (user: any): Promise<Cart[]> => {
  const userId = user?.userId;
  return await prisma.cart.findMany({
    where: { userId: userId },
    include: {
      service: { include: { category: true } },
    },
    orderBy: { createdAt: 'desc' },
  });
};

const getSingleCart = async (id: string): Promise<Cart | null> => {
  return await prisma.cart.findUnique({
    where: { id },
  });
};

const updateCart = async (
  id: string,
  data: Partial<Cart>
): Promise<Cart | null> => {
  return await prisma.cart.update({
    where: { id },
    data,
  });
};

const deleteCart = async (id: string): Promise<Cart | null> => {
  return await prisma.cart.delete({ where: { id } });
};

export const CartService = {
  createCart,
  getAllCarts,
  getSingleCart,
  updateCart,
  deleteCart,
};
