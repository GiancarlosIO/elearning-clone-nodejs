import getAllBanners from './getAllBanners';

export default {
  paths: {
    '/banners/': {
      ...getAllBanners,
    },
  },
};
