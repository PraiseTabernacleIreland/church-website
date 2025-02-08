import React from "react";
import { Box, Typography, Container, Grid, CardMedia, Button } from "@mui/material";
import { Ministry } from "../../types";
import Hero from "../../components/Hero";
import {useNavigate} from "react-router-dom";
import {PageName, PageRoutes} from "../../utils/routes";


const MinistryTemplate = (ministry: Ministry) => {
    const navigate = useNavigate();
    return (
        <>
            {/* Hero Section */}
            {/*<Box*/}
            {/*    sx={{*/}
            {/*        background: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${ministry.heroImage})`,*/}
            {/*        backgroundSize: "cover",*/}
            {/*        backgroundPosition: "center",*/}
            {/*        height: "30vh",*/}
            {/*        display: "flex",*/}
            {/*        alignItems: "center",*/}
            {/*        justifyContent: "center",*/}
            {/*        color: "#fff",*/}
            {/*        textAlign: "center",*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Typography variant="h2" sx={{ fontWeight: "bold" }}>{ministry.name}</Typography>*/}
            {/*</Box>*/}

            <Hero
                backGroundImageSrc={`url(${ministry.heroImage})`}
                height={'40vh'}
                title={ministry.name}
                message={ministry.description}
            />

            {/* Description Section */}
            {/*<Container sx={{ py: 8 }}>*/}
            {/*    <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: 1.8, textAlign: "center", color: "#555" }}>*/}
            {/*        {ministry.description}*/}
            {/*    </Typography>*/}
            {/*</Container>*/}

            {/* Past Event Images Section */}
            {ministry.relatedImages && ministry.relatedImages.length > 0 && (
                <Container sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "center", color: "#7b523a" }}>
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
            )}

            {/* How to Join Section */}
            <Box sx={{ py: 8, backgroundColor: "#e3f2fd", textAlign: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#7b523a" }}>
                    Join {ministry.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, fontSize: "18px", lineHeight: 1.6, color: "#555" }}>
                    {ministry.joinInstructions}
                </Typography>
                <Button variant="contained" color="primary" size="large" onClick={() => navigate(PageRoutes[PageName.Contact])}>
                    Get Involved
                </Button>
            </Box>
        </>
    );
};

export default MinistryTemplate;
