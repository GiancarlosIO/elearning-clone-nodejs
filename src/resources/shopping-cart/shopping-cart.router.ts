import { Router } from 'express';
import shoppingCartController from './shopping-cart.controller';
import { verifyTokenAndAttachUserToRequest } from '../user/middlewares/authentication';

const shoppingCartRouter = Router();

shoppingCartRouter.get(
  '/shopping-cart/',
  verifyTokenAndAttachUserToRequest,
  shoppingCartController.getAll
);

export default shoppingCartRouter;
