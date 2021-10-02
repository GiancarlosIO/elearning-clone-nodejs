import getCurrentUser from './getCurrentUser';
import createUser from './createUser';
import loginUser from './login';

export default {
  paths: {
    '/auth/me/': {
      ...getCurrentUser,
    },
    '/auth/create-user/': {
      ...createUser,
    },
    '/auth/login/': {
      ...loginUser,
    },
  },
};
