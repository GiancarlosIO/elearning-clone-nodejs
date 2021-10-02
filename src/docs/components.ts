import { CourseModel, id, userModel, bannerModel } from './models';

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
      Banner: bannerModel,
      Banners: {
        type: 'array',
        items: bannerModel,
      },
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
