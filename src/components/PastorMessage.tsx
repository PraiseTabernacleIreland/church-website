import React, { useState } from "react";
import { Box, Typography, Container, Grid, CardMedia, Paper, Button } from "@mui/material";

const PastorMessage = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMessage = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Box
            sx={{
                position: "relative",
                textAlign: "center",
                py: 10,
                px: 4,
                width: "100vw",
                background: "#F9FAFB",
                backgroundImage: `
                    radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px),
                    radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 10px 10px",
            }}
        >
            <Container maxWidth="xl">
                <Paper
                    elevation={3}
                    sx={{
                        p: 6,
                        borderRadius: "16px",
                        background: "rgba(255, 255, 255, 0.97)", // Ensure contrast
                        backdropFilter: "blur(8px)", // Soft effect
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Grid container spacing={6} alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <CardMedia
                                component="img"
                                image={`${process.env.PUBLIC_URL}/assets/gerard.jpg`}
                                alt="Pastor Gerard Chimbganda"
                                sx={{
                                    width: "100%",
                                    maxWidth: "300px",
                                    height: "auto",
                                    borderRadius: "50%",
                                    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
                                    margin: "0 auto",
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "black" }}>
                                A Message from Our Pastor
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: "#444",
                                    fontSize: "18px",
                                    lineHeight: 1.8,
                                    textAlign: "justify",
                                }}
                            >
                                "Welcome to Praise Tabernacle Apostolic Faith Mission’s website. I am Pastor Gerard T. Chimbganda,
                                and I want to tell you that God is good all the time! I hope you find the information you need here.
                            </Typography>

                            {isExpanded && (
                                <>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "#444",
                                            fontSize: "18px",
                                            lineHeight: 1.8,
                                            textAlign: "justify",
                                            mt: 2,
                                        }}
                                    >
                                        We are an assembly of believers in the Lord Jesus Christ and a proud member of Apostolic Faith Ministry (AFM) International.

                                        By God’s grace, we planted our church in Ireland in 2004 and have since grown into a loving, giving Christian family.
                                        Our vision is to go forth and preach the Good News of the gospel of Jesus Christ—locally and nationally.

                                        As part of this Great Commission, we are striving to establish new assemblies across Ireland, fostering revival and spiritual leadership.
                                        Our mission is to equip ministers who understand the unique needs and challenges of our communities.

                                        Jesus Christ, the Son of the Living God, gave His life for you and me. Through His resurrection, we have eternal life in Him.
                                        This is the Good News of the Gospel, the message we share, and the reason we live.

                                        All are welcome to join us as we walk in faith and live the abundant life He has given us.
                                        Thank you for visiting our website. I look forward to seeing you in one of our services soon!
                                    </Typography>
                                </>
                            )}

                            <Button
                                onClick={toggleMessage}
                                sx={{
                                    mt: 3,
                                    px: 4,
                                    py: 1,
                                    borderRadius: "20px",
                                    backgroundColor: "#055594",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                                    transition: "background-color 0.3s ease, transform 0.2s ease-in-out",
                                    "&:hover": {
                                        backgroundColor: "#033d6c",
                                        transform: "scale(1.05)",
                                        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
                                    },
                                }}
                            >
                                {isExpanded ? "Show Less" : "Read More"}
                            </Button>

                            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4, color: "black" }}>
                                - Pastor Gerard Chimbganda
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default PastorMessage;