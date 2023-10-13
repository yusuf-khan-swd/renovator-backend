import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import { BookingController } from './booking.controller';

const router = express.Router();

router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.USER),
  BookingController.createBooking
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  BookingController.getAllBookings
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  BookingController.getSingleBooking
);

export const BookingRoutes = router;
