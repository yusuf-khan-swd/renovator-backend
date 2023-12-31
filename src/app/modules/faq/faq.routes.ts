import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import { FaqController } from './faq.controller';

const router = express.Router();

router.post('/', auth(ENUM_USER_ROLE.ADMIN), FaqController.createFaq);

router.get('/', FaqController.getAllFaqs);
router.get('/:id', FaqController.getSingleFaq);
router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), FaqController.updateFaq);
router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), FaqController.deleteFaq);

export const FaqRoutes = router;
