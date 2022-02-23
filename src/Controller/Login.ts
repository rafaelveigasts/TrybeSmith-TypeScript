import StatusCode from '../enums/StatusCode';
import { UserSemID } from '../interfaces/User';
import UserModel from '../models/UserModel';

const userLogin = async (user: UserSemID) => {
  const userFound = await UserModel.getUserByUsername(user);
  if (!userFound) {
    return {
      status: StatusCode.UNAUTHORIZED,
      message: 'Username or password invalid',
    };
  }
  return {
    status: StatusCode.OK,
    message: 'Login successful',
    user: userFound,
  };
};

export default userLogin;
