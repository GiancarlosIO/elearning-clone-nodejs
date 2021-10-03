import { generateFakeCourse } from '@utils/faker';

type TPagination = {
  limit?: number;
  page?: number;
};
const coursesService = {
  async getAll({ limit, page }: TPagination = { limit: 100, page: 1 }) {
    const fakeCoures = Array.from({ length: limit }).map((_, index) =>
      generateFakeCourse()
    );

    return fakeCoures;
  },
  async getById(courseId: number) {
    return generateFakeCourse(false, true);
  },
};
export default coursesService;
