/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import { NextFunction, Request, Response } from 'express';
import { HttpRequest, HttpResponse } from '../interfaces/IHttp';

export const adapterRoute = (controller: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      user: req.user,
      headers: req.headers,
    };
    const makeController = controller();
    const httpResponse: HttpResponse = await makeController.handle(httpRequest);
    if (httpResponse?.statusCode >= 200 && httpResponse?.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json(httpResponse.message);
    }
  };
};
