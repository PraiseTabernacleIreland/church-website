import React, { useState } from "react";
import { Box, Typography, Modal, CardMedia, IconButton, useMediaQuery, Tooltip } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AppleIcon from "@mui/icons-material/Apple";
import EventIcon from "@mui/icons-material/Event"; // Used for Outlook
import { useEvents } from "../hooks/useEvents";
import Hero from "../components/Hero";

/**
 * Format a date range (e.g., "March 10 - 12, 2025")
 */
const formatDateRange = (start, end) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const startDate = new Date(start).toLocaleDateString("en-US", options);
    const endDate = new Date(end).toLocaleDateString("en-US", options);

    return start === end ? startDate : `${startDate} - ${endDate}`;
};

const TITLE_PREFIX = 'AFM Praise Tabernacle';

/**
 * Generate calendar event links with proper date range.
 */
const generateCalendarLink = (event) => {
    const startDate = new Date(event.date.from).toISOString().replace(/-|:|\.\d+/g, "");
    const endDate = new Date(new Date(event.date.to).setHours(23, 59, 59)) // Ensures full-day event
        .toISOString()
        .replace(/-|:|\.\d+/g, "");

    const title = `${TITLE_PREFIX} - ${event.title}`;

    return {
        google: `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
            title
        )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(event.description)}&sf=true`,
        outlook: `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
            title
        )}&startdt=${startDate}&enddt=${endDate}&body=${encodeURIComponent(event.description)}`,
        apple: `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DTSTART:${startDate}
DTEND:${endDate}
DESCRIPTION:${event.description}
END:VEVENT
END:VCALENDAR`,
    };
};

/**
 * Generate social media share links.
 */
const generateShareLinks = (event) => {
    const message = `${TITLE_PREFIX} - ${event.title} - ${event.description} on ${formatDateRange(event.date.from, event.date.to)}`;
    return {
        whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            document.location.href
        )}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(
            document.location.href
        )}`,
    };
};

const EventsPage = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { events } = useEvents();
    const isMobile = useMediaQuery("(max-width:600px)");

    const fullCalendarEvents = events.map(event => ({
        title: event.title,
        start: event.date.from,
        end: event.date.to,
        extendedProps: {
            description: event.description,
            image: event.image,
        },
    }));

    const handleEventClick = (info) => {
        setSelectedEvent({
            title: info.event.title,
            date: {
                from: info.event.startStr,
                to: info.event.endStr || info.event.startStr, // Ensures date range
            },
            description: info.event.extendedProps.description,
            image: info.event.extendedProps.image,
        });
    };

    const handleClose = () => {
        setSelectedEvent(null);
    };

    return (
        <Box sx={{ backgroundColor: "#f5f7fa", minHeight: "100vh", py: 3, px: 2 }}>
            <Box
                sx={{
                    maxWidth: "900px",
                    mx: "auto",
                    p: isMobile ? 1 : 3,
                    backgroundColor: "white",
                    borderRadius: 3,
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    overflowX: "auto",
                }}
            >
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView={"dayGridMonth"}
                    events={fullCalendarEvents}
                    eventClick={handleEventClick}
                    headerToolbar={{
                        start: isMobile ? "prev,next" : "prev,next today",
                        center: "title",
                        end: isMobile ? "" : "dayGridMonth,dayGridWeek,dayGridDay",
                    }}
                    eventDisplay="block"
                    dayMaxEventRows={isMobile ? 1 : 2}
                    height="auto"
                    contentHeight="auto"
                    eventBackgroundColor="#1976d2"
                    eventTextColor="#fff"
                    aspectRatio={isMobile ? 1 : 1.5}
                />
            </Box>

            {/* Modal for Event Details */}
            <Modal open={!!selectedEvent} onClose={handleClose}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: { xs: "90%", md: "50%" },
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 3,
                        borderRadius: 2,
                        maxHeight: "90vh",
                        overflowY: "auto",
                        textAlign: "center",
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{ position: "absolute", top: 8, right: 8, color: "grey.600" }}
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
                                    maxHeight: "220px",
                                    objectFit: "cover",
                                    mb: 2,
                                    borderRadius: 2,
                                }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                {selectedEvent.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#555", mb: 1 }}>
                                {formatDateRange(selectedEvent.date.from, selectedEvent.date.to)}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#777", mb: 2 }}>
                                {selectedEvent.description}
                            </Typography>

                            {/* Actions Row - Add to Calendar & Share */}
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                                {/* Add to Calendar Icons */}
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>Add to Calendar</Typography>
                                    <Box sx={{ display: "flex", gap: 1 }}>
                                        <Tooltip title="Google Calendar">
                                            <IconButton href={generateCalendarLink(selectedEvent).google} target="_blank"><GoogleIcon color="primary" /></IconButton>
                                        </Tooltip>
                                        <Tooltip title="Outlook Calendar">
                                            <IconButton href={generateCalendarLink(selectedEvent).outlook} target="_blank"><EventIcon color="secondary" /></IconButton>
                                        </Tooltip>
                                        <Tooltip title="Apple Calendar">
                                            <a href={`data:text/calendar;charset=utf8,${encodeURIComponent(generateCalendarLink(selectedEvent).apple)}`} download="event.ics">
                                                <IconButton><AppleIcon color="action" /></IconButton>
                                            </a>
                                        </Tooltip>
                                    </Box>
                                </Box>

                                {/* Share Icons */}
                                <Box sx={{ textAlign: "center" }}>
                                    <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>Share</Typography>
                                    <Box sx={{ display: "flex", gap: 1 }}>
                                        <Tooltip title="Share on WhatsApp">
                                            <IconButton href={generateShareLinks(selectedEvent).whatsapp} target="_blank"><WhatsAppIcon color="success" /></IconButton>
                                        </Tooltip>
                                        <Tooltip title="Share on Facebook">
                                            <IconButton href={generateShareLinks(selectedEvent).facebook} target="_blank"><FacebookIcon color="primary" /></IconButton>
                                        </Tooltip>
                                        <Tooltip title="Share on Twitter">
                                            <IconButton href={generateShareLinks(selectedEvent).twitter} target="_blank"><TwitterIcon color="info" /></IconButton>
                                        </Tooltip>
                                    </Box>
                                </Box>
                            </Box>
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
                backGroundImageSrc={`url(/assets/calendar_1.jpg)`}
                height={'40vh'}
                title={'Events & Calendar'}
                message={'Explore our upcoming events and gatherings designed to inspire, uplift, and bring our community closer together.'}
            />
            <EventsPage />
        </>
    );
};

export default EventsAndCalendar;