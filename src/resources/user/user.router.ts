import { Router } from 'express';

import userController from './user.controller';
import { verifyTokenAndAttachUserToRequest } from './middlewares/authentication';

const userRouter = Router();

userRouter.get(
  '/auth/me/',
  verifyTokenAndAttachUserToRequest,
  userController.getCurrentUser
);
userRouter.post('/auth/create-user/', userController.createUser);
userRouter.post('/auth/login/', userController.login);

export default userRouter;
