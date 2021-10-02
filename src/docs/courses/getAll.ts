import { createResponseModel } from '../models';

import { coursesTag } from '../constants';

const getAll = {
  get: {
    tags: [coursesTag],
    description: 'Get all courses',
    operationId: 'courseGetAll',
    parameters: [],
    responses: {
      '200': {
        description: 'courses were obtained',
        content: {
          'application/json': {
            schema: createResponseModel('#/components/schemas/Courses'),
          },
        },
      },
    },
  },
};
export default getAll;
