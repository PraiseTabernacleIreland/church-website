import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import {useEvents} from "../hooks/useEvents";

const LatestEvent = () => {
    const navigate = useNavigate();
    const { events } = useEvents();

    // const handleEventClick = (link) => {
    //     navigate(link);
    // };

    return (
        <Box
            sx={{
                background: "#f9f9f9",
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
                    fontFamily: "'Merriweather', serif",
                    color: "#7b523a",
                    fontWeight: "bold",
                    mb: 6,
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
                                    transform: "scale(1.03)", // Slight card zoom on hover
                                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                                },
                            }}
                        >
                            {/* Event Image */}
                            <Box
                                sx={{
                                    position: "relative",
                                    overflow: "hidden", // Ensures the image stays within the card
                                    height: "200px",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={event.image}
                                    alt={event.title}
                                    sx={{
                                        objectFit: "cover", // Default state: cropped image
                                        width: "100%",
                                        height: "100%",
                                        // transition: "transform 0.8s ease, object-fit 0.8s ease", // Smooth transition
                                        // "&:hover": {
                                        //     objectFit: "contain", // Show full image on hover
                                        //     transform: "scale(1.2)", // Slight zoom to emphasize
                                        // },
                                    }}
                                />
                            </Box>
                            {/* Event Content */}
                            <CardContent
                                sx={{
                                    textAlign: "center",
                                    padding: "20px",
                                    background: "#fff",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "#7b523a",
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
                                {/*<Button*/}
                                {/*    variant="contained"*/}
                                {/*    color="primary"*/}
                                {/*    sx={{*/}
                                {/*        textTransform: "none",*/}
                                {/*        padding: "8px 16px",*/}
                                {/*        fontWeight: "bold",*/}
                                {/*    }}*/}
                                {/*    onClick={() => handleEventClick(event.link)}*/}
                                {/*>*/}
                                {/*    View Details*/}
                                {/*</Button>*/}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Link to Events Page */}
            <Box sx={{ mt: 6 }}>
                <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                        textTransform: "none",
                        padding: "10px 24px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        borderColor: "#7b523a",
                        color: "#7b523a",
                        "&:hover": {
                            backgroundColor: "#7b523a",
                            color: "#fff",
                            borderColor: "#7b523a",
                        },
                    }}
                    onClick={() => navigate("/church-website/events")}
                >
                    View Events Calendar
                </Button>
            </Box>
        </Box>
    );
};

export default LatestEvent;