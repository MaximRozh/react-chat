import { UserDto } from "./user.dto";

export interface MessageDto {
  _id: string;
  content: string;
  time: string;
  date: string;
  to: string;
  __v: number;
  from: UserDto;
}
