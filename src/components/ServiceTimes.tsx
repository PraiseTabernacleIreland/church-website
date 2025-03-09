import { Box, Button, Card, CardContent, CardMedia, Grid, Typography, Paper } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';
import { useAppData } from "../contexts/AppDataContext";
import { LocalParking, Coffee, School } from "@mui/icons-material";

const NavigationButton = ({ isExternal, index, button, service }) => {
    return isExternal ? (
        <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            variant={button.variant}
            size="small"
            href={button.link}
            sx={{
                backgroundColor: button.variant === "contained" ? "#055594" : "transparent",
                color: button.variant === "contained" ? "#fff" : "#055594",
                border: button.variant === "outlined" ? `1px solid #055594` : "none",
                mr: { xs: 0, sm: 1 },
                mb: 1,
                width: { xs: "100%", sm: "auto" }, // Full width buttons on mobile
                '&:hover': {
                    backgroundColor: button.variant === "contained" ? "#033d6c" : "rgba(0, 0, 0, 0.05)",
                },
            }}
        >
            {button.text}
        </Button>
    ) : (
        <Link to={button.link} style={{ textDecoration: 'none' }}>
            <Button
                key={index}
                variant={button.variant}
                size="small"
                sx={{
                    backgroundColor: button.variant === "contained" ? "#055594" : "transparent",
                    color: button.variant === "contained" ? "#fff" : "#055594",
                    border: button.variant === "outlined" ? `1px solid #055594` : "none",
                    mr: { xs: 0, sm: 1 },
                    mb: 1,
                    width: { xs: "100%", sm: "auto" },
                    '&:hover': {
                        backgroundColor: button.variant === "contained" ? "#033d6c" : "rgba(0, 0, 0, 0.05)",
                    },
                }}
            >
                {button.text}
            </Button>
        </Link>
    );
};

const ServiceTimesSection = () => {
    const { services } = useAppData();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: { xs: 6, md: 8 },
                px: { xs: 2, md: 4 },
                background: "#e1e8f0",
                textAlign: "center",
                position: "relative",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    color: "#333",
                    fontWeight: "bold",
                    mb: 6,
                    textAlign: "center",
                }}
            >
                Join Us for Worship & Prayer
            </Typography>

            {/* FIRST ROW - Sunday Service + Details */}
            <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: "1200px" }}>
                <Grid item xs={12}>
                    <Paper
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundImage: `url(${services[0].image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            borderRadius: "16px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            overflow: "hidden",
                            py: { xs: 6, md: 8 },
                            px: { xs: 3, md: 6 },
                            position: "relative",
                            color: "#fff",
                            textAlign: "center",
                            "::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "rgba(0, 0, 0, 0.6)",
                                zIndex: 1,
                            },
                        }}
                    >
                        {/* Content Wrapper */}
                        <Box sx={{ position: "relative", zIndex: 3, maxWidth: "800px", textAlign: "center" }}>
                            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)" }}>
                                Sunday Morning Worship
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                {services[0].time}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                                {services[0].description}
                            </Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                {services[0].buttons.map((button, i) => (
                                    <NavigationButton button={button} index={i} service={services[0]} isExternal={button.isExternal} />
                                ))}
                            </Box>

                            {/* Sunday Service Details */}
                            <Grid container justifyContent="center" sx={{ mt: 4, width: "100%", rowGap: { xs: 2, sm: 4 } }}>
                                {[
                                    { icon: <School sx={{ fontSize: 40, color: "#42A5F5", mb: 1 }} />, title: "Sunday School", desc: "We offer engaging Sunday School sessions for kids of all ages during each service." },
                                    { icon: <LocalParking sx={{ fontSize: 40, color: "#42A5F5", mb: 1 }} />, title: "Parking", desc: "Dedicated parking available onsite, with additional spaces nearby." },
                                    { icon: <Coffee sx={{ fontSize: 40, color: "#42A5F5", mb: 1 }} />, title: "Coffee & Fellowship", desc: "Stay after the service for coffee and connection in our welcoming space." }
                                ].map((item, index) => (
                                    <Grid item xs={12} sm={4} key={index} sx={{ textAlign: "center" }}>
                                        {item.icon}
                                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "#f5f5f5" }}>
                                            {item.desc}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            {/* SECOND ROW - Main Service Cards */}
            <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: "1200px", mt: 6 }}>
                {services.slice(1).map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                textAlign: "center",
                                borderRadius: "16px",
                                overflow: "hidden",
                                transition: "transform 0.3s ease",
                            }}
                        >
                            <CardMedia
                                component="img"
                                style={{ width: "100%", objectFit: "cover" }}
                                height="160"
                                image={service.image} alt={service.title} />
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    {service.time}
                                </Typography>
                                <Box>
                                    {service.buttons.map((button, i) => (
                                        <NavigationButton button={button} index={i} service={service} isExternal={button.isExternal} />
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ServiceTimesSection;