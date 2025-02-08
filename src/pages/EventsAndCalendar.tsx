import React, { useState } from "react";
import { Box, Typography, Modal, CardMedia, IconButton } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CloseIcon from "@mui/icons-material/Close";
import { useEvents } from "../hooks/useEvents";
import Hero from "../components/Hero";

const EventsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { events } = useEvents();

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
        <Box sx={{ backgroundColor: "#f5f7fa", minHeight: "100vh", py: 5 }}>
            <Box sx={{ maxWidth: "900px", mx: "auto", p: 2, backgroundColor: "white", borderRadius: 3, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    events={fullCalendarEvents}
                    eventClick={handleEventClick}
                    height="auto"
                    headerToolbar={{
                        start: "prev,next today",
                        center: "title",
                        end: "dayGridMonth,dayGridWeek,dayGridDay",
                    }}
                    eventDisplay="block"
                    dayMaxEventRows={2}
                    contentHeight="auto"
                    eventBackgroundColor="#1976d2"
                    eventTextColor="#fff"
                />
            </Box>

            <Modal open={!!selectedEvent} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '90%', md: '60%' },
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2
                }}>
                    {/* Close Button */}
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            color: 'grey.600',
                        }}
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
                                    maxHeight: '400px',
                                    objectFit: "contain",
                                    mb: 2
                                }}
                            />
                            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                                {selectedEvent.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#555", mb: 2 }}>
                                {new Date(selectedEvent.date).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#777" }}>
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
                title={'Stay Connected with Our Events & Calendar'}
                message={'Explore our upcoming events and gatherings designed to inspire, uplift, and bring our community closer together.'}
            />
            <EventsPage />
        </>
    );
};

export default EventsAndCalendar;
