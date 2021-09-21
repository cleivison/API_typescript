import { UpdateDateColumn, Entity, Column, Index, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { uuid } from 'uuidv4';
import { IUser } from './IUser';

@Entity({ name: 'user' })
// eslint-disable-next-line import/prefer-default-export
export class User implements IUser {
  @Index({ unique: true })
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @CreateDateColumn()
  createdAt!: string;

  @UpdateDateColumn()
  updatedAt: string | undefined;

  constructor(data: IUser, id?: string) {
    Object.assign(this, data);
    if (!id) {
      this.id = uuid();
    }
  }
}
