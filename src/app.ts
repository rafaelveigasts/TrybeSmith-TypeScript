import express from 'express';
import createUser from './Controller/UserController';
import {
  nameValidation,
  classValidation,
  levelValidation,
  passwordValidation,
} from './middlewares/uservalidation';
import userLogin from './Controller/Login';

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
app.post('/login', nameValidation, passwordValidation, userLogin);

export default app;
