import { Box, Button, Typography } from "@mui/material";

const GetInvolvedSection = () => (
    // <Box sx={{ padding: 4, backgroundColor: '#ffffff' }}>
    //     <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
    //         Get Involved
    //     </Typography>
    //     <Typography variant="body1" sx={{ textAlign: 'center', mb: 3 }}>
    //         There are many ways to get involved in our church. Whether you want to volunteer, join a ministry,
    //         or attend an event, we have something for you!
    //     </Typography>
    //     <Button variant="contained" color="primary" href="#join-us" sx={{ display: 'block', mx: 'auto' }}>
    //         Join a Ministry
    //     </Button>
    // </Box>
    <Box
        sx={{
            textAlign: "center",
            py: 8,
            background: "#f3f4f6",
        }}
    >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Ready to Make a Difference?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
            From volunteering to attending events, there's a place for you to get
            involved and grow. Take the first step today!
        </Typography>
        <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
                px: 6,
                py: 2,
                fontSize: "1.2rem",
                textTransform: "uppercase",
                borderRadius: "10px",
            }}
        >
            Join a Ministry
        </Button>
    </Box>
);


export default GetInvolvedSection;