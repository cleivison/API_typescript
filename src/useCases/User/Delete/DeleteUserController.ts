/* eslint-disable import/prefer-default-export */
import { HttpRequest, HttpResponse } from '../../../interfaces/IHttp';
import { serverError } from '../../../interfaces/HttpErrors';
import { DeleteUserCase } from './DeleteUserCase';
import { IController } from '../../../interfaces/IController';

export class DeleteUserController implements IController {
  constructor(private readonly useCase: DeleteUserCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = req.params;
      return await this.useCase.execute({ id });
    } catch (e: any) {
      return serverError(e.message);
    }
  }
}
