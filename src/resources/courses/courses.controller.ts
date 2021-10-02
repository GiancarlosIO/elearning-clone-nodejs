import { generateFakeCourse } from '@utils/faker';
import { StatusCodes } from 'http-status-codes';
import { TController } from '../types';

import { createResponse } from '@/utils/response';

const coursesController: TController = {
  async getAll(req, res) {
    const fakeCoures = Array.from({ length: 100 }).map((_, index) =>
      generateFakeCourse()
    );
    res.send(createResponse(fakeCoures, StatusCodes.OK));
  },
  async getById(req, res) {
    res.send(createResponse(generateFakeCourse(), StatusCodes.OK));
  },
};

export default coursesController;
