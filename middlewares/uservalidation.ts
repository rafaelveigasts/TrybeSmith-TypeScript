import { NextFunction, Request, Response } from 'express';
import { UserSemID } from '../interfaces/User';
import StatusCode from '../enums/StatusCode';

const properties = ['username', 'classe', 'level', 'password'];

function validateProperties(user: UserSemID): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(user, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

function validadeValues(user: UserSemID): [boolean, string | null] {
  const entries = Object.entries(user);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  }
  return [true, null];
}

function validadeUser(req: Request, res: Response, next: NextFunction) {
  const user: UserSemID = req.body;

  let [valid, property] = validateProperties(user);

  if (!valid) {
    return res.status(StatusCode.BAD_REQUEST).send(`${property} is required`);
  }

  [valid, property] = validadeValues(user);
  if (!valid) {
    return res
      .status(StatusCode.BAD_REQUEST)
      .send(`${property} is required`);
  }
  next();
}

export default validadeUser;
