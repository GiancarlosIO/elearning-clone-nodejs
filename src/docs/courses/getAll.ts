import { createResponseModel } from '../models';

const getAll = {
  get: {
    tags: ['Courses operations'],
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
