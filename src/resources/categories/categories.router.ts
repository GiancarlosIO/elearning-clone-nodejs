import { Router } from 'express';

import categoriesController from './categories.controller';

const categoriesRouter = Router();

categoriesRouter.get('/categories/', categoriesController.getAll);

export default categoriesRouter;
