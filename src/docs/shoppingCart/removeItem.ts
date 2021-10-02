import { createResponseModel, createNumber } from '../models';

import { shoppingCartTag } from '../constants';

const removeItem = {
  post: {
    tags: [shoppingCartTag],
    description: 'Remove an item to the cart',
    operationId: 'RemoveItemToShoppingCart',
    parameters: [
      {
        name: 'x-access-token',
        in: 'header',
        required: true,
        schema: { type: 'string' },
        description: 'jwt token',
      },
    ],
    requestBody: {
      description: 'course id',
      require: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              courseId: createNumber('course id to be removed'),
            },
          },
        },
      },
    },
    responses: {
      '200': {
        description: 'Remove an item to the cart',
        content: {
          'application/json': {
            schema: createResponseModel('#/components/schemas/ShoppingCart'),
          },
        },
      },
    },
  },
};
export default removeItem;
