import express from 'express';
import createUser from './Controller/UserController';
import {
  nameValidation,
  classValidation,
  levelValidation,
  passwordValidation,
} from './middlewares/uservalidation';
import login from './Controller/LoginController';
import { createProduct, getAllProducts } from './Controller/ProductController';
import tokenValidation from './middlewares/tokenValidation';
import {
  productNameValidation,
  productAmountValidation,
} from './middlewares/productValidation';
import orderValidation from './middlewares/orderValidation';
import createOrder from './Controller/OrderController';

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

app.post(
  '/products',
  tokenValidation,
  productNameValidation,
  productAmountValidation,
  createProduct,
);

app.get('/products', tokenValidation, getAllProducts);

app.post('orders', tokenValidation, orderValidation, createOrder);

export default app;
