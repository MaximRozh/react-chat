import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

interface SidebarProp {
  rooms: string[];
  joinRoom: (room: string) => void;
  currentRoom: string;
}

const Sidebar: React.FC<SidebarProp> = ({ rooms, joinRoom, currentRoom }) => {
  return (
    <List
      sx={{ marginRight: "10px", borderRadius: "30px" }}
      disablePadding={true}
    >
      {rooms.map((room: string) => (
        <ListItem
          key={room}
          disablePadding
          sx={{
            backgroundColor: `${room === currentRoom ? "#e1f9d2" : "#eff6fd"}`,
          }}
        >
          <ListItemButton onClick={() => joinRoom(room)}>
            <ListItemText primary={room} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default React.memo(Sidebar);
