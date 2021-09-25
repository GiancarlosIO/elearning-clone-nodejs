export class BaseError extends Error {
  description: string;

  statusCode: number;

  name: string;

  constructor(name: string, statusCode: number, description: string) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.description = name;
    this.statusCode = statusCode;
  }
}

export default BaseError;
