import getAllCategories from './getAllCategories';
import getCategoryById from './getCategoryById';

import getCoursesByCategoryId from './getCoursesByCategoryId';

export default {
  paths: {
    '/categories/': {
      ...getAllCategories,
    },
    '/categories/{id}': {
      ...getCategoryById,
    },
    '/categories/{id}/courses/': {
      ...getCoursesByCategoryId,
    },
  },
};
