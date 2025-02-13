import React from "react";
import { Box, Typography, Container, Grid, CardMedia, useMediaQuery } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import Hero from "../../components/Hero";

const historyEvents = [
    {
        year: "1908",
        title: "AFM is Founded in South Africa",
        description: "John G. Lake and Thomas Hezmalhalch establish AFM in Johannesburg, South Africa. The first meeting at Central Tabernacle in Bree Street, Johannesburg, took place on May 25, 1908.",
        image: `${process.env.PUBLIC_URL}/assets/John_G._Lake_and_Thomas_Hezmalhalch-2.jpg`
    },
    {
        year: "1915",
        title: "AFM Spreads to Zimbabwe",
        description: "By 1915, AFM had spread to Zimbabwe through a concert led by Zacharias Manamela. The church expanded across Africa, Europe, and beyond, culminating in the formation of AFM International in 1996.",
        image: `${process.env.PUBLIC_URL}/assets/John_G._Lake_and_Thomas_Hezmalhalch-2.jpg`
    },
    {
        year: "2001",
        title: "AFM Comes to Ireland",
        description: "In 2001, Mrs. J. Chimbganda, widow of Pastor Chimbganda, moved from Zimbabwe to Ireland. Soon after, her family joined her, including her son, Gerard T. Chimbganda. In 2004, they founded Praise Tabernacle Apostolic Faith Ministries.",
        image: `${process.env.PUBLIC_URL}/assets/John_G._Lake_and_Thomas_Hezmalhalch-2.jpg`
    },
    {
        year: "2004",
        title: "Praise Tabernacle is Founded",
        description: "The first meeting of Praise Tabernacle Apostolic Faith Ministries was held in a rented hotel basement in Ireland. The church quickly grew into a thriving faith community.",
        image: `${process.env.PUBLIC_URL}/assets/John_G._Lake_and_Thomas_Hezmalhalch-2.jpg`
    },
    {
        year: "2015",
        title: "A New Home for Praise Tabernacle",
        description: "In 2015, under God’s direction, Praise Tabernacle moved into its current location. Today, it stands as a beacon of faith, community, and outreach in Ireland, continuing to spread the gospel of Jesus Christ.",
        image: `${process.env.PUBLIC_URL}/assets/AFM-at-Word_And_Life_Boksburg.jpg`
    }
];

const ChurchHistory = () => {
    const isMobile = useMediaQuery("(max-width: 900px)");

    return (
        <Box sx={{ background: "#f7f9fc", py: 10, px: 4 }}>
            <Container maxWidth="lg">
                <Timeline position={isMobile ? "alternate" : "alternate"}>
                    {historyEvents.map((event, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                {index !== historyEvents.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Grid container spacing={2} alignItems="center" direction={isMobile && index % 2 === 0 ? "row-reverse" : "row"}>
                                    <Grid item xs={12} md={6}>
                                        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#333" }}>{event.year}</Typography>
                                        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#055594" }}>{event.title}</Typography>
                                        <Typography variant="body1" sx={{ color: "#555", mt: 1 }}>{event.description}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <CardMedia
                                            component="img"
                                            image={event.image}
                                            alt={event.title}
                                            sx={{ width: "100%", borderRadius: "12px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)" }}
                                        />
                                    </Grid>
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
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
                height={'40vh'}
                title={'Our Church History'}
                message={'Discover how our journey of faith began and continues to grow.'}
            />
            <ChurchHistory />
        </>
    );
};