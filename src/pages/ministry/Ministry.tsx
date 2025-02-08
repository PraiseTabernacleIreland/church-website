import React from "react";
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import { Ministry } from "../../types";


const MinistryTemplate = (ministry: Ministry) => {
    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${ministry.heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    textAlign: "center",
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: "bold" }}>{ministry.name}</Typography>
            </Box>

            {/* Description Section */}
            <Container sx={{ py: 8 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, textAlign: "center", color: "#7b523a" }}>
                    About {ministry.name}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: 1.8, textAlign: "center", color: "#555" }}>
                    {ministry.description}
                </Typography>
            </Container>

            {/* Past Events & Pictures Section */}
            {ministry.events && ministry.events.length > 0 && (
                <Container sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "center", color: "#7b523a" }}>
                        Past Events
                    </Typography>
                    <Grid container spacing={4}>
                        {ministry.events.map((event, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
                                    <CardMedia
                                        component="img"
                                        image={event.image}
                                        alt={event.title}
                                        sx={{ height: "200px", objectFit: "cover" }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#7b523a" }}>
                                            {event.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "#555" }}>
                                            {event.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            )}

            {/* How to Join Section */}
            <Box sx={{ py: 8, backgroundColor: "#e3f2fd", textAlign: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#7b523a" }}>
                    Join {ministry.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: "18px", lineHeight: 1.6, color: "#555" }}>
                    {ministry.joinInstructions}
                </Typography>
                <Button variant="contained" color="primary" size="large">
                    Get Involved
                </Button>
            </Box>
        </>
    );
};

export default MinistryTemplate;
