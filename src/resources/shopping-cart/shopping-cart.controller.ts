import { generateShoppingCartFake } from '@utils/faker';
import { StatusCodes } from 'http-status-codes';
import { TController } from '../types';
import { createResponse } from '@/utils/response';

const shoppingCartController: TController = {
  async getAll(req, res) {
    res.send(createResponse(generateShoppingCartFake(), StatusCodes.OK));
  },
};

export default shoppingCartController;
