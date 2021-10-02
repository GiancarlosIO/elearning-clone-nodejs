import { categoryTag } from '../constants';
import { createResponseModel } from '../models';

const getCategoryById = {
  get: {
    tags: [categoryTag],
    description: 'get category by id',
    parameters: [
      {
        in: 'path',
        name: 'id',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'category id',
      },
    ],
    responses: {
      '200': {
        description: 'get category by id',
        content: {
          'application/json': {
            schema: createResponseModel('#/components/schemas/Category'),
          },
        },
      },
    },
  },
};

export default getCategoryById;
