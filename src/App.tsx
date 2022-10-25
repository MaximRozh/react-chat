import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import { Container } from "@mui/material";
import AuthRoute from "./components/AuthRoute";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Chat />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/sing-up" element={<Singup />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
