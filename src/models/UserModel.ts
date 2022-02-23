import { ResultSetHeader } from 'mysql2';
import connection from './connection';

import { UserSemID, UserWithID } from '../interfaces/User';

const createUser = async (user: UserSemID): Promise<UserWithID> => {
  const { username, classe, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );

  const newUser: UserWithID = {
    id: result.insertId,
    username,
    classe,
    level,
    password,
  };

  return newUser;
};

export default {
  createUser,
};
