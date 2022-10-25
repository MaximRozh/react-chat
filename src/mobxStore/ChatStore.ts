import { makeAutoObservable, runInAction } from "mobx";
import { io } from "socket.io-client";
import MessageListAdapter from "../models/adapters/messageList.adapter";
import { MessageListDto } from "../models/dto/MessageList.dto";
import MessageListModel from "../models/MessageListModel.model";
import { SendMessageType } from "../types/SendMessageType";

const SOCKET_URL = "http://localhost:4000";

class ChatStore {
  socket = io(SOCKET_URL);
  messages: MessageListModel[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  getMessages() {
    this.socket
      // .off("room-messages")
      .on("room-messages", (roomMessages: MessageListDto[]) => {
        runInAction(() => {
          this.messages =
            MessageListAdapter.mapRoomMessageDtoToRoomMessage(roomMessages);
        });
      });
  }

  joinToRoom(room: string, currentRoom: string) {
    this.socket.emit("join-room", room, currentRoom);
  }

  sendMessage(messageData: SendMessageType) {
    this.socket.emit("message-room", messageData);
  }
}

const chat = new ChatStore();
export default chat;
