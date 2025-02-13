import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEvents } from "../hooks/useEvents";
import EventIcon from "@mui/icons-material/Event";

const LatestEvent = () => {
    const navigate = useNavigate();
    const { events } = useEvents();

    return (
        <Box
            sx={{
                background: "linear-gradient(to bottom, #f4f7fb, #e8eff5)",
                textAlign: "center",
                position: "relative",
                py: 10,
                px: 4,
            }}
        >
            {/* Section Title */}
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", pr: { md: 4 } }}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: "bold",
                                mb: 6,
                                color: "#333",
                                textAlign: "right",
                            }}
                        >
                            Upcoming Events
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Timeline View */}
            <Box
                sx={{
                    maxWidth: "900px",
                    mx: "auto",
                    position: "relative",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        left: "50%",
                        top: 0,
                        bottom: 0,
                        width: "4px",
                        backgroundColor: "#055594",
                        transform: "translateX(-50%)",
                    },
                }}
            >
                {events.slice(0, 2).map((event, index) => (
                    <Box
                        key={event.id}
                        sx={{
                            display: "flex",
                            flexDirection: index % 2 === 0 ? "row-reverse" : "row",
                            alignItems: "center",
                            mb: 6,
                            position: "relative",
                        }}
                    >
                        {/* Date Badge */}
                        <Box
                            sx={{
                                width: "50%",
                                textAlign: index % 2 === 0 ? "left" : "right",
                                pr: index % 2 === 0 ? 3 : 0,
                                pl: index % 2 !== 0 ? 3 : 0,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#055594",
                                    backgroundColor: "#e1efff",
                                    padding: "6px 12px",
                                    borderRadius: "20px",
                                    display: "inline-block",
                                }}
                            >
                                {new Date(event.date).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </Typography>
                        </Box>

                        {/* Event Details */}
                        <Box
                            sx={{
                                width: "50%",
                                textAlign: index % 2 === 0 ? "right" : "left",
                                position: "relative",
                                padding: "20px",
                                background: "#ffffff",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                borderRadius: "12px",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.03)",
                                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
                                },
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#055594", mb: 1 }}>
                                {event.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#555", mb: 2 }}>
                                {event.description}
                            </Typography>
                        </Box>

                        {/* Timeline Circle Indicator */}
                        <Box
                            sx={{
                                position: "absolute",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "24px",
                                height: "24px",
                                backgroundColor: "#E52326",
                                borderRadius: "50%",
                                border: "4px solid #fff",
                                zIndex: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <EventIcon sx={{ color: "#fff", fontSize: "16px" }} />
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* View More Events Button */}
            <Box sx={{ mt: 6 }}>
                <Button
                    variant="contained"
                    sx={{
                        textTransform: "none",
                        padding: "12px 28px",
                        borderRadius: "24px",
                        fontWeight: "bold",
                        fontSize: "16px",
                        backgroundColor: "#055594",
                        color: "#fff",
                        "&:hover": {
                            backgroundColor: "#033d6c",
                        },
                    }}
                    onClick={() => navigate("/events")}
                >
                    View Events Calendar
                </Button>
            </Box>
        </Box>
    );
};

export default LatestEvent;