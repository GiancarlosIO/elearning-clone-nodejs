/* eslint max-classes-per-file: "off" */

import httpStatusCode from 'http-status-codes';

type TErrorPayload = {
  name: string;
  statusCode: number;
  description: string;
};

export class BaseError extends Error {
  description: string;

  statusCode: number;

  name: string;

  constructor(payload: TErrorPayload) {
    super(payload.description);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = payload.name;
    this.description = payload.description;
    this.statusCode = payload.statusCode;
  }
}

export class Api404Error extends BaseError {
  constructor({
    name,
    statusCode = httpStatusCode.NOT_FOUND,
    description = 'not found',
  }: TErrorPayload) {
    super({
      name,
      statusCode,
      description,
    });
  }
}

export default BaseError;
