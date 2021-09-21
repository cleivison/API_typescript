/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import { UserRepository } from '../../../repositories';
import { IDeleteUserDTO } from './IDeleteUserDTO';
import { serverError, badRequest, success } from '../../../interfaces/HttpErrors';

export class DeleteUserCase {
  constructor(private readonly repository: UserRepository) {}

  async execute(data: IDeleteUserDTO) {
    try {
      const { affected } = await this.repository.delete(data.id);
      if (affected === 0) return badRequest('Usuario não encontrado');
      return success('Usuario deletado com sucesso');
    } catch (e: any) {
      return serverError(e.message);
    }
  }
}
