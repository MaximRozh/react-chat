import React from "react";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { observer } from "mobx-react-lite";
import MessageModel from "../../models/MessageModel.model";

interface MessageItemProp {
  isMyMessage: boolean;
  message: MessageModel;
}

const MessageItem: React.FC<MessageItemProp> = ({ isMyMessage, message }) => {
  return (
    <ListItem
      sx={{
        textAlign: `${isMyMessage ? "right" : "left"}`,
        alignSelf: "flex-end",
        justifyContent: `${isMyMessage ? "flex-end" : "flex-start"}`,
      }}
    >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={message.from.picture || ""} />
      </ListItemAvatar>
      <ListItemText
        sx={{
          flex: "none",
          backgroundColor: `${isMyMessage ? "#e1f9d2" : "#eff6fd"}`,
          padding: "0 10px",
          borderRadius: "10px",
          width: "auto",
        }}
        primary={message.content}
        secondary={`${isMyMessage ? "You" : `${message.from.fullName}`} at ${
          message.time
        }`}
      />
    </ListItem>
  );
};

export default observer(MessageItem);
