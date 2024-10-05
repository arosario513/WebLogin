"use client";

import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { HandleLogin, HandleRegister } from "../components/auth-handler";

export default function Account() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Box
      sx={{ p: 5 }}
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      height="85vh"
      display="flex"
      flexDirection="column"
    >
      <Typography variant="h3">Account</Typography>
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          gap: 1,
          mt: 2,
          maxWidth: "300px",
        }}
      >
        <FormControl>
          <TextField
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
        <Button
          color="inherit"
          variant="contained"
          onClick={() => HandleLogin(username, password, setMessage)}
        >
          Login
        </Button>
        <Button
          color="inherit"
          variant="contained"
          onClick={() => HandleRegister(username, password, setMessage)}
        >
          Register
        </Button>
      </Box>
      <Typography sx={{ mt: 2 }}>{message}</Typography>
    </Box>
  );
}
