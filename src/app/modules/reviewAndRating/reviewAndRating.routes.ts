import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import { ReviewAndRatingController } from './reviewAndRating.controller';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.USER),
  ReviewAndRatingController.createReviewAndRating
);

router.get('/service/:id', ReviewAndRatingController.serviceReviews);
router.get(
  '/user/:id',
  auth(ENUM_USER_ROLE.USER),
  ReviewAndRatingController.userReviews
);

router.get('/', ReviewAndRatingController.getAllReviewAndRatings);
router.get('/:id', ReviewAndRatingController.getSingleReviewAndRating);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  ReviewAndRatingController.updateReviewAndRating
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  ReviewAndRatingController.deleteReviewAndRating
);

export const ReviewAndRatingRoutes = router;
