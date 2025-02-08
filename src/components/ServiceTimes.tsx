import {Box, Button, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import React from "react";
import {useAppData} from "../contexts/AppDataContext";

const ServiceTimesSection = () => {
    const { services }  = useAppData();
    return (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            py: 8,
            px: 4,
            background: "linear-gradient(to bottom, #fdf6e3, #e0f7fa)", // Smooth fade into the Ministries Section
            textAlign: "center",
            position: "relative",
        }}
    >

        {/*<Box*/}
        {/*    sx={{*/}
        {/*        position: "absolute",*/}
        {/*        // bottom: 0,*/}
        {/*        // left: 0,*/}
        {/*        top: 0,*/}
        {/*        width: "100%",*/}
        {/*        height: "100px", // Extend gradient for smoother transition*/}
        {/*        background: "linear-gradient(0deg, #faf3e0),rgba(0, 0, 0, 0) ", // Match Service Times Section*/}
        {/*        zIndex: 4,*/}
        {/*    }}*/}
        {/*/>*/}
        <Typography
            variant="h3"
            sx={{
                // fontFamily: '"Montserrat", sans-serif',
                color: "#7b523a",
                fontWeight: "bold",
                mb: 6,
            }}
        >
            Join Us for Worship
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: "1200px" }}>
            {/** Card Component */}
            {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card
                        sx={{
                            background: "rgba(255, 255, 255, 0.8)",
                            backdropFilter: "blur(8px)",
                            border: "2px solid rgba(235, 205, 178, 0.5)",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                            borderRadius: "24px",
                            overflow: "hidden",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            // "&:hover": {
                            //     transform: "scale(1.03)",
                            //     boxShadow: "0 6px 25px rgba(0, 0, 0, 0.2)",
                            // },
                        }}
                    >
                        <CardMedia component="img" height="160" image={service.image} alt={service.title} />
                        <CardContent sx={{ textAlign: "center" }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    // fontFamily: '"Montserrat", sans-serif',
                                    color: service.color,
                                    fontWeight: "bold",
                                    mb: 1,
                                }}
                            >
                                {service.title}
                            </Typography>
                            <Typography variant="body1" sx={{ fontFamily: '"Montserrat", sans-serif', mb: 2 }}>
                                {service.time}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ fontFamily: '"Montserrat", sans-serif', color: "#5f493e", mb: 2 }}
                            >
                                {service.description}
                            </Typography>
                            <Box>
                                {service.buttons.map((button, i) => (
                                    <Button
                                        key={i}
                                        variant={button.variant}
                                        size="small"
                                        href={button.link}
                                        sx={{
                                            fontFamily: '"Montserrat", sans-serif',
                                            backgroundColor: button.variant === "contained" ? service.color : "transparent",
                                            color: button.variant === "contained" ? "#fff" : service.color,
                                            border: button.variant === "outlined" ? `1px solid ${service.color}` : "none",
                                            mr: i < service.buttons.length - 1 ? 1 : 0,
                                            // "&:hover": {
                                            //     backgroundColor: button.variant === "contained" ? "#843f29" : "rgba(0,0,0,0.05)",
                                            // },
                                        }}
                                    >
                                        {button.text}
                                    </Button>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        {/* Bottom Gradient */}
        {/*<Box*/}
        {/*    sx={{*/}
        {/*        position: "absolute",*/}
        {/*        bottom: 0,*/}
        {/*        left: 0,*/}
        {/*        width: "100%",*/}
        {/*        height: "100px",*/}
        {/*        background: "linear-gradient(to bottom, rgba(255, 255, 255, 0), #e3f2fd)", // Fades into Ministries section*/}
        {/*        zIndex: 2,*/}
        {/*    }}*/}
        {/*/>*/}
    </Box>
)
};

export default ServiceTimesSection;