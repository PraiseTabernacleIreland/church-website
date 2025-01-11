import React from "react";
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
}

const MenuButton = (props: MenuButtonProps) => {
    const location = useLocation(); // Get the current route

    // Check if the current route matches the button's route
    const isSelected = location.pathname === props.route;
    return (
        <Link to={props.route} style={{textDecoration: 'none'}}>
            <Button
                color={isSelected ? 'primary' : 'inherit'}
                style={{
                    fontWeight: "bold",
                    backgroundColor: isSelected ? '#e3f2fd' : 'transparent'
                }}
            >
                <Typography color={isSelected ? 'primary' : 'textPrimary'}>
                    {props.text.toUpperCase()}
                </Typography>
            </Button>
        </Link>
    )
}


const NavBar = () => {
    return (
        <AppBar
            position="sticky"
            style={{
                backgroundColor: "#fff",
                color: "#000",
                boxShadow: "none",
                width: '100%',
            }}
        >
            <Toolbar sx={{width: '100%'}}>
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
                        <MenuButton text={pageName} route={path} key={path}/>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
