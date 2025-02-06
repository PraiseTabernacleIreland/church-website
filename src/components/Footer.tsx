import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import {Facebook, Instagram, Email, Phone, LocationCity, Pin, PinDrop} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {PageName, PageRoutes} from "../utils/routes";
import logo from "../assets/logo.svg";

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#4682B4", // Blue background
                color: "white",
                padding: "2rem",
                marginTop: "2rem",
            }}
        >
            <Grid container sx={{
                display: "flex", // Ensure it's a flex container
                justifyContent: "space-evenly", // Evenly distribute grid items
                alignItems: "flex-start",
            }}>
                {/* Quicklinks Section */}
                <Grid
                    item
                    sx={{ textAlign: "left" }}
                    marginLeft={1}
                >
                    <Typography sx={{ fontSize:24 }}>
                        Quicklinks
                    </Typography>

                    {Object.entries(PageRoutes)
                        .filter(([pageName, _]) => PageName.Home !== pageName)
                        .map(([pageName, path]) => (
                            <Typography sx={{ fontSize:16 }}>
                                <Link to={path} style={{
                                    textDecoration: "none",
                                    display: "block",
                                    color: 'text.primary', // Default text color
                                }}>
                                    {pageName}
                                </Link>
                            </Typography>
                        ))}
                </Grid>

                {/* Connect Section */}
                <Grid
                    item
                    sx={{textAlign: "left"}}
                >
                    <Box>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{marginRight: "10px" }}
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                        <Phone/>
                        <Typography>(209) 555-0104</Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                        <PinDrop/>
                        <Typography>9 Portland Row, Mountjoy, Dublin 1</Typography>
                    </Box>

                    <Typography>©2025</Typography>
                    {/*<a href="mailto:praise@example.com?subject=Hello&body=I wanted to reach out regarding..."*/}
                    {/*   style={{textDecoration: 'none', color: 'inherit',  display: "block"}}>*/}
                    {/*    Email: praise@example.com*/}
                    {/*</a>*/}
                </Grid>

                <Grid
                    item
                    sx={{textAlign: "left"}}
                >
                    <Typography sx={{fontSize: 24}}>Connect</Typography>
                    <Box sx={{mt: 2}}>
                        <Facebook sx={{mr: 1}}/>
                        <Instagram sx={{mr: 1}}/>
                        <Email sx={{mr: 1}}/>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;