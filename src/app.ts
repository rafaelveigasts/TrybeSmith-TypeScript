import express from 'express';
import createUser from './Controller/UserController';
import {
  nameValidation,
  classValidation,
  levelValidation,
  passwordValidation,
} from './middlewares/uservalidation';

const app = express();

app.use(express.json());
app.post(
  '/users',
  nameValidation,
  classValidation,
  levelValidation,
  passwordValidation,
  createUser,
);

export default app;
