import React, { useState } from "react";
import { Box, Typography, Grid, Button, Collapse, Paper } from "@mui/material";
import { Groups, Church, School, ExpandMore, ExpandLess } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { PageRoutes, PageName } from "../utils/routes";

// Define CSS patterns with better contrast
const connectGroups = [
    {
        title: "Ministries",
        background: "linear-gradient(135deg, rgba(227, 242, 253, 0.9), rgba(187, 222, 251, 0.9))", // Adjusted opacity
        pattern: `radial-gradient(circle, rgba(255, 255, 255, 0.4) 10%, rgba(255, 255, 255, 0) 20%)`,
        textColor: "#003366",
        items: [
            { name: "Media & Creative", icon: <Groups />, description: "Bringing the Gospel to life through media & creativity.", route: PageRoutes[PageName.Media] },
            { name: "Worship", icon: <Church />, description: "Leading worship through music and song.", route: PageRoutes[PageName.Worship] },
            { name: "Hospitality & Ushering", icon: <Groups />, description: "Welcoming and serving our church family.", route: PageRoutes[PageName.Hospitality] },
            { name: "Evangelism & Outreach", icon: <Groups />, description: "Spreading the Gospel and community outreach.", route: PageRoutes[PageName.Evangelism] },
            { name: "Intercession", icon: <Church />, description: "Praying and interceding for the church and world.", route: PageRoutes[PageName.Intercession] },
        ]
    },
    {
        title: "Fellowships",
        background: "linear-gradient(135deg, rgba(232, 245, 233, 0.9), rgba(200, 230, 201, 0.9))",
        pattern: `linear-gradient(45deg, rgba(255, 255, 255, 0.3) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.3) 50%)`,
        textColor: "#1B5E20",
        items: [
            { name: "Men", icon: <Groups />, description: "Men growing in faith and leadership together.", route: PageRoutes[PageName.Men] },
            { name: "Women", icon: <Groups />, description: "Empowering women in their faith journey.", route: PageRoutes[PageName.Women] },
            { name: "Youth & Young Adults", icon: <Groups />, description: "Building the next generation of believers.", route: PageRoutes[PageName.Youth] },
            { name: "Family & Couples", icon: <Groups />, description: "Strengthening families through faith.", route: PageRoutes[PageName.Family] },
        ]
    },
    {
        title: "Spiritual Growth",
        background: "linear-gradient(135deg, rgba(252, 228, 236, 0.9), rgba(248, 187, 208, 0.9))",
        pattern: `repeating-radial-gradient(circle, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 10px)`,
        textColor: "#880E4F",
        items: [
            { name: "Cell Groups", icon: <School />, description: "Small groups for deeper spiritual connection.", route: PageRoutes[PageName.CellGroups] },
            { name: "Sunday School", icon: <School />, description: "Teaching biblical foundations to all ages.", route: PageRoutes[PageName.SundaySchool] },
        ]
    }
];

const ConnectSection = () => {
    const [expanded, setExpanded] = useState(null);
    const navigate = useNavigate();

    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <Box sx={{ py: 10, px: { xs: 2, md: 4 }, textAlign: "center" }}>
            {/* Section Title & Call-to-Action */}
            <Box sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333", mb: 2, letterSpacing: "0.5px" }}>
                    Get Involved & Grow
                </Typography>
                <Typography variant="body1" sx={{ color: "#555", mb: 3 }}>
                    Discover ways to serve, grow, and build meaningful relationships. Whether through ministries, fellowships, or spiritual growth, there’s a place for you!
                </Typography>
            </Box>

            {/* Main Grid Layout */}
            <Grid container spacing={4} justifyContent="center">
                {connectGroups.map((group, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Paper
                            sx={{
                                p: 4,
                                borderRadius: 3,
                                boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.12)",
                                textAlign: "center",
                                height: "100%",
                                position: "relative",
                                overflow: "hidden",
                                background: `${group.background}, ${group.pattern}`,
                                backgroundSize: "cover, 150px 150px",
                                backgroundBlendMode: "overlay, normal",
                                color: group.textColor,
                                // "&:hover": {
                                //     transform: "scale(1.03)",
                                //     transition: "transform 0.3s ease-in-out",
                                // }
                            }}
                        >
                            {/* Subtle Text Overlay */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    background: "rgba(255, 255, 255, 0.3)", // Light overlay for contrast
                                    zIndex: 1,
                                }}
                            />

                            {/* Content */}
                            <Box sx={{ position: "relative", zIndex: 2 }}>
                                <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, letterSpacing: "0.3px" }}>
                                    {group.title}
                                </Typography>
                                {group.items.map((item, idx) => (
                                    <Box key={idx} sx={{ mb: 2 }}>
                                        <Button
                                            fullWidth
                                            onClick={() => handleToggle(`${index}-${idx}`)}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                backgroundColor: "rgba(255, 255, 255, 0.3)",
                                                borderRadius: "50px",
                                                px: 3,
                                                py: 1.5,
                                                fontWeight: "bold",
                                                textTransform: "none",
                                                color: group.textColor,
                                                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.4)", transform: "scale(1.02)", transition: "0.2s" }
                                            }}
                                        >
                                            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                                {item.icon} <Typography>{item.name}</Typography>
                                            </Box>
                                            {expanded === `${index}-${idx}` ? <ExpandLess sx={{ color: group.textColor }} /> : <ExpandMore sx={{ color: group.textColor }} />}
                                        </Button>
                                        <Collapse in={expanded === `${index}-${idx}`} timeout="250">
                                            <Box sx={{ mt: 1, p: 2, background: "rgba(255, 255, 255, 0.9)", borderRadius: "8px", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", transition: "0.3s" }}>
                                                <Typography variant="body2" sx={{ color: "#333", mb: 1 }}>
                                                    {item.description}
                                                </Typography>
                                                <Button fullWidth variant="contained" sx={{ mt: 1, borderRadius: "20px", backgroundColor: "#055594" }} onClick={() => navigate(item.route)}>
                                                    Learn More
                                                </Button>
                                            </Box>
                                        </Collapse>
                                    </Box>
                                ))}
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ConnectSection;