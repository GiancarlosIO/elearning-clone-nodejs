import basicInfo from './basicInfo';
import server from './server';
import components from './components';
import tags from './tags';

import courses from './courses';
import auth from './auth';
import banners from './banners';

export default {
  ...basicInfo,
  ...server,
  ...components,
  ...tags,
  ...courses,
  ...auth,
  ...banners,
};
