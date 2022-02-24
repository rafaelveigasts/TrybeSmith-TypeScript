import { ProductInterface } from '../interfaces/Product';
import ProductModel from '../models/productsModel';

const createProduct = async (
  product: ProductInterface,
) => {
  const products = await ProductModel.createProduct(product);
  return products;
};

export default {
  createProduct,
};
