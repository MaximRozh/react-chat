import React from "react";
import User from "../mobxStore/AuthStore";
import { observer } from "mobx-react-lite";
import { getFormattedDate, getTime } from "../utils/formatedDate";
import chat from "../mobxStore/ChatStore";
import { Box, Divider, Grid, Paper } from "@mui/material";
import {
  ChatName,
  MessageForm,
  MessagesList,
  ChatSidebar,
} from "../components/Chat";
import socketService from "../services/socketService";
import { MessageListDto } from "../models/dto/MessageList.dto";

const Chat = () => {
  const [currentRoom, setCurrentRoom] = React.useState<string>("");

  const handleSubmit = React.useCallback(
    ({ message }: { message: string }) => {
      if (!message) return;

      const time = getTime();
      const todayDate = getFormattedDate();
      socketService.emit("message-room", {
        currentRoom,
        message,
        user: User.userInfo,
        time,
        todayDate,
      });
    },
    [currentRoom]
  );

  React.useEffect(() => {
    if (User.userInfo) {
      socketService.on("room-messages", (roomMessages: MessageListDto[]) => {
        chat.setMessages(roomMessages);
      });
      User.getRooms();
    }
  }, []);

  const join = React.useCallback(
    (room: string) => {
      socketService.emit("join-room", room, currentRoom);
      setCurrentRoom(room);
    },
    [currentRoom]
  );
  console.log(1);
  return (
    <Grid container sx={{ position: "relative" }}>
      <Grid item xs={3}>
        <ChatSidebar
          rooms={User.rooms}
          joinRoom={join}
          currentRoom={currentRoom}
        />
      </Grid>
      {currentRoom ? (
        <Grid item xs={9}>
          <Paper elevation={4}>
            <Box p={3}>
              <ChatName roomName={currentRoom} />
              <Divider />
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <MessagesList
                    messages={chat.messages}
                    userId={User.userInfo && User.userInfo._id}
                  />
                </Grid>
                <Grid xs={12} item>
                  <MessageForm onSubmit={handleSubmit} />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      ) : (
        <Box>{"<--"}Select Room</Box>
      )}
    </Grid>
  );
};

export default observer(Chat);
