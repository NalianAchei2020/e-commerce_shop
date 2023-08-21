import express from 'express';
import { createAdmin } from '../Controller/user.js';
const userRouter = express.Router();

userRouter.get('/admin', createAdmin);

export default userRouter;
