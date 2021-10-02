import { createResponseModel } from '../models';

import { subCategoryTag } from '../constants';

const getAll = {
  get: {
    tags: [subCategoryTag],
    description: 'Get all sub categories',
    operationId: 'getAllSubCategories',
    parameters: [],
    responses: {
      '200': {
        description: 'Get all sub categories',
        content: {
          'application/json': {
            schema: createResponseModel('#/components/schemas/SubCategories'),
          },
        },
      },
    },
  },
};
export default getAll;
