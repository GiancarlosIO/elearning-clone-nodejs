import getAll from './getAll';
import getSubCategoryById from './getBySubCategoryById';
import getCoursesBySubCategoryId from './getCoursesBySubCategoryId';

export default {
  paths: {
    '/sub-categories/': {
      ...getAll,
    },
    '/sub-categories/{id}': {
      ...getSubCategoryById,
    },
    '/sub-categories/{id}/courses/': {
      ...getCoursesBySubCategoryId,
    },
  },
};
