import React, { useState } from "react";
import { Box, Typography, Grid, Button, Collapse, Paper } from "@mui/material";
import { Groups, Church, School, ExpandMore, ExpandLess } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { PageRoutes, PageName } from "../utils/routes";

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
    const [expandedGroup, setExpandedGroup] = useState(null);
    const [expandedItems, setExpandedItems] = useState({});
    const navigate = useNavigate();

    const handleGroupToggle = (groupIndex) => {
        setExpandedGroup(expandedGroup === groupIndex ? null : groupIndex);
        setExpandedItems({});
    };

    const handleItemToggle = (groupIndex, itemIndex) => {
        setExpandedItems((prevState) => ({
            ...prevState,
            [`${groupIndex}-${itemIndex}`]: !prevState[`${groupIndex}-${itemIndex}`],
        }));
    };

    return (
        <Box sx={{ py: 10, px: { xs: 2, md: 4 }, textAlign: "center" }}>
            <Box sx={{ mb: 6, maxWidth: "800px", mx: "auto" }}>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333", mb: 2 }}>
                    Get Involved & Grow
                </Typography>
                <Typography variant="body1" sx={{ color: "#555", mb: 3 }}>
                    Discover ways to serve, grow, and build meaningful relationships. Whether through ministries, fellowships, or spiritual growth, there’s a place for you!
                </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
                {connectGroups.map((group, groupIndex) => (
                    <Grid item xs={12} md={4} key={groupIndex}>
                        <Paper
                            sx={{
                                p: 4,
                                borderRadius: 3,
                                boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.12)",
                                textAlign: "center",
                                position: "relative",
                                overflow: "visible", // FIX: Prevents content cutoff
                                minHeight: "auto", // FIX: Ensures height expands properly
                                background: `${group.background}, ${group.pattern}`,
                                backgroundSize: "cover, 150px 150px",
                                backgroundBlendMode: "overlay, normal",
                                color: group.textColor,
                            }}
                        >
                            <Button
                                fullWidth
                                onClick={() => handleGroupToggle(groupIndex)}
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    borderRadius: "8px",
                                    py: 2,
                                    mb: 2,
                                    color: group.textColor,
                                    "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.4)" }
                                }}
                            >
                                {group.title}
                                {expandedGroup === groupIndex ? <ExpandLess sx={{ ml: 1 }} /> : <ExpandMore sx={{ ml: 1 }} />}
                            </Button>

                            <Collapse in={expandedGroup === groupIndex} timeout="auto" unmountOnExit>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        overflow: "visible",
                                        pb: 6, // ✅ Prevents bottom content from getting clipped
                                        position: "relative",
                                    }}
                                >
                                    {group.items.map((item, itemIndex) => (
                                        <Box key={itemIndex} sx={{ mb: 2 }}>
                                            <Button
                                                fullWidth
                                                onClick={() => handleItemToggle(groupIndex, itemIndex)}
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
                                                }}
                                            >
                                                {item.icon} <Typography>{item.name}</Typography>
                                                {expandedItems[`${groupIndex}-${itemIndex}`] ? <ExpandLess /> : <ExpandMore />}
                                            </Button>
                                            <Collapse in={expandedItems[`${groupIndex}-${itemIndex}`]} timeout="auto" unmountOnExit>
                                                <Box
                                                    sx={{
                                                        p: 2,
                                                        background: "rgba(255, 255, 255, 0.9)",
                                                        borderRadius: "8px",
                                                        position: "relative",
                                                        zIndex: 2,
                                                    }}
                                                >
                                                    <Typography variant="body2">{item.description}</Typography>
                                                    <Button fullWidth variant="contained" onClick={() => navigate(item.route)}>
                                                        Learn More
                                                    </Button>
                                                </Box>
                                            </Collapse>
                                        </Box>
                                    ))}
                                </Box>
                            </Collapse>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ConnectSection;