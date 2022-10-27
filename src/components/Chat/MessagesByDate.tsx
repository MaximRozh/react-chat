import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import MessageListModel from "../../models/MessageListModel.model";
import { isTodayMassage } from "../../utils/formatedDate";
import MessageItem from "./MessageItem";

interface MessagesByDateProp {
  userId: string | null;
  dateMessages: MessageListModel;
}

const MessagesByDate: React.FC<MessagesByDateProp> = ({
  dateMessages,
  userId,
}) => {
  return (
    <Box>
      <Typography sx={{ margin: "0 auto", width: "100px" }}>
        {isTodayMassage(dateMessages._id) ? "Today" : dateMessages._id}
      </Typography>
      {dateMessages.messagesByDate.map((message) => {
        const isMyMessage = message.from._id === userId;
        return (
          <MessageItem
            key={message._id}
            isMyMessage={isMyMessage}
            message={message}
          />
        );
      })}
    </Box>
  );
};

export default observer(MessagesByDate);
