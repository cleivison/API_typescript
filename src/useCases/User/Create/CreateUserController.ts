/* eslint-disable import/prefer-default-export */
import { serverError } from '../../../interfaces/HttpErrors';
import { IController } from '../../../interfaces/IController';
import { HttpRequest, HttpResponse } from '../../../interfaces/IHttp';
import { CreateUserCase } from './CreateUserCase';

export class CreateUserController implements IController {
  constructor(private readonly useCase: CreateUserCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      const { name, email, password } = req.body;
      return await this.useCase.execute({ name, email, password });
    } catch (e: any) {
      return serverError(e.message);
    }
  }
}
