import { Router } from 'express';

import coursesController from './courses.controller';

const coursesRouter = Router();

coursesRouter.get('/courses/', coursesController.getAll);
coursesRouter.get('/courses/news/', coursesController.getAll);
coursesRouter.get(
  '/courses/recommended-by-community/',
  coursesController.getAll
);
coursesRouter.get('/courses/:id/', coursesController.getById);

export default coursesRouter;
