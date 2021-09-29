import { generateFakeCategory, generateFakeCourses } from '@utils/faker';
import { TController } from '../types';

const categoriesController: TController = {
  async getAll(req, res) {
    const fakeCategories = Array.from({ length: 30 }).map(generateFakeCategory);
    res.send(fakeCategories);
  },
  async getById(req, res) {
    res.send(generateFakeCategory());
  },
  async getCoursesById(req, res) {
    const data = {
      ...generateFakeCategory(),
      courses: generateFakeCourses(),
    };
    res.send(data);
  },
};

export default categoriesController;
