import { Router } from 'express';
import shoppingCartController from './shopping-cart.controller';

const shoppingCartRouter = Router();

shoppingCartRouter.get('/shopping-cart/', shoppingCartController.getAll);

export default shoppingCartRouter;
