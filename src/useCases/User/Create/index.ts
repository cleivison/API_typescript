/* eslint-disable import/prefer-default-export */
/* eslint-disable import/order */
import { CreateUserCase } from './CreateUserCase';
import { UserRepository } from '../../../repositories';
import { CreateUserController } from './CreateUserController';
import { getConnection } from 'typeorm';
import { IController } from '../../../interfaces/IController';

function makeCreateUserController(): IController {
  const repository = new UserRepository(getConnection());
  const createCase = new CreateUserCase(repository);
  return new CreateUserController(createCase);
}

export { makeCreateUserController };
