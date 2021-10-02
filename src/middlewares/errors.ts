import { ErrorRequestHandler } from 'express';

export const errorLogger: ErrorRequestHandler = (err, req, res, next) => {
  console.error('\x1b[31m', err);
  next(err);
};
export const errorResponder: ErrorRequestHandler = (err, req, res, next) => {
  res.header('Content-Type', 'application/json');
  res.status(err.status).send(JSON.stringify(err, null, 4));
};
