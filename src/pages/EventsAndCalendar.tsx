import React, {useState} from "react";
import Hero from "../components/Hero";
import {Box, Typography, Grid, Card, CardContent, Button, CardMedia} from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import styles for react-calendar

const events = [
    {title: "Church Conference", date: "2025-02-15", description: "A weekend conference for the congregation.", image: "revival1.jpg"},
    {title: "Easter Service", date: "2025-04-05", description: "Special service for Easter celebrations.", image: "revival2.jpg"},
    {title: "Charity Run", date: "2025-05-20", description: "Join us for a charity run.", image: "revival3.jpg"},
    // Add more events here
];

const EventsPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    // Event handler for selecting a date on the calendar
    const onDateChange = (date) => setSelectedDate(date);

    // Filter events for the selected date
    const filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getDate() === selectedDate.getDate() &&
            eventDate.getMonth() === selectedDate.getMonth() &&
            eventDate.getFullYear() === selectedDate.getFullYear()
        );
    });

    return (
        <Box sx={{padding: 3}}>
            {/* Upcoming Events Banners */}
            <Typography variant="h4" align="center" gutterBottom>
                Upcoming Events
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {events.map((event, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{height: 300}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`/assets/${event.image}`} // Use a relevant image for the banner
                                alt={event.title}
                            />
                            <CardContent>
                                <Typography variant="h6">{event.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {event.description}
                                </Typography>
                                <Button size="small" color="primary">Learn More</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Calendar Section */}
            <Typography variant="h4" align="center" sx={{marginTop: 5}}>
                Calendar of Events
            </Typography>

            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 3}}>
                <Calendar onChange={onDateChange} value={selectedDate}/>
            </Box>

            {/* Events on Selected Date */}
            <Typography variant="h5" align="center" sx={{marginTop: 3}}>
                Events on {selectedDate.toLocaleDateString()}
            </Typography>
            {filteredEvents.length === 0 ? (
                <Typography variant="body1" align="center" sx={{marginTop: 2}}>
                    No events planned for this day.
                </Typography>
            ) : (
                <Grid container spacing={3} justifyContent="center" sx={{marginTop: 2}}>
                    {filteredEvents.map((event, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{height: 200}}>
                                <CardContent>
                                    <Typography variant="h6">{event.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {event.description}
                                    </Typography>
                                    <Button size="small" color="primary">Learn More</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};


const cellGroups = [
    {
        name: "John Doe",
        region: "North Dublin",
        meetingTime: "Wednesdays at 7:00 PM",
        zoomLink: "https://zoom.us/j/123456789",
        image: "/assets/people1.jpg",
    },
    {
        name: "Jane Smith",
        region: "South Dublin",
        meetingTime: "Thursdays at 6:30 PM",
        zoomLink: "https://zoom.us/j/987654321",
        image: "/assets/people2.jpg",
    },
    {
        name: "Michael Johnson",
        region: "West Dublin",
        meetingTime: "Fridays at 8:00 PM",
        zoomLink: "https://zoom.us/j/123987654",
        image: "/assets/people3.jpg",
    },
    // Add more leaders here
];

const CellGroupLeadersPage = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Cell Groups
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
                Meet our dedicated cell group leaders. Join their meetings to connect and grow together.
            </Typography>

            <Grid container spacing={3} justifyContent="center" sx={{ marginTop: 2 }}>
                {cellGroups.map((leader, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={leader.image}
                                alt={leader.name}
                                height="100%"
                                sx={{
                                    objectFit: 'contain',  // Ensures the image fits the container without cropping
                                    width: '100%',  // Ensure it spans the full width
                                }}
                            />
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {leader.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    Region: {leader.region}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    Meeting Time: {leader.meetingTime}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={leader.zoomLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fullWidth
                                >
                                    Join Zoom Meeting
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export const EventsAndCalendar = () => {
    return (
        <>
            <Hero backGroundImageSrc={'url(/assets/events.jpg)'}/>
            <EventsPage/>
            <CellGroupLeadersPage/>
        </>
    )
}