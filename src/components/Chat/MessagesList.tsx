import React from "react";
import { List, Box, ListItem, Typography } from "@mui/material";
import MessageItem from "./MessageItem";
import { isTodayMassage } from "../../utils/formatedDate";
import MessageModel from "../../models/MessageModel.model";
import MessageListModel from "../../models/MessageListModel.model";
// import { useContextMenu } from "../../hooks/useContextMenu";

const MessagesList: React.FC<any> = ({ messages, user }) => {
  const messageEndRef = React.useRef(null) as any;

  // const { anchorPoint, show, ref } = useContextMenu();

  React.useEffect(() => {
    messageEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages]);

  return (
    <>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "60vh",
          overflow: "auto",
          scrollbar: 0,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {messages.map(
          ({ _id: date, messagesByDate }: MessageListModel, idx: number) => {
            return (
              <Box key={idx}>
                <Typography sx={{ margin: "0 auto", width: "100px" }}>
                  {isTodayMassage(date) ? "Today" : date}
                </Typography>
                {messagesByDate.map(
                  ({ content, time, from: sender, _id }: MessageModel) => {
                    const myMessage = sender._id === user?._id;
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
          }
        )}
        <ListItem ref={messageEndRef} />
        {/* {show ? (
          <div
            style={{
              width: "150px",
              height: "auto",
              // margin: 0,
              position: "fixed",
              boxShadow: "0 0 20px 0 #ccc",
              background: "gray",
              // inset: "none",
              top: anchorPoint.y + "px",
              left: anchorPoint.x + "px",
            }}
          >
            <ul>
              <li>aaaaaaaaa</li>
            </ul>
          </div>
        ) : null} */}
      </List>
    </>
  );
};

export default React.memo(MessagesList);
