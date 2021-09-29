import { Router } from 'express';

import bannersController from './banners.controller';

const bannersRouter = Router();

bannersRouter.get('/banners/', bannersController.getAll);

export default bannersRouter;
