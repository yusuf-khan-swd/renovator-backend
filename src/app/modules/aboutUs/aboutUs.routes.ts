import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import { AboutUsController } from './aboutUs.controller';

const router = express.Router();

router.post('/', auth(ENUM_USER_ROLE.ADMIN), AboutUsController.createAboutUs);

router.get('/', AboutUsController.getAllAboutUs);
router.get('/:id', AboutUsController.getSingleAboutUs);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AboutUsController.updateAboutUs
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AboutUsController.deleteAboutUs
);

export const AboutUsRoutes = router;
