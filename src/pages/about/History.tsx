import React from "react";
import { Box, Typography, Container, Grid, CardMedia, Paper } from "@mui/material";
import Hero from "../../components/Hero";

const ChurchHistory = () => {
    return (
        <Box
            sx={{
                position: "relative",
                background: "linear-gradient(to bottom, rgba(250,250,250,1), rgba(255,255,255,1))",
                textAlign: "center",
                py: 10,
                px: 4,
                width: "100vw",
            }}
        >
            <Container maxWidth="lg">
                <Paper
                    elevation={3}
                    sx={{
                        p: 6,
                        borderRadius: "16px",
                        background: "white",
                        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
                        textAlign: "left",
                    }}
                >

                    <Typography variant="body1" paragraph sx={{ color: "#444", fontSize: "18px", lineHeight: 1.8 }}>
                        Apostolic Faith Ministry has a long and distinguished history in the Body of Christ beginning in 1908 when a missionary team, led by John G. Lake, Thomas Hezmalhalch, and Jacob Lehman and their wives, came to South Africa. The first meeting of the Central Tabernacle Assembly in Bree Street, Johannesburg was on May 25, 1908 and is considered the beginning of AFM.
                    </Typography>

                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <CardMedia
                                component="img"
                                image="/assets/John_G._Lake_and_Thomas_Hezmalhalch-2.jpg"
                                alt="Missionaries Arrival in South Africa"
                                sx={{ width: "100%", borderRadius: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1" paragraph sx={{ color: "#444", fontSize: "18px", lineHeight: 1.8 }}>
                                John G. Lake, a Pentecostal evangelist, and Thomas Hezmalhalch, a holiness preacher with roots in Azusa Street, came out of the Holiness Movement and the Zionist Movement of the late 1800s and early 1900s in America. Lake was particularly influenced by God’s healing power and became co-evangelist with Thomas Hezmalhalch around 1906 through an outreach in Zion City, Illinois. Together, they were inspired by God to launch a mission trip to South Africa.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography variant="body1" paragraph sx={{ color: "#444", fontSize: "18px", lineHeight: 1.8, mt: 4 }}>
                        Both Lake and Hezmalhalch were greatly influenced by the teachings of Dr. Andrew Murray, who was part of the Holiness Movement birthed from a revival in 1860 in the Dutch Reformed Church. Other influences included the local Zionist Movement, which was preparation for Pentecostal growth. By 1908, South Africa was ready for the Pentecostal revelation brought by Lake and Hezmalhalch. The nation and AFM saw powerful church growth accompanied by signs and wonders.
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ color: "#444", fontSize: "18px", lineHeight: 1.8 }}>
                        In 1913, Lake and Hezmalhalch left South Africa and AFM continued under self-government, spreading to Zimbabwe in 1915. It is believed AFM came to Gwanda that year through an AFM South Africa concert led by Zacharias Manamela. AFM continues to expand across Africa, Asia, Australia, Europe, and North and South America. In 1987, an international conference began as the International Coordinating Council and was reorganized in 1996 as AFM International.
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ color: "#444", fontSize: "18px", lineHeight: 1.8 }}>
                        The Lord opened the door in 2001 for Mrs. J. Chimbganda, widow of Pastor Chimbganda, to move from Zimbabwe to Ireland. Her family soon followed, including her son Gerard T. Chimbganda. The Lord led them to plant a missionary AFM church in Ireland, and the first meeting of Praise Tabernacle Apostolic Faith Ministries was held in July 2004. This church has experienced tremendous growth—starting with meetings in a rented hotel basement, they grew to include a partnership with Drop Inn Ministries, opening a thrift store and moving into a warehouse building. In 2015, the Lord directed Praise Tabernacle to move to its current location.
                    </Typography>

                    <CardMedia
                        component="img"
                        image="/assets/AFM-at-Word_And_Life_Boksburg.jpg"
                        alt="Praise Tabernacle Current Location"
                        sx={{ width: "100%", borderRadius: 2, mt: 4 }}
                    />
                </Paper>
            </Container>
        </Box>
    );
};

export default ChurchHistory;

export const History = () => {
    return (
        <>
            <Hero
                backGroundImageSrc={`url(${process.env.PUBLIC_URL}/assets/about.jpg)`}
                height={'30vh'}
                title={'Our Church History'}
            />
            <ChurchHistory />
        </>
    );
}
