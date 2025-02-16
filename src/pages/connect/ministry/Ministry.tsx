import React from "react";
import { Box, Typography, Container, Grid, CardMedia, Button } from "@mui/material";
import { Ministry } from "../../../types";
import Hero from "../../../components/Hero";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../../utils/routes";

const MinistryTemplate = (props: { ministry: Ministry}) => {
    const { ministry } = props;
    const navigate = useNavigate();
    return (
        <>
            <Hero
                backGroundImageSrc={`url(${ministry.heroImage})`}
                height={'40vh'}
                title={ministry.name}
                message={ministry.description}
            />

            {ministry.relatedImages && ministry.relatedImages.length > 0 && (
                <Box sx={{ py: 6, backgroundColor: "#f9f9f9", width: "100vw", mx: "auto" }}>
                    <Container>
                        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "center", color: "#333" }}>
                            A Glimpse into {ministry.name}
                        </Typography>
                        <Grid container spacing={4} justifyContent="center">
                            {ministry.relatedImages.slice(0, 5).map((image, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <CardMedia
                                        component="img"
                                        image={image}
                                        alt={`Past Event ${index + 1}`}
                                        sx={{ height: "200px", objectFit: "cover", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            )}

            <Box sx={{ py: 8, mt: 4, backgroundColor: "#f1f5f9", textAlign: "center", width: "100vw", mx: "auto" }}>
                <Container>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#333" }}>
                        Join {ministry.name}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, fontSize: "18px", lineHeight: 1.6, color: "#555" }}>
                        {ministry.joinInstructions}
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#055594",
                            color: "#fff",
                            '&:hover': { backgroundColor: "#033d6c" }
                        }}
                        size="large"
                        onClick={() => navigate(PageRoutes.Contact)}
                    >
                        Get Involved
                    </Button>
                </Container>
            </Box>
        </>
    );
};

export default MinistryTemplate;