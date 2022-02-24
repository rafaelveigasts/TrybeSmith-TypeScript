import UserModel from '../models/UserModel';

import StatusCode from '../enums/StatusCode';
import { UserSemID } from '../interfaces/User';

export type LoginError = {
  code: number;
  message: { error: string };
};

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