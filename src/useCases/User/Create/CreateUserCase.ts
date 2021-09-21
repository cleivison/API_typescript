/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import BcryptAdapter from '../../../services/BcryptAdapter';
import { serverError, created, badRequest } from '../../../interfaces/HttpErrors';
import { User } from '../../../models/User';
import { ICreateUserDTO } from './ICreateUserDTO';
import { UserRepository } from '../../../repositories';

export class CreateUserCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(data: ICreateUserDTO) {
    try {
      if (data.password == null || data.password.length === 0 || data.password === '')
        return badRequest('Senha em branco');
      const response = await this.repository.findOne(data.name, data.email);
      console.log(`response`, response);
      if (response) {
        if (response.name === data.name) return badRequest('Nome ja está em uso');
        return badRequest('E-mail ja está em uso');
      }
      const password = await BcryptAdapter.hash(data.password);
      data.password = password.toString();
      const user = new User(data);
      await this.repository.save(user);
      return created(user);
    } catch (e: any) {
      return serverError(e.message);
    }
  }
}
