import { Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import StatusCode from '../enums/StatusCode';
import userlogin, { LoginError } from '../services/loginService';

dotenv.config();

const key: jwt.Secret = process.env.SECRET || 'chave';

const login = async (req: Request, res: Response) => {
  const { username } = req.body;
  const user = await userlogin(req.body);
  const userInfo = user as LoginError;

  if (userInfo.message) {
    return res.status(userInfo.code).json(userInfo.message);
  }
  const token = jwt.sign({ user: username }, key);
  res.status(StatusCode.OK).send({ token });
};

export default login;
// pq na linha 13 se eu passar username ele quebra?