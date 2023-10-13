import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import { AddToCartController } from './addToCart.controller';

const router = express.Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.USER),
  AddToCartController.createAddToCart
);

router.get('/', AddToCartController.getAllAddToCarts);
router.get('/:id', AddToCartController.getSingleAddToCart);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AddToCartController.updateAddToCart
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  AddToCartController.deleteAddToCart
);

export const AddToCartRoutes = router;
