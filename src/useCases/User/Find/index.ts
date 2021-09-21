/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import { FindUserCase } from './FindUserCase';
import { UserRepository } from '../../../repositories';
import { FindUserController } from './FindUserController';
import { getConnection } from 'typeorm';
import { IController } from '../../../interfaces/IController';

function makeFindUserController(): IController {
  const repository = new UserRepository(getConnection());
  const findCase = new FindUserCase(repository);
  return new FindUserController(findCase);
}

export { makeFindUserController };
