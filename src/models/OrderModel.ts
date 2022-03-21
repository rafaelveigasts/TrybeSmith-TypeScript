import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const createOrder = async (userId: number, products: []) => {
  const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
  await connection.execute<ResultSetHeader>(query, [userId]);

  return {
    userId,
    products,
  };
};

export default {
  createOrder,
};
