import { Booking } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createBooking = async (data: any): Promise<Booking> => {
  return await prisma.booking.create({ data });
};

const getAllBookings = async (user: any): Promise<Booking[] | undefined> => {
  if (user.role === 'admin') {
    return await prisma.booking.findMany({
      include: { service: true, user: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  if (user.role === 'user') {
    return await prisma.booking.findMany({
      include: { service: true, user: true },
      where: { userId: user?.userId },
      orderBy: { createdAt: 'desc' },
    });
  }
};

const getSingleBooking = async (
  id: string,
  user: any
): Promise<Booking | null | undefined> => {
  if (user.role === 'admin') {
    return await prisma.booking.findUnique({
      where: { id },
      include: { service: { include: { category: true } }, user: true },
    });
  }

  if (user.role === 'customer') {
    return await prisma.booking.findUnique({
      where: { userId: user.userId, id },
    });
  }
};

const updateBooking = async (
  id: string,
  data: Partial<Booking>
): Promise<Booking | null> => {
  return await prisma.booking.update({
    where: { id },
    data,
  });
};

const deleteBooking = async (id: string): Promise<Booking | null> => {
  return await prisma.booking.delete({ where: { id } });
};

export const BookingService = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
};
