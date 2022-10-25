import React from "react";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import UserModel from "../../models/UserModel.model";

interface MessageItemProp {
  myMessage: boolean;
  sender: UserModel;
  content: string;
  time: string;
}

const MessageItem: React.FC<MessageItemProp> = ({
  myMessage,
  sender,
  content,
  time,
}) => {
  return (
    <>
      <ListItem
        sx={{
          textAlign: `${myMessage ? "right" : "left"}`,
          alignSelf: "flex-end",
          justifyContent: `${myMessage ? "flex-end" : "flex-start"}`,
        }}
      >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={sender.picture || ""} />
        </ListItemAvatar>
        <ListItemText
          sx={{
            flex: "none",
            backgroundColor: `${myMessage ? "#e1f9d2" : "#eff6fd"}`,
            padding: "0 10px",
            borderRadius: "10px",
            width: "auto",
          }}
          primary={content}
          secondary={`${myMessage ? "You" : `${sender.fullName}`} at ${time}`}
        />
      </ListItem>
    </>
  );
};

export default MessageItem;
