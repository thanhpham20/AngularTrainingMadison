export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
export interface FormLogin {
  email: string;
  password: string;
}
export interface FormRegister {
  name: string;
  email: string;
  password: string;
}
