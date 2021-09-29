import { RequestHandler } from 'express';

export type TController = Record<string, RequestHandler>;
