import { Booking } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createBooking = async (data: any): Promise<Booking> => {
  return await prisma.booking.create({ data });
};

const getAllBookings = async (user: any): Promise<Booking[] | undefined> => {
  if (user.role === 'admin') {
    return await prisma.booking.findMany();
  }

  if (user.role === 'customer') {
    return await prisma.booking.findMany({
      where: { userId: user?.userId },
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
    });
  }

  if (user.role === 'customer') {
    return await prisma.booking.findUnique({
      where: { userId: user.userId, id },
    });
  }
};
export const BookingService = {
  createBooking,
  getAllBookings,
  getSingleBooking,
};