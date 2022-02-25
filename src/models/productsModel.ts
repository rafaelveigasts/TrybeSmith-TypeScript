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

const getAllProducts = async (): Promise<ProductWithID[]> => {
  const [results] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );
  return results as ProductWithID[];
};

export default { createProduct, getAllProducts };