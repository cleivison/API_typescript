/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
// eslint-disable-next-line import/order
import { DeleteUserCase } from './DeleteUserCase';
import { UserRepository } from '../../../repositories';
import { DeleteUserController } from './DeleteUserController';
import { getConnection } from 'typeorm';
import { IController } from '../../../interfaces/IController';

function makeDeleteUserController(): IController {
  const repository = new UserRepository(getConnection());
  const deleteCase = new DeleteUserCase(repository);
  return new DeleteUserController(deleteCase);
}

export { makeDeleteUserController };
