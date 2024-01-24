import express from 'express';
import * as authController from '../controllers/auth-controller';
import { validateRegistration } from '../middlewares/auth-middleware';

const router = express.Router();

// Authentication routes
router.post('/auth/register', validateRegistration, authController.registerUser);
router.post('/auth/login', authController.loginUser);
router.post('/auth/logout',authController.logoutUser);

export default router;
