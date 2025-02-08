import React, { useState } from 'react';
import { Grid, Container, Tabs, Tab, Box } from '@mui/material';
import ContactCard from './ContactCard';
import {useAppData} from "../contexts/AppDataContext";
import {TeamName} from "../types";

const TeamContainer = () => {
    const [selectedTab, setSelectedTab] = useState(TeamName.Pastoral);
    const {teams} = useAppData();

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Container sx={{ paddingTop: '20px', textAlign: "center" }}>
            {/*<Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>Meet Our Team</Typography>*/}

            {/* Tabs for Team Categories */}
            <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                centered
                textColor="primary"
                indicatorColor="primary"
            >
                {Object.keys(teams).map(teamName => <Tab label={teamName} value={teamName} />)}
            </Tabs>

            {/* Display Relevant Team Members Based on Selected Tab */}
            <Box sx={{ mt: 4 }}>
                <Grid container spacing={4} justifyContent="center">
                    {teams[selectedTab].map((contact, index) => (
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