/* eslint-disable import/prefer-default-export */
import { HttpRequest, HttpResponse } from '../../../interfaces/IHttp';
import { serverError } from '../../../interfaces/HttpErrors';
import { UpdateUserCase } from './UpdateUserCase';
import { IController } from '../../../interfaces/IController';

export class UpdateUserController implements IController {
  constructor(private readonly useCase: UpdateUserCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      return await this.useCase.execute({ id, name, email, password });
    } catch (e: any) {
      return serverError(e.message);
    }
  }
}
