import React, {useState} from "react";
import Hero from "../components/Hero";
import { Box, Typography, Grid, Card, CardMedia, Button, CardContent } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {useEvents} from "../hooks/useEvents"; // For click events and selection


const EventsPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { events } = useEvents();

    // Convert event data to FullCalendar format
    const fullCalendarEvents = events.map((event) => ({
        title: event.title,
        date: event.date,
        description: event.description,
        image: event.image,
    }));

    // Handle date click event
    const handleDateClick = (info) => {
        const clickedDate = new Date(info.dateStr);
        setSelectedDate(clickedDate);
    };

    // Filter events for the selected date
    const filteredEvents = events.filter(
        (event) => event.date === selectedDate?.toISOString().split("T")[0]
    );

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 4,
                    padding: 3,
                    alignItems: "flex-start",
                    background: "linear-gradient(to bottom, #fdf6e3, #e0f7fa)"
                }}
            >
                {/* Calendar Column */}
                <Box
                    sx={{
                        flex: 1,
                        maxWidth: "600px",
                    }}
                >
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        events={fullCalendarEvents}
                        dateClick={handleDateClick}
                        eventClick={(info) => alert(`Event: ${info.event.title}`)}
                    />
                </Box>

                {/* Events Column */}
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                    }}
                >
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event, index) => (
                            <Card
                                key={index}
                                sx={{
                                    display: "flex", // Flexbox layout for alignment
                                    justifyContent: "center", // Center content horizontally
                                    alignItems: "center", // Center content vertically
                                    overflow: "hidden", // Ensure no overflow is visible
                                    position: "relative",
                                    height: "300px", // Set the card height (adjust as needed)
                                    width: "100%", // Full width of the container
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={event.image}
                                    alt={event.title}
                                    sx={{
                                        height: "100%", // Ensures full card height
                                        width: "100%", // Ensures full card width
                                        objectFit: "contain", // Scales the image without cropping
                                        transform: "scale(0.8)", // Default scale (adjust as needed)
                                        // transition: "transform 0.3s ease-in-out", // Smooth scaling
                                        // transformOrigin: "center center", // Scaling happens from the center
                                    }}
                                />
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: "bold",
                                            mb: 1,
                                        }}
                                    >
                                        {event.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#555",
                                            mb: 2,
                                        }}
                                    >
                                        {new Date(event.date).toLocaleDateString("en-US", {
                                            weekday: "long",
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#777",
                                        }}
                                    >
                                        {event.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#777",
                                textAlign: "center",
                            }}
                        >
                            Select a date with events to view details.
                        </Typography>
                    )}
                </Box>
            </Box>
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
            <Hero backGroundImageSrc={'url(/assets/calendar_1.jpg)'} height={'40vh'}/>
            <EventsPage/>
            {/*<CellGroupLeadersPage/>*/}
        </>
    )
}