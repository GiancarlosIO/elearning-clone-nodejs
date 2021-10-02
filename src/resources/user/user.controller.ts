import { Request, RequestHandler } from 'express';
import { getRepository } from 'typeorm';
import statusCode from 'http-status-codes';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { classToPlain } from 'class-transformer';

import { BaseError } from '@utils/errors';
import { jwtTokenExpiration } from '@constants';
import { createResponse } from '@utils/response';
import { User } from './user.entity';
import userService from './user.service';
import { TUserCredentials } from './user.types';
import Context from '@/context';

type TUserController = Record<string, RequestHandler>;
const userController: TUserController = {
  async getCurrentUser(req, res) {
    const { user }: Context = Context.get(req);
    const currentUser = await userService.getCurrentUser(user.id);

    res.status(statusCode.OK).send(createResponse(currentUser, statusCode.OK));
  },
  async createUser(req: Request<{}, {}, TUserCredentials>, res, next) {
    try {
      const { user, token } = await userService.createUser(req.body);

      res.status(statusCode.OK).send(
        createResponse(
          {
            user,
            token,
          },
          statusCode.OK
        )
      );
    } catch (err) {
      next(
        new BaseError({
          name: 'Invalid data',
          statusCode: statusCode.BAD_REQUEST,
          description: err.message,
        })
      );
    }
  },
  async login(req: Request<{}, {}, TUserCredentials>, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        next(
          new BaseError({
            name: 'Invalid data',
            statusCode: statusCode.BAD_REQUEST,
            description: 'email and password are required',
          })
        );
        return;
      }
      const userRepository = getRepository(User);
      const user = await userRepository
        .createQueryBuilder('user')
        .addSelect('user.password')
        .where('user.email = :email', { email })
        .getOne();

      if (!user) {
        next(
          new BaseError({
            name: 'authorization',
            statusCode: statusCode.BAD_REQUEST,
            description: 'invalid credentials',
          })
        );
        return;
      }
      console.log({ user });
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (isValidPassword) {
        const token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.SECRET_KEY,
          {
            expiresIn: jwtTokenExpiration,
          }
        );
        res.status(statusCode.OK).send({
          token,
          user: classToPlain(user),
        });
      } else {
        next(
          new BaseError({
            name: 'authorization',
            statusCode: statusCode.UNAUTHORIZED,
            description: 'invalid credentials',
          })
        );
      }
    } catch (err) {
      console.log({ err });

      next(
        new BaseError({
          name: 'authorization',
          statusCode: statusCode.BAD_REQUEST,
          description: 'server error',
        })
      );
    }
  },
};

export default userController;
