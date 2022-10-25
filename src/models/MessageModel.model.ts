import UserModel from "./UserModel.model";

class MessageModel {
  _id: string;
  content: string;
  time: string;
  date: string;
  to: string;
  from: UserModel;
  constructor(data: MessageModel) {
    this._id = data._id;
    this.content = data.content;
    this.time = data.time;
    this.date = data.date;
    this.to = data.to;
    this.from = data.from;
  }
}

export default MessageModel;
