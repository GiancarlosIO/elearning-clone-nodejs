import { Request } from 'express';
import { generateShoppingCartFake } from '@utils/faker';
import { StatusCodes } from 'http-status-codes';
import { BaseError } from '@utils/errors';
import { TController } from '../types';
import { createResponse } from '@/utils/response';

const shoppingCartController: TController = {
  async getAll(req, res) {
    res.send(createResponse(generateShoppingCartFake(), StatusCodes.OK));
  },
  async addItem(req: Request<{}, {}, { courseId: number }>, res, next) {
    const { courseId } = req.body;
    if (!courseId) {
      next(
        new BaseError({
          description: 'courseId is required!',
          name: 'courseId is required',
          statusCode: StatusCodes.BAD_REQUEST,
        })
      );
      return;
    }

    if (typeof courseId !== 'number') {
      next(
        new BaseError({
          description: 'invalid courseId value, it must be an integer!',
          name: 'courseId is required',
          statusCode: StatusCodes.BAD_REQUEST,
        })
      );
      return;
    }

    res.send(createResponse(generateShoppingCartFake(), StatusCodes.OK));
  },
  async removeItem(req: Request<{}, {}, { courseId: number }>, res, next) {
    const { courseId } = req.body;
    if (!courseId) {
      next(
        new BaseError({
          description: 'courseId is required!',
          name: 'courseId is required',
          statusCode: StatusCodes.BAD_REQUEST,
        })
      );
      return;
    }

    if (typeof courseId !== 'number') {
      next(
        new BaseError({
          description: 'invalid courseId value, it must be an integer!',
          name: 'courseId is required',
          statusCode: StatusCodes.BAD_REQUEST,
        })
      );
      return;
    }

    res.send(createResponse(generateShoppingCartFake(), StatusCodes.OK));
  },
};

export default shoppingCartController;
