import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import { OrderController } from './order.controller';

const router = express.Router();

router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.USER),
  OrderController.createOrder
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  OrderController.getAllOrders
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.USER),
  OrderController.getAllOrdersForCustomer
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN),
  OrderController.getAllOrdersForAdmin
);

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  OrderController.getSingleOrder
);

export const OrderRoutes = router;
