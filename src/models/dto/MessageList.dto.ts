import { MessageDto } from "./message.dto";

export interface MessageListDto {
  _id: string;
  messagesByDate: MessageDto[];
}
