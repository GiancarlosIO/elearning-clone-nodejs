import { createResponseModel } from '../models';
import { authTag } from '../constants';

const getAll = {
  get: {
    tags: [authTag],
    description: 'Get the current user data',
    operationId: 'getCurrentUser',
    parameters: [
      {
        name: 'x-access-token',
        in: 'header',
        required: true,
        schema: {
          type: 'string',
        },
        description: 'jwt token',
      },
    ],
    responses: {
      '200': {
        description: 'current user data',
        content: {
          'application/json': {
            schema: createResponseModel('#/components/schemas/User'),
          },
        },
      },
    },
  },
};
export default getAll;
