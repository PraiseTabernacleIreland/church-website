import { Box, Typography, Grid, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@yourchannel";
const FACEBOOK_PAGE_URL = "https://www.facebook.com/yourpage";
const INSTAGRAM_PAGE_URL = "https://www.instagram.com/yourpage";

const StayConnected = () => {
    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img_3.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                py: { xs: 8, md: 12 },
                px: { xs: 4, md: 8 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "450px",
            }}
        >
            {/* Soft Gradient Overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to right, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))",
                    zIndex: 1,
                }}
            />

            <Grid container spacing={6} alignItems="center" sx={{ maxWidth: "1200px", position: "relative", zIndex: 2 }}>
                {/* Left Section - Message */}
                <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
                    <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, color: "#333" }}>
                        Stay Connected
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, fontSize: "18px", lineHeight: 1.7, color: "#444" }}>
                        Follow us online and be part of our growing faith community. Watch sermons, join discussions,
                        and stay updated on upcoming events.
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "16px", fontWeight: "bold", color: "#555" }}>
                        Join us and never miss a message!
                    </Typography>
                </Grid>

                {/* Right Section - Social Media Buttons */}
                <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                startIcon={<YouTubeIcon />}
                                href={YOUTUBE_CHANNEL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: "100%",
                                    backgroundColor: "#E52326",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    py: 1.5,
                                    borderRadius: "8px",
                                    transition: "transform 0.2s ease-in-out",
                                    "&:hover": { backgroundColor: "#b71c1c", transform: "scale(1.05)" },
                                }}
                            >
                                YouTube
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                startIcon={<FacebookIcon />}
                                href={FACEBOOK_PAGE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: "100%",
                                    backgroundColor: "#055594",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    py: 1.5,
                                    borderRadius: "8px",
                                    transition: "transform 0.2s ease-in-out",
                                    "&:hover": { backgroundColor: "#033d6c", transform: "scale(1.05)" },
                                }}
                            >
                                Facebook
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Button
                                variant="contained"
                                startIcon={<InstagramIcon />}
                                href={INSTAGRAM_PAGE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: "100%",
                                    backgroundColor: "#E42C2C",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    py: 1.5,
                                    borderRadius: "8px",
                                    transition: "transform 0.2s ease-in-out",
                                    "&:hover": { backgroundColor: "#b71c1c", transform: "scale(1.05)" },
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

export default StayConnected;