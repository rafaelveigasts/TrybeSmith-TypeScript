import { Request, Response } from 'express';
import dotenv from 'dotenv';
import productService from '../services/productService';
import StatusCode from '../enums/StatusCode';

dotenv.config();

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;

  try {
    const newProduct = await productService.createProduct(productData);
    res.status(StatusCode.CREATED).send(newProduct);
  } catch (err) {
    res.status(StatusCode.BAD_REQUEST).send(err);
  }
};

export default createProduct;
