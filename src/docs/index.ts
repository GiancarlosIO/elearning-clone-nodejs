import basicInfo from './basicInfo';
import server from './server';
import components from './components';
import tags from './tags';

import courses from './courses';
import auth from './auth';

export default {
  ...basicInfo,
  ...server,
  ...components,
  ...tags,
  ...courses,
  ...auth,
};
