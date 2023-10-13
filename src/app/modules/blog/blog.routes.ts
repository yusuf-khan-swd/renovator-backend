import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import { BlogController } from './blog.controller';

const router = express.Router();

router.post('/', auth(ENUM_USER_ROLE.ADMIN), BlogController.createBlog);

router.get('/', BlogController.getAllBlogs);
router.get('/:id', BlogController.getSingleBlog);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), BlogController.updateBlog);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BlogController.deleteBlog);

export const BlogRoutes = router;
