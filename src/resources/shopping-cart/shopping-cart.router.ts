import { Router } from 'express';
import shoppingCartController from './shopping-cart.controller';
import { verifyTokenAndAttachUserToRequest } from '../user/middlewares/authentication';

const shoppingCartRouter = Router();

shoppingCartRouter.get(
  '/shopping-cart/',
  verifyTokenAndAttachUserToRequest,
  shoppingCartController.getAll
);
shoppingCartRouter.post(
  '/shopping-cart/add',
  verifyTokenAndAttachUserToRequest,
  shoppingCartController.addItem
);
shoppingCartRouter.post(
  '/shopping-cart/remove',
  verifyTokenAndAttachUserToRequest,
  shoppingCartController.removeItem
);

export default shoppingCartRouter;
