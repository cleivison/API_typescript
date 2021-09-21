/* eslint-disable import/prefer-default-export */
import { HttpRequest, HttpResponse } from '../../../interfaces/IHttp';
import { serverError } from '../../../interfaces/HttpErrors';
import { FindUserCase } from './FindUserCase';
import { IController } from '../../../interfaces/IController';

export class FindUserController implements IController {
  constructor(private readonly useCase: FindUserCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = req.params;
      return await this.useCase.execute({ id });
    } catch (e: any) {
      return serverError(e.message);
    }
  }
}
