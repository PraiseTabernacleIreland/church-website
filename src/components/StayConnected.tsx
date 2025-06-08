import { Box, Typography, Grid, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FACEBOOK_LINK, INSTAGRAM_LINK, YOUTUBE_CHANNEL } from "../utils/constants";

const YOUTUBE_CHANNEL_URL = `https://www.youtube.com/${YOUTUBE_CHANNEL}`;

const SocialEngagement = () => {
    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: `url(/assets/img_3.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                py: { xs: 10, md: 12 },
                px: { xs: 4, md: 8 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "500px",
                textAlign: "center",
            }}
        >
            {/* Dark Overlay for Contrast */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
                    zIndex: 1,
                }}
            />

            <Grid container spacing={6} alignItems="center" sx={{ maxWidth: "1200px", position: "relative", zIndex: 2 }}>
                {/* Left Section - Call to Action */}
                <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "bold",
                            mb: 2,
                            color: "#fff" // Improved contrast
                        }}
                    >
                        Stay Updated, Stay Inspired
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ mb: 3, fontSize: "18px", lineHeight: 1.7, color: "#f0f0f0" }}
                    >
                        Engage with us beyond Sundays! Be part of the conversation, watch powerful messages, and get the latest updates on upcoming events.
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ fontSize: "16px", fontWeight: "bold", color: "#e1e1e1" }}
                    >
                        Follow us and never miss a moment.
                    </Typography>
                </Grid>

                {/* Right Section - Social Media Links */}
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                startIcon={<YouTubeIcon sx={{ fontSize: 32 }} />}
                                href={YOUTUBE_CHANNEL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: "100%",
                                    backgroundColor: "#CC0000",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    py: 1.8,
                                    borderRadius: "8px",
                                    fontSize: "16px",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": { backgroundColor: "#990000", transform: "scale(1.05)", boxShadow: "0 4px 12px rgba(255,255,255,0.3)" },
                                }}
                            >
                                YouTube
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                startIcon={<FacebookIcon sx={{ fontSize: 32 }} />}
                                href={FACEBOOK_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: "100%",
                                    backgroundColor: "#4267B2",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    py: 1.8,
                                    borderRadius: "8px",
                                    fontSize: "16px",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": { backgroundColor: "#30497B", transform: "scale(1.05)", boxShadow: "0 4px 12px rgba(255,255,255,0.3)" },
                                }}
                            >
                                Facebook
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                startIcon={<InstagramIcon sx={{ fontSize: 32 }} />}
                                href={INSTAGRAM_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: "100%",
                                    backgroundImage: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    py: 1.8,
                                    borderRadius: "8px",
                                    fontSize: "16px",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        boxShadow: "0 4px 12px rgba(255, 255, 255, 0.3)",
                                        backgroundImage: "linear-gradient(45deg, #e6683c 0%, #dc2743 25%, #cc2366 50%, #bc1888 75%, #9b1b96 100%)"
                                    },
                                }}
                            >
                                Instagram
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SocialEngagement;