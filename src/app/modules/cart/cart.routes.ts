import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import { CartController } from './cart.controller';

const router = express.Router();

router.post('/', auth(ENUM_USER_ROLE.USER), CartController.createCart);

router.get('/', CartController.getAllCarts);
router.get('/:id', CartController.getSingleCart);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), CartController.updateCart);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), CartController.deleteCart);

export const CartRoutes = router;
