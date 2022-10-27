import { Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";

interface ChatNameProp {
  roomName: string;
}
const ChatName: React.FC<ChatNameProp> = ({ roomName }) => {
  return (
    <Typography variant="h4" gutterBottom>
      You are in {roomName} room
    </Typography>
  );
};

export default observer(ChatName);
