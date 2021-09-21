/* eslint-disable @typescript-eslint/no-unused-vars */
import { Connection } from 'typeorm';
import { BaseRepository } from '../BaseRepository';
import { User } from '../../models/User';

// eslint-disable-next-line import/prefer-default-export
export class UserRepository extends BaseRepository<User> {
  [x: string]: any;

  constructor(connection: Connection) {
    super(connection.getRepository(User));
  }

  async findOne(name: string, email: string): Promise<User> {
    return this.repository.findOne({
      where: [{ email }, { name }],
    });
  }
}
