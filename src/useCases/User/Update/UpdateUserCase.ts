/* eslint-disable no-else-return */
/* eslint-disable no-param-reassign */
/* eslint-disable lines-between-class-members */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import { UserRepository } from '../../../repositories';
import { IUpdateUserDTO } from './IUpdateUserDTO';
import { serverError, success, badRequest } from '../../../interfaces/HttpErrors';
import BcryptAdapter from '../../../services/BcryptAdapter';

export class UpdateUserCase {
  constructor(private readonly repository: UserRepository) {}
  async execute(data: IUpdateUserDTO) {
    try {
      const response = await this.repository.findOneId(data.id);
      if (response) {
        if (data.password != null && data.password.length !== 0 && data.password !== '') {
          const password = await BcryptAdapter.hash(data.password);
          data.password = password.toString();
        } else {
          delete data.password;
        }
        await this.repository.update(response, data);

        return success('Usuario atualizado com sucesso');
      } else {
        return badRequest('Usuario não encontrado');
      }
    } catch (e: any) {
      return serverError(e.message);
    }
  }
}
