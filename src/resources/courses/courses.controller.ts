import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { BaseError } from '@utils';
import { TController } from '../types';

import { createResponse, getPageAndLimitFromQuery } from '@/utils';

import coursesService from './courses.service';

const coursesController: TController = {
  async getAll(req, res, next) {
    const { page, limit } = getPageAndLimitFromQuery(req.query);

    if ((page && !limit) || (limit && !page)) {
      next(
        new BaseError({
          description:
            'page and limit must be used together, looks like your forgot to send the value for one of them',
          name: 'missing pagination param',
          statusCode: StatusCodes.BAD_REQUEST,
        })
      );
      return;
    }

    const fakeCourses = await coursesService.getAll({
      limit: limit || 100,
      page: page || 1,
    });
    const result = createResponse(fakeCourses, StatusCodes.OK);

    if (limit && page) {
      res.send({
        ...result,
        pagination: {
          totalPages: 12,
          totalCount: 100,
          currentPage: page,
        },
      });
    }

    res.send(result);
  },
  async getById(req: Request<{}, {}, { courseId: number }>, res) {
    const fakeCourse = await coursesService.getById(req.body.courseId);
    res.send(createResponse(fakeCourse, StatusCodes.OK));
  },
};

export default coursesController;
