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
                background: "#FFFFFF",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                mx: "auto",
                position: "relative",
                overflow: "hidden",
                "::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.04) 10%, transparent 10%)`,
                    backgroundSize: "30px 30px", // Subtle dotted pattern
                    opacity: 0.6,
                    zIndex: 0,
                },
            }}
        >
            {/* Title */}
            <Typography
                variant="h3"
                sx={{ fontWeight: "bold", mb: 3, position: "relative", zIndex: 1 }}
            >
                Latest Sermon
            </Typography>

            {/* Video Section */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3, position: "relative", zIndex: 1 }}>
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
                            borderRadius: "12px",
                            boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)"
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default LatestSermon;