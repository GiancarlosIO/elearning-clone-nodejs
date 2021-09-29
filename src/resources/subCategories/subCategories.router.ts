import { Router } from 'express';
import subCategoriesController from './subCategories.controller';

const subCategoriesRouter = Router();

subCategoriesRouter.get('/sub-categories/', subCategoriesController.getAll);
subCategoriesRouter.get(
  '/sub-categories/:id/',
  subCategoriesController.getById
);
subCategoriesRouter.get(
  '/sub-categories/:id/courses/',
  subCategoriesController.getCoursesById
);

export default subCategoriesRouter;
