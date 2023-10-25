import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import { ServiceController } from './service.controller';

const router = express.Router();

router.post('/', auth(ENUM_USER_ROLE.ADMIN), ServiceController.createService);

router.get('/upcoming', ServiceController.getUpcomingServices);
router.get('/ongoing', ServiceController.getOngoingServices);
router.get('/', ServiceController.getAllServices);
router.get('/:id', ServiceController.getSingleService);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ServiceController.updateService
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  ServiceController.deleteService
);

export const ServiceRoutes = router;
