import express from 'express';
import createUser from './Controller/UserController';
import {
  nameValidation,
  classValidation,
  levelValidation,
  passwordValidation,
} from './middlewares/uservalidation';
import login from './Controller/LoginController';

const app = express();

app.use(express.json());
app.post(
  '/users',
  nameValidation,
  levelValidation,
  classValidation,
  passwordValidation,
  createUser,
);
app.post('/login', nameValidation, passwordValidation, login);

export default app;
