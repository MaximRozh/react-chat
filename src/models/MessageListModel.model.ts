import MessageModel from "./MessageModel.model";

class MessageListModel {
  _id: string;
  messagesByDate: MessageModel[];
  constructor(data: MessageListModel) {
    this._id = data._id;
    this.messagesByDate = data.messagesByDate;
  }
}

export default MessageListModel;
