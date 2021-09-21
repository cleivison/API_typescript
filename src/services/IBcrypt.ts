export interface IBcrypt {
  hash: (plaintext: string) => Promise<string>;
  compare: (plaitext: string, digest: string) => Promise<boolean>;
}
