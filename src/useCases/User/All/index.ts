/* eslint-disable import/prefer-default-export */
import { getConnection } from 'typeorm';
import { AllUserCase } from './AllUserCase';
import { UserRepository } from '../../../repositories';
import { AllUserController } from './AllUserController';
import { IController } from '../../../interfaces/IController';

function makeAllUserController(): IController {
  const repository = new UserRepository(getConnection());
  const allCase = new AllUserCase(repository);
  return new AllUserController(allCase);
}

export { makeAllUserController };
