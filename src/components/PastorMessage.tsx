import React from "react";
import { Box, Typography, Container, Grid, CardMedia, Paper } from "@mui/material";

const PastorMessage = () => {
    return (
        <Box
            sx={{
                position: "relative",
                background: "linear-gradient(to bottom, rgba(250,250,250,1), rgba(255,255,255,1))",
                textAlign: "center",
                py: 10,
                px: 4,
                width: "100vw", // Ensures it takes full width
            }}
        >

            <Container maxWidth="xl">
                {/* Full-width centered header */}
                <Paper
                    elevation={3}
                    sx={{
                        p: 6,
                        borderRadius: "16px",
                        background: "white",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Grid container spacing={6} alignItems="center" justifyContent="center">
                        {/* Pastor's Image */}
                        <Grid item xs={12} md={4}>
                            <CardMedia
                                component="img"
                                image={`${process.env.PUBLIC_URL}/assets/gerard.jpg`}  // Replace with actual pastor image path
                                alt="Pastor Gerard Chimbganda"
                                sx={{
                                    width: "100%",
                                    maxWidth: "300px",
                                    height: "auto",
                                    borderRadius: "50%", // Makes the image circular
                                    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
                                    margin: "0 auto", // Centers the image
                                }}
                            />
                        </Grid>

                        {/* Pastor's Message */}
                        <Grid item xs={12} md={8}>
                            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#7b523a" }}>
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
                                "Welcome to Praise Tabernacle Apostolic Faith Mission’s website. I am
                                Pastor Gerard T. Chimbganda, and I want to tell you that God is good all the time!
                                I hope you find the information you need here. We are an assembly of believers in the
                                Lord Jesus Christ and a proud member of Apostolic Faith Ministry (AFM) International.

                                By God’s grace, we planted our church in Ireland in 2004 and have since grown into
                                a loving, giving Christian family. Our vision is to go forth and preach the Good News of
                                the gospel of Jesus Christ—locally and nationally.

                                As part of this Great Commission, we are striving to establish new assemblies across
                                Ireland, fostering revival and spiritual leadership. Our mission is to equip ministers
                                who understand the unique needs and challenges of our communities.
                            </Typography>
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
                                Jesus Christ, the Son of the Living God, gave His life for you and me.
                                Through His resurrection, we have eternal life in Him. This is the Good News of the Gospel,
                                the message we share, and the reason we live.

                                All are welcome to join us as we walk in faith and live the abundant life He has given us.
                                Thank you for visiting our website. I look forward to seeing you in one of our services soon!"
                            </Typography>
                            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4, color: "#7b523a" }}>
                                - Pastor Gerard Chimbganda
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            {/* Gradient Fade to Merge into Service Times Section */}
            {/*<Box*/}
            {/*    sx={{*/}
            {/*        position: "absolute",*/}
            {/*        bottom: "-20px",*/}
            {/*        left: 0,*/}
            {/*        width: "100%",*/}
            {/*        height: "70px",  // Adjust height for smoother blend*/}
            {/*        background: "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(253,246,227,1))",*/}
            {/*        zIndex: 2,*/}
            {/*    }}*/}
            {/*/>*/}
        </Box>
    );
};

export default PastorMessage;