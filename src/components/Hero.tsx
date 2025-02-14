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
                position: "relative",
                height: props.height || "100vh", // Full viewport height
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), ${props.backGroundImageSrc}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#fff", // Ensures readability
                zIndex: 0, // Ensures it's behind the app bar
                paddingTop: "64px", // Accounts for the fixed AppBar
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