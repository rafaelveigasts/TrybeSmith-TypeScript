import { Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';
import { UserSemID } from '../interfaces/User';
import LoginService from '../services/loginService';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const key: jwt.Secret = process.env.SECRET || 'chave';

const userLogin = async (req: Request, res: Response) => {
}

export default userLogin;
