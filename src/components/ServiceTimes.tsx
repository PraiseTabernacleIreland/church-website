import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';
import { useAppData } from "../contexts/AppDataContext";

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
                mr: index < service.buttons.length - 1 ? 1 : 0,
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
                    mr: index < service.buttons.length - 1 ? 1 : 0,
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
                py: 8,
                px: 4,
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
                }}
            >
                Join Us for Worship
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: "1200px" }}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                background: "#ffffff",
                                border: "1px solid #e0e0e0",
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                                borderRadius: "16px",
                                overflow: "hidden",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                '&:hover': {
                                    transform: "scale(1.05)",
                                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                                },
                            }}
                        >
                            <CardMedia component="img" height="160" image={service.image} alt={service.title} />
                            <CardContent sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "#333",
                                        fontWeight: "bold",
                                        mb: 1,
                                    }}
                                >
                                    {service.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
                                    {service.time}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: "#777", mb: 2 }}
                                >
                                    {service.description}
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
