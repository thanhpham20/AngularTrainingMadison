import * as bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
export function handleHash(password: string): string {
  return bcrypt.hashSync(password, salt);
}
export function handleCompare(passLocal: string, passDB: string): boolean {
  return bcrypt.compareSync(passLocal, passDB);
}
