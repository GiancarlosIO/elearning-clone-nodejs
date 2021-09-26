import { Router, Request } from 'express';

import userController from './user.controller';
import { verifyTokenAndAttachUserToRequest } from './middlewares/authentication';

const userRouter = Router();

userRouter.get(
  '/me/',
  verifyTokenAndAttachUserToRequest,
  userController.getCurrentUser
);
userRouter.post('/create-user/', userController.createUser);
userRouter.post('/login/', userController.login);

export default userRouter;
