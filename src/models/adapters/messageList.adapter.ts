import { MessageListDto } from "../dto/MessageList.dto";
import MessageListModel from "../MessageListModel.model";
import MessageAdapter from "./message.adapter";

class MessageListAdapter {
  static roomMessageDtoToRoomMessage(message: MessageListDto) {
    return new MessageListModel({
      _id: message._id,
      messagesByDate: MessageAdapter.mapMessageDtoToMessage(
        message.messagesByDate
      ),
    });
  }

  static mapRoomMessageDtoToRoomMessage(messages: MessageListDto[]) {
    return messages.map((message) => this.roomMessageDtoToRoomMessage(message));
  }
}

export default MessageListAdapter;
