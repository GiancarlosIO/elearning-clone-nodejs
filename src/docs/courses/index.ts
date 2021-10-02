import getAll from './getAll';
import getCourse from './getCourse';

export default {
  paths: {
    '/courses/': {
      ...getAll,
    },
    '/courses/{id}': {
      ...getCourse,
    },
  },
};
