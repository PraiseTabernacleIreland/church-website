import React, {useEffect, useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import logo from '../assets/logo.svg';
import {Link, useLocation} from "react-router-dom";
import {PageName, PageRoutes} from "../utils/routes";

interface MenuButtonProps {
    text: string;
    route: string;
    isScrolled: boolean;
}

const MenuButton = (props: MenuButtonProps) => {
    const location = useLocation(); // Get the current route

    // Check if the current route matches the button's route
    const isSelected = location.pathname === props.route;
    return (
        <Link to={props.route} style={{textDecoration: 'none',  fontFamily: '"Montserrat", sans-serif',}}>
            <Button
                color={isSelected ? 'primary' : 'inherit'}
                style={{
                    textDecoration: isSelected ? 'underline' : 'none', // Underline when selected
                    fontWeight: isSelected ? 'bold' : 'normal',
                }}
            >
                <Typography color={props.isScrolled ? 'black' : '#e3f2fd'}>
                    {props.text.toUpperCase()}
                </Typography>
            </Button>
        </Link>
    )
}


const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Listen for scroll event to update the background color of the AppBar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true); // Change background when scrolled down 50px
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [window.scrollY]);

    return (
        <AppBar
            position="fixed"
            style={{
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: isScrolled ? '#fff' : 'transparent', // AppBar color change
                color: isScrolled ? '#000' : 'white', // Change text color when scrolling
                boxShadow: isScrolled ? 3 : 0, // Add shadow when scrolled
                borderBottom: isScrolled ? '2px solid #ddd' : 'none', // Add border when scrolled
                transition: 'background-color 0.3s, box-shadow 0.3s, color 0.3s, border-bottom 0.3s', // Smooth transition
                zIndex: 1000, // Ensure it stays on top of other content
                '--Paper-shadow': 'none',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                },
            }}
        >
            <Toolbar sx={{
                width: '100%',
                minHeight: 64,
                // backgroundColor: isScrolled ? 'none' : 'rgba(0, 0, 0, 0.2)'
            }}>
                {/* Logo Section */}
                <Box display="flex" alignItems="center" sx={{flexGrow: 0}}>
                    <Link to={PageRoutes[PageName.Home]} style={{textDecoration: 'none'}}>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{marginRight: "10px"}}
                        />
                    </Link>
                </Box>

                {/* Menu Items */}
                <Box
                    sx={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                        flexGrow: 1, // Allow this to take up remaining space
                        justifyContent: "center", // Align to the left (or 'center' for centered items)
                    }}
                >
                    {Object.entries(PageRoutes).map(([pageName, path]) => (
                        <MenuButton text={pageName} route={path} key={path} isScrolled={isScrolled} />
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
