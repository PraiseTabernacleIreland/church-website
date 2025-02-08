import Hero from "../../components/Hero";
import React, {useEffect, useState} from "react";
import {Box, Typography, Grid, Card, CardMedia, CardContent} from "@mui/material";
import Button from "@mui/material/Button";
import {useYoutubeChannelDetails} from "../../hooks/useYoutubeChannelDetails";
import { useLocation } from "react-router-dom";


const YouTubePage = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const {liveVideo, videos} = {liveVideo: undefined, videos: []}; //useYoutubeChannelDetails();
    const location = useLocation();
    const { sermon } = location.state || {};

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <Box sx={{padding: 4, backgroundColor: "#f7f7f7", minHeight: "100vh"}}>
            {/* Live Video Section */}
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                    fontWeight: "bold",
                    marginBottom: 4,
                    color: "#333",
                }}>
                {liveVideo ? "Live Now" : (selectedVideo || sermon) ? "Now Playing" : "Latest Videos"}
            </Typography>

            {liveVideo && !selectedVideo && !sermon && (
                <Box sx={{marginBottom: 4, textAlign: "center"}} id={'live'}>
                    <iframe
                        width="100%"
                        height="500"
                        src={`https://www.youtube.com/embed/${liveVideo.id.videoId}?autoplay=1&mute=1`}
                        title={liveVideo.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            borderRadius: "8px",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        }}
                    ></iframe>
                    <Typography variant="h5" sx={{marginTop: 2, fontWeight: "bold", color: "#333"}}>
                        {liveVideo.snippet.title}
                    </Typography>
                    <Typography variant="body2" sx={{color: "#555"}}>
                        {new Date(liveVideo.snippet.publishedAt).toLocaleDateString()}
                    </Typography>
                </Box>
            )}

            {/* Video Player */}
            {selectedVideo && (
                <Box sx={{ marginBottom: 4, textAlign: "center" }} id={'selected-sermon'}>
                    <iframe
                        width="100%"
                        height="500"
                        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                        title={selectedVideo.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            borderRadius: "8px",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        }}
                    ></iframe>
                    <Typography variant="h5" sx={{ marginTop: 2, fontWeight: "bold", color: "#333" }}>
                        {selectedVideo.snippet.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                        {new Date(selectedVideo.snippet.publishedAt).toLocaleDateString()}
                    </Typography>
                </Box>
            )}

            {sermon && (
                <Box sx={{ marginBottom: 4, textAlign: "center" }} id={'latest-sermon'}>
                    <iframe
                        width="100%"
                        height="500"
                        src={`https://www.youtube.com/embed/${sermon.id.videoId}`}
                        title={sermon.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            borderRadius: "8px",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                        }}
                    ></iframe>
                    <Typography variant="h5" sx={{ marginTop: 2, fontWeight: "bold", color: "#333" }}>
                        {sermon.snippet.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                        {new Date(sermon.snippet.publishedAt).toLocaleDateString()}
                    </Typography>
                </Box>
            )}

            {/* Video Gallery */}
            <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: "bold", marginBottom: 3 }}>
                {liveVideo || selectedVideo ? "More Recent Videos" : "Recent Videos"}
            </Typography>
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
                                alt={video.snippet.title}
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
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    {video.snippet.title}
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
                                    {new Date(video.snippet.publishedAt)
                                        .toLocaleDateString("en-US", {
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
        </Box>
    );
};

export const Sermons = () => {
    return (
        <>
            <Hero backGroundImageSrc={'url(/assets/sermon.jpg)'}/>
            <YouTubePage/>
        </>
    )
}