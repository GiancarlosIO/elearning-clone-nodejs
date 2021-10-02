import { bannersTag } from '../constants';
import { createResponseModel } from '../models';

const getAllBanners = {
  get: {
    tags: [bannersTag],
    description: 'get all banners',
    parameters: [],
    responses: {
      '200': {
        description: 'get all banners',
        content: {
          'application/json': {
            schema: createResponseModel('#/components/schemas/Banners'),
          },
        },
      },
    },
  },
};

export default getAllBanners;
