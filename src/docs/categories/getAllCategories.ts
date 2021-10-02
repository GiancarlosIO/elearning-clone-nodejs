import { categoryTag } from '../constants';
import { createResponseModel, categoryModel } from '../models';

const getAllCategories = {
  get: {
    tags: [categoryTag],
    description: 'get all categories',
    parameters: [],
    responses: {
      '200': {
        description: 'get all categories',
        content: {
          'application/json': {
            schema: createResponseModel('#/components/schemas/Categories'),
          },
        },
      },
    },
  },
};

export default getAllCategories;
