import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{ p: 5 }}
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="85vh"
    >
      <Typography variant="h3" sx={{ p: 2 }}>
        Welcome to my website!
      </Typography>
      <Typography>
        It doesn&apos;t look like much right now, because this page is still in
        development
      </Typography>
    </Box>
  );
}
