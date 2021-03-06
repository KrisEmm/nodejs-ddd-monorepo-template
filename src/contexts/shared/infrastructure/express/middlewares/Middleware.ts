import { NextFunction, Request, Response } from 'express';

export interface ErrorMiddleware {
  execute(req: Request, res: Response, next: NextFunction): void;
}
