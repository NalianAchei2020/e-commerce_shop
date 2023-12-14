import express from 'express';
import { createAdmin, updateUser } from '../Controller/user.js';
const userRouter = express.Router();

userRouter.get('/admin', createAdmin);
userRouter.put('/:id', updateUser);

export default userRouter;
