import { CourseModel, id } from './models';

const components = {
  components: {
    schemas: {
      id,
      Course: CourseModel,
      Courses: {
        type: 'array',
        items: CourseModel,
      },
    },
  },
};

export default components;
