import UserModel from "../models/UserModel.model";

export interface SendMessageType {
  currentRoom: string;
  message: string;
  user: UserModel | null;
  time: string;
  todayDate: string;
}
