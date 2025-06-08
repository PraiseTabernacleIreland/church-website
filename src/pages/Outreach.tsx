import React from "react";
import Hero from "../components/Hero";
import {Box, Typography, Button, Grid, Card, CardMedia} from "@mui/material";

const HeroSection = () => {
    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    height: "100vh", // Full viewport height
                    backgroundImage: `url(/assets/outreach.jpg)`, // Replace with your image path
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed", // Key for the parallax effect
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    textAlign: "center",
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                    Welcome to Praise Tabernacle
                </Typography>
                <Typography variant="h6" sx={{ maxWidth: "600px", marginBottom: 4 }}>
                    Discover a place where you belong and find hope, purpose, and love.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    href="/about"
                    sx={{
                        textTransform: "none",
                        borderRadius: 2,
                        paddingX: 4,
                        backgroundColor: "#1976d2",
                        ":hover": { backgroundColor: "#155a9a" },
                    }}
                >
                    Learn More
                </Button>
            </Box>

            {/* Content Section 1 */}
            <Box
                sx={{
                    padding: 4,
                    backgroundColor: "#f5f5f5",
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                    Our Mission
                </Typography>
                <Typography variant="body1">
                    We aim to bring the message of hope and love to our community. Join us in making a difference and discovering the power of faith.
                </Typography>
            </Box>

            {/* Content Section 2 */}
            <Box
                sx={{
                    height: "100vh", // Another full viewport height for parallax
                    backgroundImage: "url(/path/to/another/image.jpg)", // Replace with another image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    textAlign: "center",
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Join Us on Sunday
                </Typography>
            </Box>
        </>
    );
};


const HelpingCommunity = () => {
    return (
        <Box sx={{ padding: 5 }}>
            {/* Title */}
            <Typography variant="h4" align="center" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                Helping Our Community
            </Typography>

            {/* Description */}
            <Typography variant="body1" align="center" sx={{ marginBottom: 4 }}>
                Praise Tabernacle ministers to the underprivileged and homeless who live in some of the hardest conditions in Dublin, including the
                "hard sleepers" who are the people found living in doorways and under bridges. The answer is Jesus and the God love that puts faith
                to work:
            </Typography>

            {/* Images */}
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Card sx={{ boxShadow: 0 }}>
                        <CardMedia
                            component="img"
                            image={`/assets/img.png`} // Replace with your image path
                            alt="Helping the needy"
                            sx={{ borderRadius: 2 }}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ boxShadow: 0 }}>
                        <CardMedia
                            component="img"
                            image={`/assets/img_1.png`} // Replace with your image path
                            alt="Donation box"
                            sx={{ borderRadius: 2 }}
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ boxShadow: 0 }}>
                        <CardMedia
                            component="img"
                            image={`/assets/img_2.png`} // Replace with your image path
                            alt="Hands together"
                            sx={{ borderRadius: 2 }}
                        />
                    </Card>
                </Grid>
            </Grid>

            {/* Mission Section */}
            <Box sx={{ marginTop: 5, textAlign: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: 2 }}>
                    Our Mission & Vision
                </Typography>
                <Typography variant="body1" sx={{ maxWidth: 600, margin: "0 auto", marginBottom: 2 }}>
                    What good is it, my brothers, if someone says he has faith but does not have works? Can that faith save him? If a brother or
                    sister is poorly clothed and lacking in daily food, and one of you says to them, "Go in peace, be warmed and filled," without
                    giving them the things needed for the body, what good is that? So also faith by itself, if it does not have works, is dead. But
                    someone will say, "You have faith and I have works." Show me your faith apart from your works, and I will show you my faith by my
                    works. James 2:14-18
                </Typography>

                {/* Read More Button */}
                <Button
                    variant="contained"
                    color="primary"
                    href="/mission"
                    sx={{
                        textTransform: "none",
                        borderRadius: 2,
                        backgroundColor: "#1976d2",
                        ":hover": { backgroundColor: "#155a9a" },
                    }}
                >
                    Read More
                </Button>
            </Box>
        </Box>
    );
};


export const Outreach = () => {
    return (
        <>
            <Hero backGroundImageSrc={`url(/assets/outreach.jpg)`} height={'60vh'}/>
            {/*<HeroSection/>*/}
            <HelpingCommunity/>
        </>
    )
}