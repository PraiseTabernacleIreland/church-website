import React from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, Email, Phone, PinDrop } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { PageName, PageRoutes } from "../utils/routes";
import logo from "../assets/logo.svg";
import {FACEBOOK_LINK, INSTAGRAM_LINK} from "../utils/constants";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#055594", // Dark blue background
                color: "white",
                paddingY: 6,
                paddingX: { xs: 4, md: 10 },
                mt: 6,
            }}
        >
            <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">

                {/* Quick Links */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                        Quick Links
                    </Typography>
                    {Object.entries(PageRoutes)
                        .filter(([pageName]) => PageName.Home !== pageName)
                        .map(([pageName, path], index) => (
                            <Typography key={index} sx={{ mb: 1 }}>
                                <Link
                                    to={path}
                                    style={{
                                        textDecoration: "none",
                                        color: "#B1D0E0", // Light blue text
                                        fontSize: "16px",
                                        transition: "color 0.3s ease",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = "#F0F5F9")}
                                    onMouseLeave={(e) => (e.target.style.color = "#B1D0E0")}
                                >
                                    {pageName}
                                </Link>
                            </Typography>
                        ))}
                </Grid>

                {/* Contact Information */}
                <Grid item xs={12} sm={4}>
                    <Box sx={{ mb: 2 }}>
                        <img
                            src={logo}
                            alt="Church Logo"
                            style={{
                                width: "150px",
                                display: "block",
                                marginBottom: "10px",
                            }}
                        />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <Phone sx={{ mr: 1, color: "#B1D0E0" }} />
                        <Typography variant="body2">(209) 555-0104</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                        <PinDrop sx={{ mr: 1, color: "#B1D0E0" }} />
                        <Typography variant="body2">9 Portland Row, Mountjoy, Dublin 1</Typography>
                    </Box>
                </Grid>

                {/* Connect with Us */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                        Connect With Us
                    </Typography>
                    <Box>
                        <IconButton
                            href={FACEBOOK_LINK}
                            target="_blank"
                            sx={{
                                color: "#B1D0E0",
                                transition: "color 0.3s",
                                "&:hover": { color: "#F0F5F9" },
                            }}
                        >
                            <Facebook />
                        </IconButton>
                        <IconButton
                            href={INSTAGRAM_LINK}
                            target="_blank"
                            sx={{
                                color: "#B1D0E0",
                                transition: "color 0.3s",
                                "&:hover": { color: "#F0F5F9" },
                            }}
                        >
                            <Instagram />
                        </IconButton>
                        <IconButton
                            href="mailto:praise@example.com"
                            sx={{
                                color: "#B1D0E0",
                                transition: "color 0.3s",
                                "&:hover": { color: "#F0F5F9" },
                            }}
                        >
                            <Email />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;