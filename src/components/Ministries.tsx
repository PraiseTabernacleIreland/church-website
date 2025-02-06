import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { ChildCare, Groups, MusicNote, VolunteerActivism } from "@mui/icons-material";

const ministries = [
    {
        name: "Children Ministry",
        description: "Serving and educating the youngest members of our community.",
        icon: <ChildCare fontSize="large" sx={{ color: "#fff" }} />,
        backgroundImage: "url('/assets/children.jpg')", // Replace with your image path
    },
    {
        name: "Worship Ministry",
        description: "Leading worship and praise services with music and song.",
        icon: <MusicNote fontSize="large" sx={{ color: "#fff" }} />,
        backgroundImage: "url('/assets/worship.jpg')",
    },
    {
        name: "Youth Ministry",
        description: "Helping teens grow in faith and leadership.",
        icon: <Groups fontSize="large" sx={{ color: "#fff" }} />,
        backgroundImage: "url('/assets/youth.jpg')",
    },
    {
        name: "Outreach Ministry",
        description: "Serving the community through outreach and charity.",
        icon: <VolunteerActivism fontSize="large" sx={{ color: "#fff" }} />,
        backgroundImage: "url('https://images.unsplash.com/photo-1584824486539-53bb4646bdbc')",
    },
];

const MinistriesSection = () => (
    <Box
        sx={{
            py: 8,
            px: 4,
            background: "#e3f2fd", // Matches gradient fade from Service Times Section
            textAlign: "center",
            position: "relative",
        }}
    >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Ready to Make a Difference?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
            From volunteering to attending events, there's a place for you to get
            involved and grow. Take the first step today!
        </Typography>
        <Grid container spacing={4} justifyContent="center">
            {ministries.map((ministry, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card
                        onClick={() => alert(`Navigating to ${ministry.name}`)} // Replace alert with navigation logic
                        sx={{
                            cursor: "pointer",
                            height: "100%",
                            borderRadius: 2,
                            boxShadow: 3,
                            transition: "transform 0.2s ease-in-out",
                            backgroundImage: ministry.backgroundImage,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            "&:hover": { transform: "scale(1.05)" },
                        }}
                    >
                        <CardContent
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "rgba(0, 0, 0, 0.5)", // Dark overlay for text readability
                                color: "#fff",
                                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)", // Text shadow for better contrast
                            }}
                        >
                            <Box sx={{ mb: 2 }}>{ministry.icon}</Box>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", mb: 1 }}
                                gutterBottom
                            >
                                {ministry.name}
                            </Typography>
                            <Typography variant="body2" sx={{ textAlign: "center" }}>
                                {ministry.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        {/* Gradient Divider to Smooth Transition */}
        <Box
            sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "60px",
                background: "linear-gradient(to bottom, rgba(255, 255, 255, 0), #f9f9f9)", // Fade to the background color of the next section
            }}
        />
    </Box>
);

export default MinistriesSection;