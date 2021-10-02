import { CourseModel, id, userModel } from './models';

const components = {
  components: {
    schemas: {
      id,
      Course: CourseModel,
      Courses: {
        type: 'array',
        items: CourseModel,
      },
      User: userModel,
    },
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'x-access-token',
      },
    },
  },
};

export default components;
