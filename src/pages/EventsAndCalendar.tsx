import React, { useState } from "react";
import { Box, Typography, Modal, CardMedia, IconButton, useMediaQuery } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CloseIcon from "@mui/icons-material/Close";
import { useEvents } from "../hooks/useEvents";
import Hero from "../components/Hero";

const EventsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { events } = useEvents();
    const isMobile = useMediaQuery('(max-width:600px)');

    const fullCalendarEvents = events.map(event => ({
        title: event.title,
        date: event.date,
        extendedProps: {
            description: event.description,
            image: event.image,
        },
    }));

    const handleEventClick = (info) => {
        setSelectedEvent({
            title: info.event.title,
            date: info.event.startStr,
            description: info.event.extendedProps.description,
            image: info.event.extendedProps.image,
        });
    };

    const handleClose = () => {
        setSelectedEvent(null);
    };

    return (
        <Box sx={{ backgroundColor: "#f5f7fa", minHeight: "100vh", py: 3, px: 2 }}>
            <Box sx={{
                maxWidth: "900px",
                mx: "auto",
                p: isMobile ? 1 : 3,
                backgroundColor: "white",
                borderRadius: 3,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                overflowX: "auto"  // Allow horizontal scroll if needed on smaller screens
            }}>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView={isMobile ? "dayGridWeek" : "dayGridMonth"}  // Default to weekly view on mobile
                    events={fullCalendarEvents}
                    eventClick={handleEventClick}
                    headerToolbar={{
                        start: isMobile ? "prev,next" : "prev,next today",
                        center: "title",
                        end: isMobile ? "" : "dayGridMonth,dayGridWeek,dayGridDay",
                    }}
                    eventDisplay="block"
                    dayMaxEventRows={isMobile ? 1 : 2}  // Limit event rows on mobile
                    height="auto"
                    contentHeight="auto"
                    eventBackgroundColor="#1976d2"
                    eventTextColor="#fff"
                    aspectRatio={isMobile ? 1 : 1.5}  // Adjust aspect ratio for mobile
                />
            </Box>

            {/* Modal for Event Details */}
            <Modal open={!!selectedEvent} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '90%', md: '60%' },
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 3,
                    borderRadius: 2,
                    maxHeight: '90vh',
                    overflowY: 'auto'
                }}>
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: 'absolute', top: 8, right: 8, color: 'grey.600' }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {selectedEvent && (
                        <>
                            <CardMedia
                                component="img"
                                image={selectedEvent.image}
                                alt={selectedEvent.title}
                                sx={{
                                    width: "100%",
                                    height: "auto",
                                    maxHeight: '300px',
                                    objectFit: "contain",
                                    mb: 2,
                                    borderRadius: 2
                                }}
                            />
                            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1, textAlign: 'center' }}>
                                {selectedEvent.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#555", mb: 2, textAlign: 'center' }}>
                                {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#777", textAlign: 'justify' }}>
                                {selectedEvent.description}
                            </Typography>
                        </>
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export const EventsAndCalendar = () => {
    return (
        <>
            <Hero
                backGroundImageSrc={`url(${process.env.PUBLIC_URL}/assets/calendar_1.jpg)`}
                height={'40vh'}
                title={'Events & Calendar'}
                message={'Explore our upcoming events and gatherings designed to inspire, uplift, and bring our community closer together.'}
            />
            <EventsPage />
        </>
    );
};

export default EventsAndCalendar;