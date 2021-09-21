import { Repository } from 'typeorm';
import { IBaseRepository } from './IBaseRepository';

// eslint-disable-next-line import/prefer-default-export
export abstract class BaseRepository<T> implements IBaseRepository<T> {
  protected repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  async findOneId(id: string): Promise<T | any> {
    return this.repository.findOne({ where: [{ id }] });
  }

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async save(data: T): Promise<T> {
    return this.repository.save(data);
  }

  async update(user: any, userBody: any): Promise<string> {
    this.repository.merge(user, userBody);
    return this.repository.save(user);
  }

  async delete(id: string): Promise<any> {
    return this.repository.delete(id);
  }
}
