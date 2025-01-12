import React from "react";
import Hero from "../components/Hero";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { AccessTime, YouTube, LocationOn } from "@mui/icons-material";

const ServiceInfo = () => {
    const youtubeLink = "https://www.youtube.com/channel/yourchannel"; // Replace with your YouTube channel link
    const mapsLink = "https://www.google.com/maps?q=church+location"; // Replace with your Google Maps location link
    const serviceTimes = [
        { day: "Sunday", time: "10:00 AM" },
        { day: "Wednesday", time: "7:00 PM" },
        // Add more service times here
    ];

    return (
        <Box sx={{ padding: 3, backgroundColor: "#f5f5f5", borderRadius: 2 }}>
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
                Church Service Information
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {/* Service Times */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={6} sx={{ height: "100%" }}>
                        <CardContent sx={{ textAlign: "center", backgroundColor: "#1e88e5", color: "#fff", padding: 3 }}>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                                <AccessTime sx={{ fontSize: 30, verticalAlign: "middle", marginRight: 1 }} />
                                Service Times
                            </Typography>
                            <ul style={{ paddingLeft: 20, listStyleType: "none" }}>
                                {serviceTimes.map((service, index) => (
                                    <li key={index} style={{ marginBottom: "10px" }}>
                                        <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "bold" }}>
                                            {service.day} - {service.time}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>

                {/* YouTube Link */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={6} sx={{ height: "100%" }}>
                        <CardContent sx={{ textAlign: "center", backgroundColor: "#ff7043", color: "#fff", padding: 3 }}>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                                <YouTube sx={{ fontSize: 30, verticalAlign: "middle", marginRight: 1 }} />
                                Watch Live on YouTube
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                Join our services live on YouTube.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                href={youtubeLink}
                                target="_blank"
                                sx={{
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    borderRadius: "30px",
                                    padding: "10px 20px",
                                    backgroundColor: "#fff",
                                    color: "#ff7043",
                                    '&:hover': { backgroundColor: "#ff5722", color: "#fff" }
                                }}
                            >
                                Watch Live
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Maps Link */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card elevation={6} sx={{ height: "100%" }}>
                        <CardContent sx={{ textAlign: "center", backgroundColor: "#66bb6a", color: "#fff", padding: 3 }}>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                                <LocationOn sx={{ fontSize: 30, verticalAlign: "middle", marginRight: 1 }} />
                                Get Directions
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                Find our church location on Google Maps.
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                href={mapsLink}
                                target="_blank"
                                sx={{
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    borderRadius: "30px",
                                    padding: "10px 20px",
                                    backgroundColor: "#fff",
                                    color: "#66bb6a",
                                    '&:hover': { backgroundColor: "#388e3c", color: "#fff" }
                                }}
                            >
                                Open Maps
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export const Home = () => {
    return (
        <>
            <Hero backGroundImageSrc={'url(/assets/church.png)'} height={'60vh'}/>
            {/*<ServiceInfo/>*/}
        </>
    )
}


