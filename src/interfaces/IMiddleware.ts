import { HttpRequest, HttpResponse } from './IHttp';

export interface IMiddleware {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>;
}
