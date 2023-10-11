import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post(
  '/create-category',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.createCategory
);

router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getSingleCategory);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.updateCategory
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteCategory
);

export const CategoryRoutes = router;
