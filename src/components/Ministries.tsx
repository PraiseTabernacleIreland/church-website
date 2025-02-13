import { Box, Grid, Typography } from "@mui/material";
import { useAppData } from "../contexts/AppDataContext";
import { useNavigate } from "react-router-dom";

const MinistriesSection = () => {
    const { ministries } = useAppData();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                py: 10,
                px: 4,
                background: "#f7f9fc",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Grid container spacing={6} alignItems="center" sx={{ maxWidth: "1200px" }}>
                {/* Title & Description - Above the Cards on Mobile */}
                <Grid item xs={12} md={5} sx={{ order: { xs: 1, md: 2 }, textAlign: { xs: "center", md: "right" } }}>
                    <Box sx={{ maxWidth: "500px", ml: "auto" }}>
                        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, color: "#333" }}>
                            Ready to Make a Difference?
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
                            From volunteering to attending events, there's a place for you to get involved and grow.
                            Take the first step today!
                        </Typography>
                    </Box>
                </Grid>

                {/* Ministries Grid */}
                <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 } }}>
                    <Grid container spacing={2}>
                        {ministries.map((ministry, index) => (
                            <Grid item xs={6} sm={4} md={3} key={index}>
                                <Box
                                    sx={{
                                        position: "relative",
                                        height: "130px", // Smaller card height
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        cursor: "pointer",
                                        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
                                        "&:hover .overlay": { background: "rgba(0, 0, 0, 0.6)" },
                                    }}
                                    onClick={() => navigate(`${ministry.route}`)}
                                >
                                    {/* Ministry Image */}
                                    <Box
                                        component="img"
                                        src={ministry.heroImage}
                                        alt={ministry.name}
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            filter: "brightness(85%)",
                                        }}
                                    />

                                    {/* Name Always Visible */}
                                    <Box
                                        className="overlay"
                                        sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            left: 0,
                                            width: "100%",
                                            background: "rgba(0, 0, 0, 0.5)", // Semi-transparent black for text visibility
                                            padding: "6px 0",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography variant="body2" sx={{ fontWeight: "bold", color: "#fff", fontSize: "12px" }}>
                                            {ministry.name}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MinistriesSection;