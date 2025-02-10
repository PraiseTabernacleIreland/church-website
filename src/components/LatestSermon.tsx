import {Button, CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import {useYoutubeChannelDetails} from "../hooks/useYoutubeChannelDetails";
import {Link, useNavigate} from "react-router-dom";
import {PageName, PageRoutes} from "../utils/routes";

const LatestSermon = () => {
    const {videos, loading, error} = useYoutubeChannelDetails();
    const navigate = useNavigate();

    if (loading && !error) return <CircularProgress/>;
    if (error) return null;

    const latestSermon = videos[0];

    return (
        <Box
            sx={{
                py: 8,
                px: 4,
                background: "#f0f7f9", // Matches the bottom gradient of the previous section
                textAlign: "center",
                position: "relative",
                height: "80vh", // Full-screen height
                backgroundImage: `url(${latestSermon.snippet.thumbnails.high.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 10%", // Space for text on the left
                color: "#fff",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))",
                    zIndex: 1,
                }}
            />

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                textAlign: "center",
                zIndex: 2,
                padding: "0 20px",
            }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: "bold",
                        mb: 2,
                        lineHeight: 1.2,
                    }}
                >
                    {latestSermon.snippet.title}
                </Typography>
                <Typography variant="subtitle1" sx={{mb: 1}}>
                    {new Date(latestSermon.snippet.publishedAt)
                        .toLocaleDateString("en-US", {
                            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                        })}
                </Typography>
                <Box>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            navigate(`${PageRoutes[PageName.Sermons]}#selected-video`, {state: {sermon: latestSermon}});
                        }}
                        sx={{
                            mr: 2,
                            backgroundColor: "#055594",
                            padding: "10px 20px",
                            "&:hover": {backgroundColor: "#033d6c"},
                        }}
                    >
                        Watch Now
                    </Button>
                    <Link to={PageRoutes[PageName.Sermons]} style={{ textDecoration: 'none' }}>
                        <Button
                            variant="contained"
                            sx={{
                                padding: "10px 20px",
                                backgroundColor: "#E52326",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#b71c1c",
                                },
                            }}
                        >
                            View All Sermons
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
};

export default LatestSermon;