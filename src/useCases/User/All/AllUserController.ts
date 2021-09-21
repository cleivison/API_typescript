/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { HttpRequest, HttpResponse } from '../../../interfaces/IHttp';
import { serverError } from '../../../interfaces/HttpErrors';
import { AllUserCase } from './AllUserCase';
import { IController } from '../../../interfaces/IController';

export class AllUserController implements IController {
  constructor(private readonly useCase: AllUserCase) {}

  async handle(req: HttpRequest): Promise<HttpResponse> {
    try {
      return await this.useCase.execute();
    } catch (e: any) {
      return serverError(e.message);
    }
  }
}
