import React from "react";
import {Box, Button, Typography} from "@mui/material";
import ServiceTimes from "../components/ServiceTimes";
import Ministries from "../components/Ministries";
import LatestSermon from "../components/LatestSermon";
import LatestEvent from "../components/LatestEvent";
import PastorMessage from "../components/PastorMessage";
import StayConnected from "../components/StayConnected";

function HeroSection() {
    return (
        <Box
            sx={{
                position: 'relative',
                height: '80vh',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    // background: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
                    backdropFilter: "blur(4px)", // Glassmorphic effect
                }}
            />
            {/* Video background */}
            <video
                src={`${process.env.PUBLIC_URL}/assets/hero_1.mp4`}  // Replace with your video URL
                type="video/mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',  // Ensures the video covers the area without stretching
                    zIndex: -1,  // Pushes the video behind the content
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '10%', // Darkens only the top 10% of the hero section
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))', // Gradient from dark to transparent
                    zIndex: 1, // Places the gradient above the video
                }}
            />

            {/* Overlay Content */}
            <Box
                sx={{
                    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    // padding: { xs: 2, md: 4 },
                    // borderRadius: 2,
                    // maxWidth: { xs: '90%', md: '60%' },
                    // zIndex: 1000, // Places the gradient above the video

                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.4)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                    padding: { xs: '0 20px', md: '0 40px' },
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '1.8rem', md: '3rem' } }}>
                    Welcome to Praise Tabernacle
                </Typography>
                <Typography variant="h6" sx={{ mb: 3, lineHeight: 1.5, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                    A community of faith, love, and hope—where hearts are transformed, lives are uplifted, and God’s presence is felt. Join us as we worship, grow, and serve together.
                </Typography>
            </Box>

            {/* Hero content (Text, Buttons, etc.) */}
            {/*<Box*/}
            {/*    sx={{*/}
            {/*        position: 'absolute',*/}
            {/*        bottom: '20px', // Distance from the bottom of the Box*/}
            {/*        right: '20px', // Distance from the right of the Box*/}
            {/*        display: 'flex',  // Flexbox to align chips horizontally*/}
            {/*        flexDirection: 'column', // Stack chips vertically*/}
            {/*        gap: '10px',  // Space between the chips*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Chip*/}
            {/*        icon={<Facebook/>}*/}
            {/*        label="Watch on facebook"*/}
            {/*        sx={{*/}
            {/*            padding: '10px 20px',*/}
            {/*            fontSize: '16px',*/}
            {/*        }}*/}
            {/*        color="primary"*/}
            {/*        clickable*/}
            {/*        onClick={() => {*/}
            {/*        }}*/}
            {/*        variant="outlined"*/}
            {/*    />*/}
            {/*    <Chip variant="outlined"*/}
            {/*          clickable sx={{*/}
            {/*        color: '#FF0000',*/}
            {/*        borderColor: '#FF0000',*/}
            {/*    }}*/}
            {/*          icon={<YouTube color={'#FF0000'}/>} label="Watch on youtube"/>*/}
            {/*</Box>*/}

            {/*<Box*/}
            {/*    sx={{*/}
            {/*        position: "absolute",*/}
            {/*        bottom: 0,*/}
            {/*        left: 0,*/}
            {/*        width: "100%",*/}
            {/*        height: "80px", // Extend gradient for smoother transition*/}
            {/*        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), #faf3e0)", // Match Service Times Section*/}
            {/*        zIndex: 2,*/}
            {/*    }}*/}
            {/*/>*/}
        </Box>
    );
}

export const Home = () => {
    return (
        <>
            <HeroSection/>
            <PastorMessage />  {/* Add the message from the pastor here */}
            <ServiceTimes/>

            {/*<GetInvolved/>*/}
            {/*<TwoColumnLayout/>*/}
            <LatestSermon />
            <StayConnected />
            <LatestEvent />
            <Ministries/>
            {/*<GivingSummary />*/}
        </>
    )
}


