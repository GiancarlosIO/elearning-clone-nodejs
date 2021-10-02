import { generateFakeCategory, generateFakeCourses } from '@utils/faker';
import { StatusCodes } from 'http-status-codes';
import { TController } from '../types';
import { createResponse } from '@/utils/response';

const categoriesController: TController = {
  async getAll(req, res) {
    const fakeCategories = Array.from({ length: 30 }).map(generateFakeCategory);
    res.send(createResponse(fakeCategories, StatusCodes.OK));
  },
  async getById(req, res) {
    res.send(createResponse(generateFakeCategory(), StatusCodes.OK));
  },
  async getCoursesById(req, res) {
    const data = {
      ...generateFakeCategory(),
      courses: generateFakeCourses({ length: 100 }),
    };
    res.send(createResponse(data, StatusCodes.OK));
  },
};

export default categoriesController;
