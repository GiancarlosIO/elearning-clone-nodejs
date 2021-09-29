import { generateFakeCourse } from '@utils/faker';
import { TController } from '../types';

const coursesController: TController = {
  async getAll(req, res) {
    const fakeCoures = Array.from({ length: 100 }).map((_, index) =>
      generateFakeCourse()
    );
    res.send(fakeCoures);
  },
  async getById(req, res) {
    res.send(generateFakeCourse());
  },
};

export default coursesController;
