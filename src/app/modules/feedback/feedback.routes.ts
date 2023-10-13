import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import { FeedbackController } from './feedback.controller';

const router = express.Router();

router.post('/', auth(ENUM_USER_ROLE.USER), FeedbackController.createFeedback);

router.get('/', FeedbackController.getAllFeedbacks);
router.get('/:id', FeedbackController.getSingleFeedback);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  FeedbackController.updateFeedback
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  FeedbackController.deleteFeedback
);

export const FeedbackRoutes = router;
