import { Box, Typography } from "@mui/material";

export const metadata = {
    title: "Error 404",
};

export default function Error404() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            margin="auto"
            alignItems="center"
            justifyContent="center"
            height="85vh"
        >
            <Typography variant="h2">Error 404</Typography>
            <Typography variant="h4">Page not found</Typography>
        </Box>
    );
}
