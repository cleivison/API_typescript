/* eslint-disable no-else-return */
/* eslint-disable lines-between-class-members */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import { UserRepository } from '../../../repositories';
import { IFindUserDTO } from './IFindUserDTO';
import { serverError, success, badRequest } from '../../../interfaces/HttpErrors';

export class FindUserCase {
  constructor(private readonly repository: UserRepository) {}
  async execute(data: IFindUserDTO) {
    try {
      const response = await this.repository.findOneId(data.id);
      if (response) {
        return success(response);
      } else {
        return badRequest('Usuario não encontrado');
      }
    } catch (e: any) {
      return serverError(e.message);
    }
  }
}
