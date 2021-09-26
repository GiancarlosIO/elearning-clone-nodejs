import { TUserData } from '@resources/user/user.types';

declare namespace Express {
  export interface Request {
    user?: string;
  }
}
