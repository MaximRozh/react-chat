import { MessageDto } from "../dto/message.dto";
import MessageModel from "../MessageModel.model";
import UserAdapter from "./user.adapter";

class MessageAdapter {
  static messageDtoToMessage(message: MessageDto) {
    return new MessageModel({
      _id: message._id,
      content: message.content,
      time: message.time,
      date: message.date,
      to: message.to,
      from: UserAdapter.userDtoToUser(message.from),
    });
  }

  static mapMessageDtoToMessage(messages: MessageDto[]) {
    return messages.map((message: MessageDto) =>
      this.messageDtoToMessage(message)
    );
  }
}

export default MessageAdapter;
