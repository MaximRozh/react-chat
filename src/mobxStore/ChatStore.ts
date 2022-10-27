import { makeAutoObservable } from "mobx";
import MessageListAdapter from "../models/adapters/messageList.adapter";
import { MessageListDto } from "../models/dto/MessageList.dto";
import MessageListModel from "../models/MessageListModel.model";
class ChatStore {
  messages: MessageListModel[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  setMessages(rommMessages: MessageListDto[]) {
    this.messages =
      MessageListAdapter.mapRoomMessageDtoToRoomMessage(rommMessages);
  }
}

const chat = new ChatStore();
export default chat;
