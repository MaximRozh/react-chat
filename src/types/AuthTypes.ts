export interface LoginType {
  email: string;
  password: string;
}

export interface SingUpType extends LoginType {
  picture: string;
  firstName: string;
  lastName: string;
}
