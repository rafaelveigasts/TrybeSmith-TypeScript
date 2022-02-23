import express from 'express';
import createUser from './Controller/UserController';
import validadeUser from './middlewares/uservalidation';

const app = express();

app.use(express.json());
app.post('/users', validadeUser, createUser);

export default app;
