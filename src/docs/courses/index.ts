import getAll from './getAll';
import getCourse from './getCourse';

export default {
  paths: {
    '/courses/': {
      ...getAll,
    },
    '/courses/news/': {
      ...getAll,
    },
    '/courses/recommended-by-community/': {
      ...getAll,
    },
    '/courses/{id}': {
      ...getCourse,
    },
  },
};
