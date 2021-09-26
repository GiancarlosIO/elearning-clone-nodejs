/* eslint-disable no-console */
import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';

import { createConnection } from 'typeorm';
import userRouter, { User } from '@resources/user';

import { errorLogger, errorResponder } from '@middlewares/errors';

dotenv.config();

const PORT = process.env.PORT || 8080;

createConnection({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [User],
})
  .then(async () => {
    const app = express();
    app.use(express.json());

    app.get('/', (req, res) => {
      res.send('Hello world');
    });

    app.use('/api/v1/', userRouter);

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
