/* eslint-disable no-console */
import 'reflect-metadata';
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import swaggerUI from 'swagger-ui-express';

import { createConnection } from 'typeorm';
import {
  userRouter,
  User,
  bannersRouter,
  coursesRouter,
  categoriesRouter,
  subCategoriesRouter,
  shoppingCartRouter,
} from '@resources';

import { errorLogger, errorResponder } from '@middlewares/errors';
import swaggerDocument from '@/docs';

dotenv.config();

const PORT = process.env.PORT || 8080;
const { DATABASE_URL } = process.env;
const isProduction = process.env.NODE_ENV === 'production';
const connectionOptions = isProduction
  ? {
      url: DATABASE_URL,
    }
  : {
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    };

createConnection({
  ...connectionOptions,
  ssl: isProduction,
  type: 'postgres',
  synchronize: true,
  logging: true,
  entities: [User],
})
  .then(async () => {
    const app = express();
    app.use(morgan('combined'));
    app.use(express.json());

    app.get('/', (req, res) => {
      res.send('Hello world');
    });

    app.use('/api/v1/', userRouter);
    app.use('/api/v1/', bannersRouter);
    app.use('/api/v1/', coursesRouter);
    app.use('/api/v1/', categoriesRouter);
    app.use('/api/v1/', subCategoriesRouter);
    app.use('/api/v1/', shoppingCartRouter);

    app.use(
      '/api/v1/docs',
      swaggerUI.serve,
      swaggerUI.setup(swaggerDocument, { explorer: true })
    );

    app.use(errorLogger);
    app.use(errorResponder);
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log('===============================================');
      console.log(`> Server is running in http://localhost:${PORT}`);
      console.log('===============================================');
    });
  })
  .catch((err) => {
    console.error(err);
  });
