import { Router } from 'express';

import categoriesController from './categories.controller';

const categoriesRouter = Router();

categoriesRouter.get('/categories/', categoriesController.getAll);
categoriesRouter.get('/categories/:id/', categoriesController.getById);
categoriesRouter.get(
  '/categories/:id/courses/',
  categoriesController.getCoursesById
);

export default categoriesRouter;
