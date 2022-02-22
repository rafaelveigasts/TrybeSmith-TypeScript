export interface UserSemID {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserWithID extends UserSemID {
  id: number;
}
