import Hero from "../components/Hero";
import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import Button from "@mui/material/Button";

// Replace with your YouTube API key and channel ID
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const CHANNEL_ID = "UCahHVAvlRT-fe7-JmGzZpTw";

const YouTubePage = () => {
    const [videos, setVideos] = useState([]);
    const [liveVideo, setLiveVideo] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        // Fetch videos from YouTube API
        const fetchVideos = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`
                );
                const data = await response.json();

                if (data.items) {
                    const liveStream = data.items.find(
                        (item) => item.snippet.liveBroadcastContent === "live"
                    );
                    setLiveVideo(liveStream || null);
                    setVideos(data.items);
                }
            } catch (error) {
                console.error("Error fetching YouTube videos:", error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <Box sx={{ padding: 3 }}>
            {/* Live Video Section */}
            <Typography variant="h4" align="center" gutterBottom>
                {liveVideo ? "Live Now" : selectedVideo ? "Now Playing" : "Latest Videos"}
            </Typography>

            {liveVideo && !selectedVideo && (
                <Box sx={{ marginBottom: 3, textAlign: "center" }}>
                    <iframe
                        width="100%"
                        height="500"
                        src={`https://www.youtube.com/embed/${liveVideo.id.videoId}?autoplay=1&mute=1`}
                        title={liveVideo.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <Typography variant="h6" sx={{ marginTop: 2 }}>
                        {liveVideo.snippet.title}
                    </Typography>
                </Box>
            )}

            {/* Video Player */}
            {selectedVideo && (
                <Box sx={{ marginBottom: 3, textAlign: "center" }}>
                    <iframe
                        width="100%"
                        height="500"
                        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                        title={selectedVideo.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <Typography variant="h6" sx={{ marginTop: 2 }}>
                        {selectedVideo.snippet.title}
                    </Typography>
                </Box>
            )}

            {/* Video Gallery */}
            <Grid container spacing={3}>
                {videos.map((video) => (
                    <Grid item xs={12} sm={6} md={4} key={video.id.videoId}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={video.snippet.thumbnails.high.url}
                                alt={video.snippet.title}
                                onClick={() => setSelectedVideo(video)}
                                sx={{ cursor: "pointer" }}
                            />
                            <CardContent>
                                <Typography variant="h6">{video.snippet.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {new Date(video.snippet.publishedAt).toLocaleDateString()}
                                </Typography>
                                <Button
                                    size="small"
                                    color="primary"
                                    onClick={() => setSelectedVideo(video)}
                                >
                                    Play
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export const Photos = () => {
    return (
        <>
        <Hero backGroundImageSrc={'url(/assets/photos.jpg)'}/>
            <YouTubePage/>
        </>
    )
}