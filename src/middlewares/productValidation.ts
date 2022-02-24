import { NextFunction, Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';

export const productNameValidation = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (name === undefined) {
    return res.status(StatusCode.BAD_REQUEST).json({
      error: 'Name is required' });
  }

  if (typeof name !== 'string') {
    return res.status(StatusCode.UNPROCCESABLE_ENTITY).json({
      error: 'Name must be a string' });
  }

  if (name.length <= 2) {
    return res.status(StatusCode.UNPROCCESABLE_ENTITY).json({
      error: 'Name must be longer than 2 characters' });
  }
  next();
};

export const productAmountValidation = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;

  if (amount === undefined) {
    return res.status(StatusCode.BAD_REQUEST).json({
      error: 'Amount is required' });
  }

  if (typeof amount !== 'string') {
    return res.status(StatusCode.UNPROCCESABLE_ENTITY).json({
      error: 'Amount must be a string' });
  }

  if (amount.length <= 2) {
    return res.status(StatusCode.UNPROCCESABLE_ENTITY).json({
      error: 'Amount must be longer than 2 characters' });
  }
  next();
};