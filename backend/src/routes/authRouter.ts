import { Router, Request, Response } from 'express';
import  googleLogin  from '../controllers/authController';

const router = Router();

router.get('/google', googleLogin)

export default router;