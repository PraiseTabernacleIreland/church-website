import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import {useAppData} from "../contexts/AppDataContext";
import {useNavigate} from "react-router-dom";

const MinistriesSection = () => {
    const {ministries} = useAppData();
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                py: 8,
                px: 4,
                background: "#f0f4f8", // Slightly darker background for subtle contrast
                textAlign: "center",
                position: "relative",
            }}
        >
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, color: "#333" }}>
                Ready to Make a Difference?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
                From volunteering to attending events, there's a place for you to get
                involved and grow. Take the first step today!
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {ministries.map((ministry, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            onClick={() => navigate(`${ministry.route}`)}
                            sx={{
                                cursor: "pointer",
                                height: "100%",
                                borderRadius: 2,
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.2s ease-in-out",
                                backgroundImage: ministry.backgroundImage,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                                },
                            }}
                        >
                            <CardContent
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    background: "rgba(0, 0, 0, 0.4)", // Slightly lighter overlay for better harmony
                                    color: "#fff",
                                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
                                }}
                            >
                                <Box sx={{ mb: 2 }}>{ministry.icon}</Box>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "bold", mb: 1 }}
                                    gutterBottom
                                >
                                    {ministry.name}
                                </Typography>
                                <Typography variant="body2" sx={{ textAlign: "center" }}>
                                    {ministry.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MinistriesSection;
