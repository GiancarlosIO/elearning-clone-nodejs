import { StatusCodes } from 'http-status-codes';

import { generateFakeSubCategory, generateFakeCourses } from '@/utils/faker';
import { createResponse } from '@/utils/response';

import { TController } from '../types';

const subCategoriesController: TController = {
  async getAll(req, res) {
    const subCategoriesFake = Array.from({ length: 10 }).map(
      generateFakeSubCategory
    );
    res.send(createResponse(subCategoriesFake, StatusCodes.OK));
  },
  async getById(req, res) {
    res.send(createResponse(generateFakeSubCategory(), StatusCodes.OK));
  },
  async getCoursesById(req, res) {
    const data = {
      ...generateFakeSubCategory(),
      courses: generateFakeCourses(),
    };
    res.send(createResponse(data, StatusCodes.OK));
  },
};
export default subCategoriesController;
