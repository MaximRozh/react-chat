import React from "react";
import { List, ListItem } from "@mui/material";
import MessageListModel from "../../models/MessageListModel.model";
import MessagesByDate from "./MessagesByDate";
import { observer } from "mobx-react-lite";
// import { useContextMenu } from "../../hooks/useContextMenu";

interface MessagesListProp {
  messages: MessageListModel[];
  userId: string | null;
}

const MessagesList: React.FC<MessagesListProp> = ({ messages, userId }) => {
  const messageEndRef = React.useRef(null) as any;

  // const { anchorPoint, show, ref } = useContextMenu();

  React.useEffect(() => {
    messageEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages]);

  return (
    <>
      <List
        // ref={ref}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "60vh",
          overflow: "auto",
          scrollbar: 0,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {messages.map((byDate) => (
          <MessagesByDate
            key={byDate._id}
            userId={userId}
            dateMessages={byDate}
          />
        ))}
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

export default observer(MessagesList);
