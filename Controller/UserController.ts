import { Request, Response } from 'express';
import connection = require('../models/connection');
import * as UserService from '../services/UserService';
import StatusCode from './enums/StatusCode';

export default function createUser(req: Request, res: Response) {
  const user = req.body;
  connection
    .query('INSERT INTO users SET ?', user)
    .then(() => {
      res.status(StatusCode.CREATED).send();
    })
    .catch((err) => {
      res.status(StatusCode.INTERNAL_SERVER_ERROR).send(err);
    });
}
