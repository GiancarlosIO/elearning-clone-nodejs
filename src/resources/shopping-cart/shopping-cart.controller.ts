import { generateShoppingCartFake } from '@utils/faker';
import { TController } from '../types';

const shoppingCartController: TController = {
  async getAll(req, res) {
    res.send(generateShoppingCartFake());
  },
};

export default shoppingCartController;
