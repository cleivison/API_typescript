/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
import { UpdateUserCase } from './UpdateUserCase';
import { UserRepository } from '../../../repositories';
import { UpdateUserController } from './UpdateUserController';
import { getConnection } from 'typeorm';
import { IController } from '../../../interfaces/IController';

function makeUpdateUserController(): IController {
  const repository = new UserRepository(getConnection());
  const updateCase = new UpdateUserCase(repository);
  return new UpdateUserController(updateCase);
}

export { makeUpdateUserController };
