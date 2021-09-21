import bcrypt from 'bcrypt';
import { IBcrypt } from './IBcrypt';

class BcryptAdapter implements IBcrypt {
  async hash(plaintext: string): Promise<string> {
    return bcrypt.hash(plaintext, 2);
  }

  async compare(plaintext: string, digest: string): Promise<boolean> {
    return bcrypt.compare(plaintext, digest);
  }
}
export default new BcryptAdapter();
