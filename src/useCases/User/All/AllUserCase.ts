/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import { UserRepository } from '../../../repositories';
import { serverError, success } from '../../../interfaces/HttpErrors';

export class AllUserCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {
    try {
      const users = await this.userRepository.findAll();
      return success({ users });
    } catch (e: any) {
      return serverError(e.message);
    }
  }
}
