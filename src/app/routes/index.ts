import express from 'express';
import { BookingRoutes } from '../modules/booking/booking.routes';
import { CartRoutes } from '../modules/cart/cart.routes';
import { FeedbackRoutes } from '../modules/feedback/feedback.routes';
import { ReviewAndRatingRoutes } from '../modules/reviewAndRating/reviewAndRating.routes';
import { ServiceRoutes } from '../modules/service/service.routes';
import { UserRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },
  {
    path: '/bookings',
    route: BookingRoutes,
  },
  {
    path: '/reviews',
    route: ReviewAndRatingRoutes,
  },
  {
    path: '/carts',
    route: CartRoutes,
  },
  {
    path: '/feedbacks',
    route: FeedbackRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
