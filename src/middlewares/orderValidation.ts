import { Request, Response, NextFunction } from 'express';
import StatusCode from '../enums/StatusCode';

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;

  if (!products) {
    return res.status(StatusCode.BAD_REQUEST).json({
      error: 'Products is required',
    });
  }

  if (!Array.isArray(products)) {
    return res.status(StatusCode.BAD_REQUEST).json({
      error: 'Products must be an array of numbers',
    });
  }

  if (products.length === 0) {
    return res.status(StatusCode.BAD_REQUEST).json({
      error: 'Products can\'t be empty',
    });
  }

  next();
};

export default validateOrder;