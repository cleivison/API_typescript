export interface IBaseRepository<T> {
  findAll(): Promise<any>;
  findOneId(id: string): Promise<any>;
  save(data: T): Promise<any>;
  update(user: any, data: any): Promise<string>;
  delete(id: string): Promise<any>;
}
