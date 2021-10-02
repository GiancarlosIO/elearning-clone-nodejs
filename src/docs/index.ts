import basicInfo from './basicInfo';
import server from './server';
import components from './components';
import tags from './tags';

import courses from './courses';
import auth from './auth';
import banners from './banners';
import categories from './categories';
import subCategories from './subCategories';
import shoppingCart from './shoppingCart';

export default {
  ...basicInfo,
  ...server,
  ...components,
  ...tags,
  paths: {
    ...courses.paths,
    ...auth.paths,
    ...banners.paths,
    ...categories.paths,
    ...subCategories.paths,
    ...shoppingCart.paths,
  },
};
