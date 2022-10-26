import { Box, Typography } from "@mui/material";
import React from "react";
import MessageModel from "../../models/MessageModel.model";
import { isTodayMassage } from "../../utils/formatedDate";
import MessageItem from "./MessageItem";

const MessagesByDate: React.FC<any> = ({
  messagesByDate,
  messageDate,
  userId,
}) => {
  return (
    <Box>
      <Typography sx={{ margin: "0 auto", width: "100px" }}>
        {isTodayMassage(messageDate) ? "Today" : messageDate}
      </Typography>
      {messagesByDate.map(
        ({ content, time, from: sender, _id }: MessageModel) => {
          const myMessage = sender._id === userId;
          return (
            <MessageItem
              key={_id}
              myMessage={myMessage}
              sender={sender}
              time={time}
              content={content}
            />
          );
        }
      )}
    </Box>
  );
};

export default MessagesByDate;
