import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import { ReviewAndRatingController } from './reviewAndRating.controller';

const router = express.Router();

router.post(
  '/create-review',
  auth(ENUM_USER_ROLE.ADMIN),
  ReviewAndRatingController.createReviewAndRating
);

router.get('/', ReviewAndRatingController.getAllReviewAndRatings);
router.get('/:id', ReviewAndRatingController.getSingleReviewAndRating);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ReviewAndRatingController.updateReviewAndRating
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ReviewAndRatingController.deleteReviewAndRating
);

export const ReviewAndRatingRoutes = router;
