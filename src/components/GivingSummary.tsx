import {Box, Typography} from "@mui/material";

const GivingSummary = () => (
    <Box
        sx={{
            py: 8,
            px: 4,
            background: "#e3f2fd",
            textAlign: "center",
            position: "relative",
            mt: "-150px",
        }}
    >
        <Typography
            variant="h3"
            sx={{
                fontFamily: "'Merriweather', serif",
                color: "#7b523a",
                fontWeight: "bold",
                mb: 4,
            }}
        >
            Giving
        </Typography>
        {/* Giving content */}
    </Box>
);

export default GivingSummary;