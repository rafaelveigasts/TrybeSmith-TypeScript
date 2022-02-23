import { UserSemID } from '../interfaces/User';

import UserModel from '../models/UserModel';

const createUser = async (user: UserSemID): Promise<UserSemID> => {
  const users: UserSemID = await UserModel.createUser(user);
  return users;
};

export default {
  createUser,
};
