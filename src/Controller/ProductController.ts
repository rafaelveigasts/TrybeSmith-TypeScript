import { Request, Response } from 'express';
import dotenv from 'dotenv';
import productService from '../services/productService';
import StatusCode from '../enums/StatusCode';
import { ProductWithID } from '../interfaces/Product';

dotenv.config();

export const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;

  try {
    const newProduct = await productService.createProduct(productData);
    const { id, name, amount } = newProduct as ProductWithID;
    res.status(StatusCode.CREATED).json({ item: { id, name, amount } });
  } catch (err) {
    res.status(StatusCode.BAD_REQUEST).send(err);
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  const productData = await productService.getAllProducts();
  res.status(StatusCode.OK).json(productData);
};
