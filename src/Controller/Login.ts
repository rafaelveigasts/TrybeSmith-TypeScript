import StatusCode from '../enums/StatusCode';
import { UserSemID } from '../interfaces/User';
import UserModel from '../models/UserModel';

const userLogin = async (user: UserSemID) => {
  try {
    const userFound: UserSemID = await UserModel.getUserByUsername(user);
    if (!userFound) {
      return res
        .status(StatusCode.NOT_FOUND)
        .message('Username or password not found');
    } 
    return userFound;
  } catch (err) {
    return res
      .status(StatusCode.BAD_REQUEST)
      .message('Username or password not found');
  }
};

export default userLogin;