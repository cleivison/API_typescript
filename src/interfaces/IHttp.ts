import { User } from '../models/User';

export type HttpResponse = {
  statusCode: number;
  body: any;
  message?: string;
};

export type HttpRequest = {
  body?: any;
  headers?: any;
  params?: any;
  user?: User;
  cookies?: any;
};

export interface HttpRequestHandler {
  (req: HttpRequest): any;
}
export interface HttpNext {
  (err?: any): void;
}
