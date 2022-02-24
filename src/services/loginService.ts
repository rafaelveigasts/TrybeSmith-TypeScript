import UserModel from '../models/UserModel';

import StatusCode from '../enums/StatusCode';
import { UserSemID } from '../interfaces/User';
import { LoginError } from '../interfaces/LoginError';

const userLogin = async (user: UserSemID) => {
  const userFound = await UserModel.getUserByUsername(user);
  const error: LoginError = {
    code: StatusCode.UNAUTHORIZED,
    message: { error: 'Username or password invalid' },
  };

  if (!userFound) {
    return error;
  }
  return userFound;
};

export default userLogin;