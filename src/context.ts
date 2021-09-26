import { Request } from 'express';

import { TUserData } from '@resources/user/user.types';

export default class Context {
  public user: TUserData | undefined;

  static bindings = new WeakMap<Request, Context>();

  static bind(req: Request, userData: TUserData): void {
    const ctx = new Context();
    ctx.user = userData;
    Context.bindings.set(req, ctx);
  }

  static get(req: Request): Context | null {
    return Context.bindings.get(req) || null;
  }
}
