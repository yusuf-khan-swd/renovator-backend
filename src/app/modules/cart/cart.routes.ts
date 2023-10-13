import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import { CartController } from './cart.controller';

const router = express.Router();

router.post('/', auth(ENUM_USER_ROLE.USER), CartController.createCart);

router.get('/', auth(ENUM_USER_ROLE.USER), CartController.getAllCarts);
router.get('/:id', auth(ENUM_USER_ROLE.USER), CartController.getSingleCart);
router.patch('/:id', auth(ENUM_USER_ROLE.USER), CartController.updateCart);
router.delete('/:id', auth(ENUM_USER_ROLE.USER), CartController.deleteCart);

export const CartRoutes = router;
