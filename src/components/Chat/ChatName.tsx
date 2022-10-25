import { Typography } from "@mui/material";
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

export default React.memo(ChatName);
