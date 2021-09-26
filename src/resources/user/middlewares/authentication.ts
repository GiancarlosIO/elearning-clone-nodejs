import { RequestHandler, Request } from 'express';
import jwt from 'jsonwebtoken';
import httpStatusCode from 'http-status-codes';
import { BaseError } from '@utils/errors';

import { jwtTokenHeaderName } from '@constants';
import Context from '@/context';
import { TUserData } from '../user.types';

export const verifyTokenAndAttachUserToRequest: RequestHandler = (
  req,
  res,
  next
) => {
  const token = req.headers[jwtTokenHeaderName] as string;

  if (!token) {
    next(
      new BaseError({
        name: 'Auth',
        statusCode: httpStatusCode.UNAUTHORIZED,
        description: 'you must be logged to access to these resoureces',
      })
    );
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY) as TUserData;
    console.log({ decoded });

    Context.bind(req, decoded);
  } catch (err) {
    next(
      new BaseError({
        name: 'Auth',
        description: 'invalid token',
        statusCode: httpStatusCode.UNAUTHORIZED,
      })
    );
    return;
  }

  next();
};
