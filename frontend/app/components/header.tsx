import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              Website
            </Typography>
            <Button href="/" color="inherit">Home</Button>
            <Button href="/account" color="inherit">Account</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
