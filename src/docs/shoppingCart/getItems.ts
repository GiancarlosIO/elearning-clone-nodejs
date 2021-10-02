import { createResponseModel } from '../models';

import { shoppingCartTag } from '../constants';

const getItems = {
  get: {
    tags: [shoppingCartTag],
    description: 'Get all shopping cart items',
    operationId: 'getShoppingCartItems',
    parameters: [],
    responses: {
      '200': {
        description: 'get all shopping cart items',
        content: {
          'application/json': {
            schema: createResponseModel('#/components/schemas/ShoppingCart'),
          },
        },
      },
    },
  },
};
export default getItems;
