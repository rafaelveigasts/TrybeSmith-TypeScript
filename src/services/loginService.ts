import UserModel from '../models/UserModel';

import StatusCode from '../enums/StatusCode';
import { UserSemID } from '../interfaces/User';

const userLogin = async (user: UserSemID) => {
  const userFound = await UserModel.getUserByUsername(user);
  if (!userFound) {
    return {
      status: StatusCode.UNAUTHORIZED,
      message: 'Username or password invalid',
    };
  }
  return userFound;
};

export default userLogin;