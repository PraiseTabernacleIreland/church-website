import React from "react";
import {Box, Grid, Typography, TextField, Button} from "@mui/material";
import {Facebook, Twitter, Google} from "@mui/icons-material";
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
            <Grid container spacing={4}>
                {/* Quicklinks Section */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                        Quicklinks
                    </Typography>

                    {Object.entries(PageRoutes)
                        .filter(([pageName, _]) => PageName.Home !== pageName)
                        .map(([pageName, path]) => (
                            <Typography>
                                <Link to={path} style={{color: "white", textDecoration: "none"}}>
                                    {pageName}
                                </Link>
                            </Typography>
                        ))}
                </Grid>

                {/* Connect Section */}
                <Grid item xs={12} sm={4}>
                    <Box>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{marginRight: "10px"}}
                        />
                    </Box>
                    <Typography variant="subtitle2">APOSTOLIC FAITH MISSION</Typography>
                    <Typography>© COPYRIGHT ABC 2024</Typography>
                    <Typography>(209) 555-0104</Typography>
                    <Typography>1901 Thornridge Cir. Shiloh, Hawaii 81063</Typography>
                    <Typography>PRAISETABERNACLE@EXAMPLE.COM</Typography>
                    <Box sx={{mt: 2}}>
                        <Facebook sx={{mr: 1}}/>
                        <Twitter sx={{mr: 1}}/>
                        <Google/>
                    </Box>
                </Grid>

                {/* Subscribe Section */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" gutterBottom>
                        SUBSCRIBE TO GET LATEST UPDATES AND NEWS
                    </Typography>
                    <Box sx={{display: "flex", gap: 1, mt: 2}}>
                        <TextField
                            variant="outlined"
                            placeholder="Yourmail@gmail.com"
                            fullWidth
                            InputProps={{
                                style: {backgroundColor: "white", borderRadius: "4px"},
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "white",
                                color: "#4682B4",
                                fontWeight: "bold",
                            }}
                        >
                            Subscribe
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;