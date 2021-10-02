import { subCategoryTag } from '../constants';
import { createResponseModel } from '../models';

const getSubCategoryById = {
  get: {
    tags: [subCategoryTag],
    description: 'get sub category by id',
    parameters: [
      {
        in: 'path',
        name: 'id',
        schema: {
          $ref: '#/components/schemas/id',
        },
        required: true,
        description: 'sub category id',
      },
    ],
    operationId: 'getSubCategoryById',
    responses: {
      '200': {
        description: 'get sub category by id',
        content: {
          'application/json': {
            schema: createResponseModel('#/components/schemas/SubCategory'),
          },
        },
      },
    },
  },
};

export default getSubCategoryById;
