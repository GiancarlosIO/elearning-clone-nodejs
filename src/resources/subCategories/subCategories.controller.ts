import { TController } from '../types';

import { generateFakeSubCategory, generateFakeCourses } from '@/utils/faker';

const subCategoriesController: TController = {
  async getAll(req, res) {
    const subCategoriesFake = Array.from({ length: 10 }).map(
      generateFakeSubCategory
    );
    res.send(subCategoriesFake);
  },
  async getById(req, res) {
    res.send(generateFakeSubCategory());
  },
  async getCoursesById(req, res) {
    const data = {
      ...generateFakeSubCategory(),
      courses: generateFakeCourses(),
    };
    res.send(data);
  },
};
export default subCategoriesController;
