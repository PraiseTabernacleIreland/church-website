import React from "react";
import { Box, Grid, Typography, IconButton, Container, Divider } from "@mui/material";
import { Facebook, Instagram, Email, Phone, PinDrop } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { PageName, PageRoutes } from "../utils/routes";
import logo from "../assets/logo.svg";
import { FACEBOOK_LINK, INSTAGRAM_LINK } from "../utils/constants";

const Footer = () => {
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
                <Grid container spacing={4} justifyContent="space-between" alignItems="flex-start">
                    {/* Logo & About */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Box sx={{ textAlign: "center" }}>
                            <img src={logo} alt="Church Logo" style={{ width: "160px", marginBottom: "10px" }} />
                            <Typography variant="body2" sx={{ color: "#B1D0E0", mt: 1 }}>
                                Connecting People to Christ and Community.
                            </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3, textAlign: "center", color: "#F0F5F9" }}>Contact</Typography>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
                            <Phone sx={{ mr: 1, color: "#B1D0E0" }} />
                            <Typography variant="body2">
                                <a href="tel:+2095550104" style={{ color: "#B1D0E0", textDecoration: "none" }}>
                                    (209) 555-0104
                                </a>
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 1 }}>
                            <PinDrop sx={{ mr: 1, color: "#B1D0E0" }} />
                            <Typography variant="body2">
                                <a href="https://maps.google.com/?q=9+Portland+Row,+Mountjoy,+Dublin+1" target="_blank" rel="noopener noreferrer" style={{ color: "#B1D0E0", textDecoration: "none" }}>
                                    9 Portland Row, Mountjoy, Dublin 1
                                </a>
                            </Typography>
                        </Box>
                    </Grid>

                    {/* General & Resources */}
                    <Grid item xs={6} sm={4} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#F0F5F9" }}>General</Typography>
                        {[PageName.Home, PageName.Events, PageName.Contact, PageName.Give, PageName.Registration].map((pageName, index) => (
                            <Typography key={index} sx={{ mb: 1 }}>
                                <Link to={PageRoutes[pageName]} style={{ textDecoration: "none", color: "#B1D0E0" }}>
                                    {pageName.replace(/_/g, " ")}
                                </Link>
                            </Typography>
                        ))}
                        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#F0F5F9" }}>Resources</Typography>
                        {[PageName.Sermons, PageName.ReportsAndDocuments].map((pageName, index) => (
                            <Typography key={index} sx={{ mb: 1 }}>
                                <Link to={PageRoutes[pageName]} style={{ textDecoration: "none", color: "#B1D0E0" }}>
                                    {pageName.replace(/_/g, " ")}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>

                    {/* About & Ministries */}
                    <Grid item xs={6} sm={4} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#F0F5F9" }}>About</Typography>
                        {[PageName.Our_History, PageName.Our_Beliefs, PageName.Team].map((pageName, index) => (
                            <Typography key={index} sx={{ mb: 1 }}>
                                <Link to={PageRoutes[pageName]} style={{ textDecoration: "none", color: "#B1D0E0" }}>
                                    {pageName.replace(/_/g, " ")}
                                </Link>
                            </Typography>
                        ))}
                        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#F0F5F9" }}>Ministries</Typography>
                        {[PageName.Worship, PageName.Evangelism, PageName.Media, PageName.Hospitality, PageName.Intercession].map((pageName, index) => (
                            <Typography key={index} sx={{ mb: 1 }}>
                                <Link to={PageRoutes[pageName]} style={{ textDecoration: "none", color: "#B1D0E0" }}>
                                    {pageName.replace(/_/g, " ")}
                                </Link>
                            </Typography>
                        ))}
                    </Grid>

                    {/* Fellowship & Spiritual Growth */}
                    <Grid item xs={6} sm={4} md={3}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#F0F5F9" }}>Fellowship</Typography>
                        {[PageName.Men, PageName.Women, PageName.Youth, PageName.Family].map((pageName, index) => (
                            <Typography key={index} sx={{ mb: 1 }}>
                                <Link to={PageRoutes[pageName]} style={{ textDecoration: "none", color: "#B1D0E0" }}>
                                    {pageName.replace(/_/g, " ")}
                                </Link>
                            </Typography>
                        ))}
                        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3, mb: 2, color: "#F0F5F9" }}>Spiritual Growth</Typography>
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
