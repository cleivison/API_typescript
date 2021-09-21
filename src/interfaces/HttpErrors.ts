/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/ban-types */
import { HttpResponse } from './IHttp';

export const badRequest = (error?: string): HttpResponse => ({
  statusCode: 400,
  body: null,
  message: error || 'Bad request',
});
export const forbidden = (error?: string): HttpResponse => ({
  statusCode: 403,
  body: null,
  message: error || 'Forbidden',
});
export const notfound = (error?: string): HttpResponse => ({
  statusCode: 404,
  body: null,
  message: error || 'Not Found',
});
export const unauthorized = (error?: string): HttpResponse => ({
  statusCode: 401,
  body: null,
  message: error || 'Unauthorized',
});

export const serverError = (error?: string): HttpResponse => ({
  statusCode: 500,
  body: null,
  message: error || 'Server error',
});

export const success = (body: {}): HttpResponse => ({
  statusCode: 200,
  body: body,
});
export const created = (body?: {}): HttpResponse => ({
  statusCode: 201,
  body: body,
});

export const noContent = (error?: string): HttpResponse => ({
  statusCode: 204,
  body: null,
  message: error || 'Not content',
});
