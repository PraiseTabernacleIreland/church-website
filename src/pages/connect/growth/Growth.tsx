import React from "react";
import { Box, Typography, Container, Grid, Button, Card, CardMedia, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Hero from "../../../components/Hero";
import {GrowthGroup} from "../../../types";
import {PageRoutes} from "../../../utils/routes";

const GrowthTemplate = (props: { growth: GrowthGroup }) => {
    const { growth } = props;
    const navigate = useNavigate();

    return (
        <>
            {/* Hero Section */}
            <Hero
                backGroundImageSrc={`url(${growth.heroImage})`}
                height="50vh"
                title={growth.name}
                message={growth.description}
            />

            {/* Why It Matters */}
            <Box sx={{ py: 6, backgroundColor: "#f9f9f9", width: "100%" }}>
                <Container>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "center", color: "#333" }}>
                        Why {growth.name} Matters
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: "center", fontSize: "18px", lineHeight: 1.8, color: "#555", maxWidth: "800px", mx: "auto" }}>
                        {growth.whyItMatters}
                    </Typography>
                </Container>
            </Box>

            {/* How It Works */}
            <Box sx={{ py: 6 }}>
                <Container>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "center", color: "#333" }}>
                        How {growth.name} Works
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {growth.activities.map((activity, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", textAlign: "center", p: 2 }}>
                                    <CardMedia
                                        component="img"
                                        image={activity.image}
                                        alt={activity.name}
                                        sx={{ height: "180px", objectFit: "cover", borderRadius: "8px" }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, color: "#333" }}>
                                            {activity.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: "#555" }}>
                                            {activity.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>


            {/* Call to Action */}
            <Box sx={{ py: 8, mt: 4, backgroundColor: "#055594", textAlign: "center", color: "#fff", width: "100%" }}>
                <Container>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                        Get Involved with {growth.name}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, fontSize: "18px", lineHeight: 1.6 }}>
                        {growth.joinInstructions}
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#fff",
                            color: "#055594",
                            fontWeight: "bold",
                            textTransform: "none",
                            "&:hover": { backgroundColor: "#ddd" }
                        }}
                        size="large"
                        onClick={() => navigate(PageRoutes.Contact)}
                    >
                        Join Now
                    </Button>
                </Container>
            </Box>
        </>
    );
};

export default GrowthTemplate;