import express from 'express';
import { BookingRoutes } from '../modules/booking/booking.routes';
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
    path: '/reviews',
    route: ReviewAndRatingRoutes,
  },
  {
    path: '/orders',
    route: BookingRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
