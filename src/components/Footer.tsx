import React from "react";
import {Box, Grid, Typography, Container, Divider, IconButton} from "@mui/material";
import { Facebook, Instagram, Email, Phone, PinDrop } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { PageName, PageRoutes } from "../utils/routes";
import logo from "../assets/logo.svg";
import { FACEBOOK_LINK, INSTAGRAM_LINK } from "../utils/constants";

const Footer = () => {
    const location = "Praise Tabernacle Apostolic Faith Mission, 1, 8 Portland Row, Mountjoy, Dublin";
    const url = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;

    return (
        <Box
            sx={{
                backgroundColor: "#0A192F",
                color: "white",
                pt: 6,
                pb: 3,
                mt: 6,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center" alignItems="flex-start" textAlign="center">
                    {/* Logo & Contact */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ textAlign: "center", mb: 3 }}>
                            <img src={logo} alt="Church Logo" style={{ width: "160px", marginBottom: "10px" }} />
                            <Typography variant="body2" sx={{ color: "#B1D0E0", mt: 1 }}>
                                Connecting People to Christ and Community.
                            </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#F0F5F9" }}>Contact</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
                            <Phone sx={{ mr: 1, color: "#B1D0E0" }} />
                            <Typography variant="body2">
                                <a href="tel:+353874590738" style={{ color: "#B1D0E0", textDecoration: "none" }}>
                                    (+353) 87 459 0738
                                </a>
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                            <PinDrop sx={{ mr: 1, color: "#B1D0E0" }} />
                            <Typography variant="body2">
                                <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "#B1D0E0", textDecoration: "none" }}>
                                    8 Portland Row, Mountjoy, Dublin
                                </a>
                            </Typography>
                        </Box>
                        {/* Social Media Links */}
                        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                            <IconButton href={FACEBOOK_LINK} target="_blank" sx={{ color: "#B1D0E0", mx: 1 }}>
                                <Facebook />
                            </IconButton>
                            <IconButton href={INSTAGRAM_LINK} target="_blank" sx={{ color: "#B1D0E0", mx: 1 }}>
                                <Instagram />
                            </IconButton>
                            <IconButton href="mailto:pastor@praisetabernacle.ie" sx={{ color: "#B1D0E0", mx: 1 }}>
                                <Email />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* General & Resources */}
                    <Grid item xs={6} sm={6} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#F0F5F9" }}>General</Typography>
                        {[PageName.Home, PageName.Events, PageName.Contact, PageName.Give].map((pageName, index) => (
                            <Typography key={index} sx={{ mb: 1 }}>
                                <Link to={PageRoutes[pageName]} style={{ textDecoration: "none", color: "#B1D0E0" }}>
                                    {pageName.replace(/_/g, " ")}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>

                    <Grid item xs={6} sm={6} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#F0F5F9" }}>Ministries</Typography>
                        {[PageName.Worship, PageName.Evangelism, PageName.Media, PageName.Hospitality, PageName.Intercession].map((pageName, index) => (
                            <Typography key={index} sx={{ mb: 1 }}>
                                <Link to={PageRoutes[pageName]} style={{ textDecoration: "none", color: "#B1D0E0" }}>
                                    {pageName.replace(/_/g, " ")}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>

                    {/* Fellowship & Spiritual Growth */}
                    <Grid item xs={6} sm={6} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#F0F5F9" }}>Fellowship</Typography>
                        {[PageName.Men, PageName.Women, PageName.Youth, PageName.Family].map((pageName, index) => (
                            <Typography key={index} sx={{ mb: 1 }}>
                                <Link to={PageRoutes[pageName]} style={{ textDecoration: "none", color: "#B1D0E0" }}>
                                    {pageName.replace(/_/g, " ")}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>

                    {/* About & Ministries */}
                    <Grid item xs={6} sm={6} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#F0F5F9" }}>About</Typography>
                        {[PageName.Our_History, PageName.Our_Beliefs, PageName.Team].map((pageName, index) => (
                            <Typography key={index} sx={{ mb: 1 }}>
                                <Link to={PageRoutes[pageName]} style={{ textDecoration: "none", color: "#B1D0E0" }}>
                                    {pageName.replace(/_/g, " ")}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>

                    <Grid item xs={6} sm={6} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#F0F5F9" }}>Resources</Typography>
                        {[PageName.Sermons, PageName.ReportsAndDocuments].map((pageName, index) => (
                            <Typography key={index} sx={{ mb: 1 }}>
                                <Link to={PageRoutes[pageName]} style={{ textDecoration: "none", color: "#B1D0E0" }}>
                                    {pageName.replace(/_/g, " ")}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>

                    <Grid item xs={6} sm={6} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#F0F5F9" }}>Spiritual Growth</Typography>
                        {[PageName.CellGroups, PageName.SundaySchool].map((pageName, index) => (
                            <Typography key={index} sx={{ mb: 1 }}>
                                <Link to={PageRoutes[pageName]} style={{ textDecoration: "none", color: "#B1D0E0" }}>
                                    {pageName.replace(/_/g, " ")}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
                <Divider sx={{ backgroundColor: "#1E2A47", my: 4 }} />
                <Typography variant="body2" sx={{ textAlign: "center", color: "#B1D0E0" }}>
                    &copy; {new Date().getFullYear()} Praise Tabernacle. All Rights Reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
