import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { ProductInterface, ProductWithID } from '../interfaces/Product';

const createProduct = async (
  product: ProductInterface,
): Promise<ProductWithID> => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  const newProduct: ProductWithID = {
    id: result.insertId,
    name,
    amount,
  };

  return newProduct;
};

export default createProduct;
