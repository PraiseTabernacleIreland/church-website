import { CircularProgress, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { useYoutubeChannelDetails } from "../hooks/useYoutubeChannelDetails";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@yourchannel"; // Replace with actual channel URL

const LatestSermon = () => {
    const { videos, loading, error, liveVideo } = useYoutubeChannelDetails();

    if (loading && !error) return <CircularProgress />;
    if (error) return null;

    const latestSermon = liveVideo || videos[0];

    return (
        <Box
            sx={{
                py: 8,
                px: 4,
                textAlign: "center",
                background: "#FFFFFF", // New background color for better contrast
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                mx: "auto",
                // maxWidth: "1200px"
            }}
        >
            {/* Title */}
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
                Latest Sermon
            </Typography>

            {/* Video Section */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <Box sx={{ width: "90%", maxWidth: "1000px", position: "relative" }}>
                    <iframe
                        width="100%"
                        height="550"
                        src={`https://www.youtube.com/embed/${latestSermon.id.videoId}`}
                        title={latestSermon.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            borderRadius: "0px", // Removed rounded corners
                            boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)"
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default LatestSermon;