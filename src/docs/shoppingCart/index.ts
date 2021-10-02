import getItems from './getItems';
import addItem from './addItem';
import removeItem from './removeItem';

export default {
  paths: {
    '/shopping-cart/': {
      ...getItems,
    },
    '/shopping-cart/add/': {
      ...addItem,
    },
    '/shopping-cart/remove/': {
      ...removeItem,
    },
  },
};
