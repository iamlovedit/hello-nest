import { Request, Response, NextFunction } from 'express';
export function notFound(req: Request, res: Response, next: NextFunction) {
  if (!res.headersSent) {
    res.status(200).json({
      succeed: false,
      messahe: `request path not found,${req.url}`,
      code: 404,
    });
  } else {
    next();
  }
}
