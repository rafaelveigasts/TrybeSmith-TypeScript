import { ProductInterface } from '../interfaces/Product';
import ProductModel from '../models/productsModel';

const createProduct = async (
  product: ProductInterface,
) => {
  const products = await ProductModel.createProduct(product);
  return products;
};

const getAllProducts = async () => {
  const products = await ProductModel.getAllProducts();
  return products;
};

export default {
  createProduct,
  getAllProducts,
};
