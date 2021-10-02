import {
  CourseModel,
  id,
  userModel,
  bannerModel,
  categoryModel,
} from './models';

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
      Category: categoryModel,
      Categories: {
        type: 'array',
        items: categoryModel,
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
