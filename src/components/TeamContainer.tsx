import React, { useState } from 'react';
import { Grid, Container, Tabs, Tab, Typography, Box } from '@mui/material';
import ContactCard from './ContactCard';

// Team Data Categorized into Elders, Deacons, and Cell Leaders
const teamData = {
    elders: [
        {
            image: '/assets/gerard.jpg',
            name: 'Gerard Chimbganda',
            title: 'Senior Pastor',
            ministry: 'Pastoral Ministry',
            email: 'johndoe@example.com',
            description: 'Leads the congregation in spiritual growth, provides counseling, and oversees church operations.',
        },
        {
            image: '/assets/moses.jpg',
            name: 'Alex Kadonzvo',
            title: 'Associate Pastor',
            ministry: 'Pastoral Ministry',
            email: 'ufumelims@yahoo.co.uk',
            description: 'Leads the worship team, organizes praise sessions, and ensures a vibrant worship experience.',
        },
        {
            image: '/assets/gerard.jpg',
            name: 'Gerard Chimbganda',
            title: 'Senior Pastor',
            ministry: 'Pastoral Ministry',
            email: 'johndoe@example.com',
            description: 'Leads the congregation in spiritual growth, provides counseling, and oversees church operations.',
        },
        {
            image: '/assets/moses.jpg',
            name: 'Alex Kadonzvo',
            title: 'Associate Pastor',
            ministry: 'Pastoral Ministry',
            email: 'ufumelims@yahoo.co.uk',
            description: 'Leads the worship team, organizes praise sessions, and ensures a vibrant worship experience.',
        },
    ],
    deacons: [
        {
            image: '/assets/moses.jpg',
            name: 'Moses Ufumeli',
            title: 'Secretary',
            ministry: 'Administration',
            email: 'ufumelims@yahoo.co.uk',
            description: 'Manages church records and administrative operations.',
        },
        {
            image: '/assets/jonah.jpg',
            name: 'Jonah Mudehwe',
            title: 'Board Member',
            ministry: 'Board',
            email: 'mudehwes@yahoo.co.uk',
            description: 'Oversees church policies and financial decisions.',
        },
        {
            image: '/assets/gerard.jpg',
            name: 'Gerard Chimbganda',
            title: 'Senior Pastor',
            ministry: 'Pastoral Ministry',
            email: 'johndoe@example.com',
            description: 'Leads the congregation in spiritual growth, provides counseling, and oversees church operations.',
        },
        {
            image: '/assets/moses.jpg',
            name: 'Alex Kadonzvo',
            title: 'Associate Pastor',
            ministry: 'Pastoral Ministry',
            email: 'ufumelims@yahoo.co.uk',
            description: 'Leads the worship team, organizes praise sessions, and ensures a vibrant worship experience.',
        },
        {
            image: '/assets/gerard.jpg',
            name: 'Gerard Chimbganda',
            title: 'Senior Pastor',
            ministry: 'Pastoral Ministry',
            email: 'johndoe@example.com',
            description: 'Leads the congregation in spiritual growth, provides counseling, and oversees church operations.',
        },
        {
            image: '/assets/moses.jpg',
            name: 'Alex Kadonzvo',
            title: 'Associate Pastor',
            ministry: 'Pastoral Ministry',
            email: 'ufumelims@yahoo.co.uk',
            description: 'Leads the worship team, organizes praise sessions, and ensures a vibrant worship experience.',
        },
    ],
    cellLeaders: [
        {
            image: '/assets/gerard.jpg',
            name: 'Gerard Chimbganda',
            title: 'Cell Group Leader',
            ministry: 'Small Groups',
            email: 'johndoe@example.com',
            description: 'Facilitates small group Bible studies and discipleship meetings.',
        },
        {
            image: '/assets/moses.jpg',
            name: 'Moses Ufumeli',
            title: 'Cell Group Leader',
            ministry: 'Small Groups',
            email: 'ufumelims@yahoo.co.uk',
            description: 'Provides guidance and support to small group members.',
        },
        {
            image: '/assets/gerard.jpg',
            name: 'Gerard Chimbganda',
            title: 'Senior Pastor',
            ministry: 'Pastoral Ministry',
            email: 'johndoe@example.com',
            description: 'Leads the congregation in spiritual growth, provides counseling, and oversees church operations.',
        },
        {
            image: '/assets/moses.jpg',
            name: 'Alex Kadonzvo',
            title: 'Associate Pastor',
            ministry: 'Pastoral Ministry',
            email: 'ufumelims@yahoo.co.uk',
            description: 'Leads the worship team, organizes praise sessions, and ensures a vibrant worship experience.',
        },
        {
            image: '/assets/gerard.jpg',
            name: 'Gerard Chimbganda',
            title: 'Senior Pastor',
            ministry: 'Pastoral Ministry',
            email: 'johndoe@example.com',
            description: 'Leads the congregation in spiritual growth, provides counseling, and oversees church operations.',
        },
        {
            image: '/assets/moses.jpg',
            name: 'Alex Kadonzvo',
            title: 'Associate Pastor',
            ministry: 'Pastoral Ministry',
            email: 'ufumelims@yahoo.co.uk',
            description: 'Leads the worship team, organizes praise sessions, and ensures a vibrant worship experience.',
        },
        {
            image: '/assets/gerard.jpg',
            name: 'Gerard Chimbganda',
            title: 'Senior Pastor',
            ministry: 'Pastoral Ministry',
            email: 'johndoe@example.com',
            description: 'Leads the congregation in spiritual growth, provides counseling, and oversees church operations.',
        },
        {
            image: '/assets/moses.jpg',
            name: 'Alex Kadonzvo',
            title: 'Associate Pastor',
            ministry: 'Pastoral Ministry',
            email: 'ufumelims@yahoo.co.uk',
            description: 'Leads the worship team, organizes praise sessions, and ensures a vibrant worship experience.',
        },
    ],
};

const TeamContainer = () => {
    const [selectedTab, setSelectedTab] = useState("elders");

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Container sx={{ paddingTop: '20px', textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>Meet Our Team</Typography>

            {/* Tabs for Team Categories */}
            <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                centered
                textColor="primary"
                indicatorColor="primary"
            >
                <Tab label="Elders" value="elders" />
                <Tab label="Deacons" value="deacons" />
                <Tab label="Cell Leaders" value="cellLeaders" />
            </Tabs>

            {/* Display Relevant Team Members Based on Selected Tab */}
            <Box sx={{ mt: 4 }}>
                <Grid container spacing={4} justifyContent="center">
                    {teamData[selectedTab].map((contact, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ContactCard contact={contact} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default TeamContainer;