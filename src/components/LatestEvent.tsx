import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useEvents } from "../hooks/useEvents";

const LatestEvent = () => {
    const navigate = useNavigate();
    const { events } = useEvents();

    return (
        <Box
            sx={{
                background: "#f0f4f8",  // Subtle darker background
                textAlign: "center",
                position: "relative",
                py: 8,
                px: 4,
            }}
        >
            {/* Section Title */}
            <Typography
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    mb: 6,
                    color: "#333",  // Neutral heading color
                }}
            >
                Upcoming Events
            </Typography>

            {/* Events Grid */}
            <Grid container spacing={4} justifyContent="center">
                {events.slice(0, 3).map((event) => (
                    <Grid item xs={12} sm={6} md={4} key={event.id}>
                        <Card
                            sx={{
                                borderRadius: "16px",
                                boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                                overflow: "hidden",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.03)",
                                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                                },
                            }}
                        >
                            {/* Event Image */}
                            <Box
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                    height: "200px",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={event.image}
                                    alt={event.title}
                                    sx={{
                                        objectFit: "cover",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                />
                            </Box>
                            {/* Event Content */}
                            <CardContent
                                sx={{
                                    textAlign: "center",
                                    padding: "20px",
                                    background: "#ffffff",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "#333",  // Neutral title color
                                        mb: 1,
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
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
                                        mb: 3,
                                    }}
                                >
                                    {event.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Link to Events Page */}
            <Box sx={{ mt: 6 }}>
                <Button
                    variant="outlined"
                    sx={{
                        textTransform: "none",
                        padding: "10px 24px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        borderColor: "#055594",
                        color: "#055594",
                        "&:hover": {
                            backgroundColor: "#055594",
                            color: "#ffffff",
                            borderColor: "#055594",
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