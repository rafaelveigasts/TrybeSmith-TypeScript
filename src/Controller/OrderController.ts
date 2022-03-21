import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import OrderModel from '../models/OrderModel';
import StatusCode from '../enums/StatusCode';

const secret = process.env.SECRET || 'chave';

const createOrder = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const { products } = req.body;

  if (!authorization) {
    return res.status(StatusCode.UNAUTHORIZED).json({
      error: 'Token not found',
    });
  }

  const decode = jwt.verify(authorization, secret);

  const idUser = Object.values(decode)[0];

  const order = await OrderModel.createOrder(idUser, products);

  return res.status(StatusCode.CREATED).json(order);
};

export default createOrder;