import { z } from 'zod';

const createUserZodValidation = z.object({
  name: z.string({ required_error: 'name is required' }),
  email: z.string({ required_error: 'email is required' }).email(),
  password: z.string().min(6).max(32),
});

const updateUserZodValidation = z.object({
  name: z.string({ required_error: 'name is required' }).optional(),
  email: z.string({ required_error: 'email is required' }).email().optional(),
  role: z.enum(['user', 'admin', 'super_admin']).optional(),
});

const updateUserProfileZodValidation = z.object({
  name: z.string({ required_error: 'name is required' }).optional(),
  email: z.string({ required_error: 'email is required' }).email().optional(),
  password: z.string().min(6).max(32).optional(),
  role: z.enum(['user', 'admin', 'super_admin']).optional(),
});

export const UserValidation = {
  createUserZodValidation,
  updateUserZodValidation,
  updateUserProfileZodValidation,
};
