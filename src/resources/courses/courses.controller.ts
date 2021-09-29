import { TController } from '../types';
import { generateFakeCourse } from './utils';

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
