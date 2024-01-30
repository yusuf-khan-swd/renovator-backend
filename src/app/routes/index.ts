import express from 'express';
import { AboutUsRoutes } from '../modules/aboutUs/aboutUs.routes';
import { BlogRoutes } from '../modules/blog/blog.routes';
import { BookingRoutes } from '../modules/booking/booking.routes';
import { CartRoutes } from '../modules/cart/cart.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { FaqRoutes } from '../modules/faq/faq.routes';
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
    path: '/categories',
    route: CategoryRoutes,
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
  {
    path: '/faqs',
    route: FaqRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/about',
    route: AboutUsRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
