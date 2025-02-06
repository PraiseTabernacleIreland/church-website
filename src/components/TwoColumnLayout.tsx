import React from 'react';
import {Grid, Box, Typography, Container} from '@mui/material';

const TwoColumnLayout = () => {
    return (
        <Container maxWidth={false} sx={{paddingY: 4, paddingX: { xs: 2, sm: 4 }, backgroundColor: '#F8F2EE', width: '100%'}}>
            <Grid container spacing={4} sx={{ width: '100%' }} justifyContent="center">
                {/* Left Column */}
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            // textAlign: 'left'
                            textAlign: 'center', // Center text in the column
                            borderRight: { xs: 'none', sm: '1px solid #ffff' }, // Border between columns
                            paddingRight: 2, // Padding to the right of the left column
                            width: '100%' // Ensure it fills the column space
                    }}
                    >
                        <Typography variant="h4" sx={{fontWeight: 'bold'}}>
                            Join Us for Worship
                        </Typography>
                        <Typography variant="body1" sx={{marginTop: 2}}>
                            We gather every Sunday at 9:00 AM for a time of worship, prayer, and teaching. Our church is
                            a community where you can grow in faith and connect with others.
                        </Typography>
                        <Box sx={{marginTop: 2}}>
                            <img
                                src="/assets/revival1.jpg"
                                alt="Worship Service"
                                style={{width: '30%', height: 'auto', borderRadius: '8px'}}
                            />
                        </Box>
                    </Box>
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} sm={6}>
                    <Box sx={{
                        // textAlign: 'left',
                        textAlign: 'center', // Center text in the column
                        paddingLeft: 2, // Padding to the left of the right column
                        width: '100%' // Ensure it fills the column space
                    }}>
                        <Typography variant="h4" sx={{fontWeight: 'bold'}}>
                            Get Involved
                        </Typography>
                        <Box sx={{marginTop: 2}}>
                            <img
                                src="/assets/revival2.jpg"
                                alt="Church Community"
                                style={{width: '30%', height: 'auto', borderRadius: '8px'}}
                            />
                        </Box>
                        <Typography variant="body1" sx={{marginTop: 2}}>
                            There are many ways to get involved in the church. From volunteering at community events to
                            joining a small group, we encourage everyone to find their place in the body of Christ.
                        </Typography>

                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TwoColumnLayout;