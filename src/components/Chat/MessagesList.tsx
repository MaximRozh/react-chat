import React from "react";
import { List, ListItem } from "@mui/material";
import MessageListModel from "../../models/MessageListModel.model";
import MessagesByDate from "./MessagesByDate";
// import { useContextMenu } from "../../hooks/useContextMenu";

const MessagesList: React.FC<any> = ({ messages, userId }) => {
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
              <MessagesByDate
                key={date}
                userId={userId}
                messageDate={date}
                messagesByDate={messagesByDate}
              />
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
