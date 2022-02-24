import { ProductInterface } from '../interfaces/Product';
import ProductModel from '../models/productsModel';

const createProduct = async (
  product: ProductInterface,
): Promise<ProductInterface> => {
  const products: ProductInterface = await ProductModel.createProduct(product);
  return products;
};

export default {
  createProduct,
};
