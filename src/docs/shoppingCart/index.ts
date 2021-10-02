import getItems from './getItems';

export default {
  paths: {
    '/shopping-cart/': {
      ...getItems,
    },
  },
};
