import { Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import UserService from '../services/userService';
import StatusCode from '../enums/StatusCode';

dotenv.config();

const key: jwt.Secret = process.env.SECRET || 'chave';

const createUser = async (req: Request, res: Response) => {
  const userData = req.body;
  console.log(userData.username);
  console.log(userData.password);
  console.log(userData.classe);
  console.log(userData.level);
  
  try {
    const newUser = await UserService.createUser(userData);
    const token = jwt.sign({ username: newUser.username }, key);
    res.status(StatusCode.CREATED).send({ token });
  } catch (err) {
    res.status(StatusCode.BAD_REQUEST).send(err);
  }
};

export default createUser;