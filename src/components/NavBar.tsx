import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { Avatar, Box, Typography } from "@mui/material";
import user from "../mobxStore/AuthStore";
import { MyButton } from "./UI";
import { observer } from "mobx-react-lite";

const NavBar = () => {
  const { userInfo, logout } = user;
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "10px 0",
        borderBottom: "1px solid #e0e0e0",
        marginBottom: "30px",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Link to="/">Chat</Link>
          <Box>
            {userInfo ? (
              <Box
                sx={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                }}
              >
                <Typography>{userInfo.fullName}</Typography>
                <Avatar src={userInfo.picture} />
                <MyButton onClick={logout} variant="contained" color="error">
                  Log out
                </MyButton>
              </Box>
            ) : (
              <>
                <Link to="/login">
                  <MyButton variant="outlined" style={{ marginLeft: "10px" }}>
                    Sign in
                  </MyButton>
                </Link>
                <Link to="/sing-up">
                  <MyButton variant="contained" style={{ marginLeft: "10px" }}>
                    Sign Up
                  </MyButton>
                </Link>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default observer(NavBar);
