import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import StatusCode from '../enums/StatusCode';

dotenv.config();

const Secret: jwt.Secret = process.env.SECRET || 'chave';

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(StatusCode.UNAUTHORIZED).json({
      error: 'Token not found',
    });
  }
  try {
    jwt.verify(authorization, Secret);
    next();
  } catch (err) {
    return res.status(StatusCode.UNAUTHORIZED).json({
      error: 'Invalid token',
    });
  }
};

export default tokenValidation;