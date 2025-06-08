import Hero from "../../components/Hero";
import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import { useYoutubeChannelDetails } from "../../hooks/useYoutubeChannelDetails";
import { useLocation } from "react-router-dom";
import { decodeHTMLEntities } from "../../utils/strings";
import {YOUTUBE_CHANNEL} from "../../utils/constants";

const YouTubePage = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const { liveVideo, videos } = useYoutubeChannelDetails();
    const location = useLocation();
    const { sermon } = location.state || {};

    // Handle selected video from home page or live video
    useEffect(() => {
        if (sermon) {
            setSelectedVideo(sermon);
        } else if (liveVideo) {
            setSelectedVideo(liveVideo);
        }
        // else if (videos.length > 0) {
        //     setSelectedVideo(videos[0]); // Default to the latest video
        // }
    }, [sermon, liveVideo, videos]);

    // Scroll to hash if present
    // useEffect(() => {
    //     if (location.hash) {
    //         const element = document.getElementById(location.hash.substring(1));
    //         if (element) {
    //             element.scrollIntoView({ behavior: "smooth" });
    //         }
    //     }
    // }, [location]);

    useEffect(() => {
        if (selectedVideo) {
            const element = document.getElementById('selected-video');
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, [selectedVideo]);

    return (
        <Box sx={{ padding: 4, backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
            {/* Live Video Section */}
            {liveVideo && !selectedVideo && (
                <Box sx={{ marginBottom: 4, textAlign: "center" }} id="live-video">
                    <iframe
                        width="100%"
                        height="500"
                        src={`https://www.youtube.com/embed/${liveVideo.id.videoId}?autoplay=1&mute=1`}
                        title={decodeHTMLEntities(liveVideo.snippet.title)}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            borderRadius: "12px",
                            boxShadow: "0 6px 30px rgba(0, 0, 0, 0.2)",
                        }}
                    ></iframe>
                    <Typography variant="h5" sx={{ marginTop: 2, fontWeight: "bold", color: "#333" }}>
                        {decodeHTMLEntities(liveVideo.snippet.title)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                        {new Date(liveVideo.snippet.publishedAt).toLocaleDateString()}
                    </Typography>
                </Box>
            )}

            {/* Selected Video (from home page or gallery) */}
            {selectedVideo && (
                <Box sx={{ marginBottom: 4, textAlign: "center" }} id="selected-video">
                    <iframe
                        width="100%"
                        height="500"
                        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                        title={decodeHTMLEntities(selectedVideo.snippet.title)}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            borderRadius: "12px",
                            boxShadow: "0 6px 30px rgba(0, 0, 0, 0.2)",
                        }}
                    ></iframe>
                    <Typography variant="h5" sx={{ marginTop: 2, fontWeight: "bold", color: "#333" }}>
                        {decodeHTMLEntities(selectedVideo.snippet.title)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                        {new Date(selectedVideo.snippet.publishedAt).toLocaleDateString()}
                    </Typography>
                </Box>
            )}

            {/* Video Gallery */}
            <Grid container spacing={3}>
                {videos.map((video) => (
                    <Grid item xs={12} sm={6} md={4} key={video.id.videoId}>
                        <Card
                            sx={{
                                borderRadius: "12px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.2s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.03)",
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={video.snippet.thumbnails.high.url}
                                alt={decodeHTMLEntities(video.snippet.title)}
                                onClick={() => setSelectedVideo(video)}
                                sx={{
                                    cursor: "pointer",
                                    borderTopLeftRadius: "12px",
                                    borderTopRightRadius: "12px",
                                }}
                            />
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "#333",
                                        mb: 1,
                                        whiteSpace: "normal",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {decodeHTMLEntities(video.snippet.title)}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        mb: 2,
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    {new Date(video.snippet.publishedAt).toLocaleDateString("en-US", {
                                        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                                    })}
                                </Typography>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => setSelectedVideo(video)}
                                    sx={{
                                        textTransform: "none",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Watch Now
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ textAlign: "center", marginTop: 4 }}>
                <Button variant="contained" color="primary" href={`https://www.youtube.com/${YOUTUBE_CHANNEL}`} target="_blank" sx={{ textTransform: "none", fontWeight: "bold" }}>
                    View More on YouTube
                </Button>
            </Box>
        </Box>
    );
};

export const Sermons = () => {
    return (
        <>
            <Hero backGroundImageSrc={`url(/assets/sermon.jpg)`} height={'40vh'} title={'Sermons'} />
            <YouTubePage />
        </>
    );
};
