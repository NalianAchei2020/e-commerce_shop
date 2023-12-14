import express from 'express';
import { createAdmin, updateUser } from '../Controller/user.js';
import { verifiedToken, verifyUser } from '../utils/verifyToken.js';
const userRouter = express.Router();

userRouter.get('/admin', createAdmin);
userRouter.put('/:id', verifiedToken, verifyUser, updateUser);

export default userRouter;
