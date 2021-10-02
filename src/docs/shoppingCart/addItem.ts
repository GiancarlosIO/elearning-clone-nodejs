import { createResponseModel, createNumber } from '../models';

import { shoppingCartTag } from '../constants';

const addItem = {
  post: {
    tags: [shoppingCartTag],
    description: 'Add an item to the cart',
    operationId: 'addItemToShoppingCart',
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
              courseId: createNumber('course id to be added'),
            },
          },
        },
      },
    },
    responses: {
      '200': {
        description: 'Add an item to the cart',
        content: {
          'application/json': {
            schema: createResponseModel('#/components/schemas/ShoppingCart'),
          },
        },
      },
    },
  },
};
export default addItem;
