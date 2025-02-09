import React, { useState } from 'react';
import { Grid, Container, Tabs, Tab, Box, useMediaQuery } from '@mui/material';
import ContactCard from './ContactCard';
import { useTheme } from '@mui/material/styles';
import { useAppData } from "../contexts/AppDataContext";
import { TeamName } from "../types";

const TeamContainer = () => {
    const [selectedTab, setSelectedTab] = useState(TeamName.Pastoral);
    const { teams } = useAppData();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  // Detect if screen is small

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Container sx={{ paddingTop: '20px', textAlign: "center" }}>
            {/* Responsive Tabs for Team Categories */}
            <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                variant={isMobile ? 'scrollable' : 'standard'}  // Scrollable tabs on mobile
                scrollButtons={isMobile ? 'auto' : false}
                centered={!isMobile}
                textColor="primary"
                indicatorColor="primary"
            >
                {Object.keys(teams).map((teamName, index) => (
                    <Tab label={teamName} value={teamName} key={index} sx={{ fontSize: isMobile ? '12px' : '16px' }} />
                ))}
            </Tabs>

            {/* Display Team Members */}
            <Box sx={{ mt: 4 }}>
                <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
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