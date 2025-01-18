import { Router, Request, Response } from 'express';
import  googleLogin  from '../controllers/authController';

const router = Router();

// router.get('/test', (req: Request, res: Response) => {
//     res.send('Test passed');
// });

router.get('/google', googleLogin)

export default router;