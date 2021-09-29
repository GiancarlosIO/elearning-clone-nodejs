import { generateFakeCategory } from '@utils/faker';
import { TController } from '../types';

const categoriesController: TController = {
  async getAll(req, res) {
    const fakeCategories = Array.from({ length: 30 }).map(generateFakeCategory);
    res.send(fakeCategories);
  },
};

export default categoriesController;
