import React from "react";
import { Box, Typography, Container, Grid, CardMedia, Button } from "@mui/material";
import { Ministry } from "../../types";
import Hero from "../../components/Hero";
import { useNavigate } from "react-router-dom";
import { PageName, PageRoutes } from "../../utils/routes";

const MinistryTemplate = (ministry: Ministry) => {
    const navigate = useNavigate();
    return (
        <>
            {/* Hero Section with Glassmorphic Overlay */}
            <Box
                sx={{
                    position: "relative",
                    height: "40vh",
                    background: `url(${ministry.heroImage}) center/cover no-repeat`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "#fff",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
                        backdropFilter: "blur(5px)", // Glassmorphic effect
                    }}
                />
                <Container sx={{ position: "relative", zIndex: 2 }}>
                    <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                        {ministry.name}
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: "700px", mt: 2 }}>
                        {ministry.description}
                    </Typography>
                </Container>
            </Box>

            {/* Image Gallery Section with Hover Effects */}
            {ministry.relatedImages && ministry.relatedImages.length > 0 && (
                <Box sx={{ py: 6, background: "linear-gradient(to bottom, #f9f9f9, #eef1f5)", width: "100vw", mx: "auto" }}>
                    <Container>
                        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "center", color: "#333" }}>
                            A Glimpse into {ministry.name}
                        </Typography>
                        <Grid container spacing={3} justifyContent="center">
                            {ministry.relatedImages.slice(0, 6).map((image, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Box
                                        sx={{
                                            position: "relative",
                                            overflow: "hidden",
                                            borderRadius: "12px",
                                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                            "&:hover img": {
                                                transform: "scale(1.1)",
                                                transition: "transform 0.3s ease-in-out",
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={image}
                                            alt={`Event ${index + 1}`}
                                            sx={{
                                                width: "100%",
                                                height: "200px",
                                                objectFit: "cover",
                                                transition: "transform 0.3s ease",
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                width: "100%",
                                                background: "rgba(0, 0, 0, 0.6)",
                                                color: "#fff",
                                                padding: "8px",
                                                fontSize: "14px",
                                                textAlign: "center",
                                            }}
                                        >
                                            Event {index + 1}
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            )}

            {/* Join Section with Background */}
            <Box
                sx={{
                    py: 10,
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/join_bg.jpg)`, // Add an engaging background
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    textAlign: "center",
                    color: "#fff",
                    width: "100vw",
                    mx: "auto",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.5)", // Darker overlay for readability
                    }}
                />
                <Container sx={{ position: "relative", zIndex: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                        Join {ministry.name}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, fontSize: "18px", lineHeight: 1.6 }}>
                        {ministry.joinInstructions}
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#E42C2C",
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: "16px",
                            px: 4,
                            py: 1.5,
                            borderRadius: "30px",
                            "&:hover": { backgroundColor: "#b71c1c" },
                        }}
                        size="large"
                        onClick={() => navigate(PageRoutes[PageName.Contact])}
                    >
                        Get Involved
                    </Button>
                </Container>
            </Box>
        </>
    );
};

export default MinistryTemplate;