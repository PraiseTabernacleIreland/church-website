import React from 'react';
import {Box, Typography} from '@mui/material';

interface HeroProps {
    backGroundImageSrc: string;
    title?: string;
    message?: string;
    height?: string;
}

const Hero = (props: HeroProps) => {
    return (
        <Box
            sx={{
                // position: 'relative',
                // // height: props.height || '30vh', // Full height of the viewport
                // // backgroundImage: props.backGroundImageSrc, // Replace with your hero image URL
                // background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.3) 10%), ${props.backGroundImageSrc}`, // Adjust the gradient and image
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
                // display: 'flex',
                // flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'center',
                // textAlign: 'center',
                // color: '#fff', // Text color
                // zIndex: 0, // Ensure it stays behind the app bar
                // paddingTop: '64px', // This accounts for the height of the fixed AppBar, so it doesn't overlap with the content
                // height: props.height || "100vh", // Full viewport height
                // backgroundAttachment: "fixed", // Key for the parallax effect
                // backgroundImage: props.backGroundImageSrc,
                position: "relative",
                height: props.height || "100vh", // Full viewport height
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2) 70%, rgba(255, 255, 255, 1) 100%), ${props.backGroundImageSrc}`, // Extended gradient for smoother transition
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed", // Parallax effect
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#fff", // Text color
                zIndex: 0, // Ensures it's behind the app bar
                paddingTop: "64px", // Accounts for the fixed AppBar
                backgroundRepeat: "no-repeat",
                // background: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(/assets/contact.jpg)`,
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    // background: "rgba(5, 85, 148, 0.3)", // Lighter for subtle effect
                    backdropFilter: "blur(4px)", // Softens the background
                    zIndex: -1,
                }}
            />
            {props.title &&
                (<Typography variant="h3" sx={{fontWeight: 'bold', marginBottom: 2}}>
                    {props.title}
                </Typography>)
            }
            {props.message && (
                <Typography
                    // variant="h6"
                    // sx={{marginBottom: 4}}
                    variant="h6"
                    sx={{
                        marginBottom: 4,
                        maxWidth: '800px',      // Limit the width of the text box
                        width: '100%'           // Ensure responsiveness
                    }}
                >
                    {props.message}
                </Typography>
            )
            }
            {/* Bottom Gradient Transition */}
            {/* Bottom Gradient Transition */}
            {/*<Box*/}
            {/*    sx={{*/}
            {/*        position: "absolute",*/}
            {/*        bottom: 0,*/}
            {/*        left: 0,*/}
            {/*        width: "100%",*/}
            {/*        height: "200px", // Increased height for smoother gradient*/}
            {/*        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 1))", // Smoother gradient fade*/}
            {/*    }}*/}
            {/*/>*/}
        </Box>
    );
};

export default Hero;