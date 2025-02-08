import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from '../assets/logo.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import {NavigationRoutes, PageName, PageRoutes } from "../utils/routes";

interface MenuButtonProps {
    text: string;
    route: string;
    isScrolled: boolean;
    dropdownItems?: { text: string; route: string }[];
}

const MenuButton = (props: MenuButtonProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const isSelected = location.pathname === props.route;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (props.dropdownItems) {
            setAnchorEl(event.currentTarget);
        } else {
            navigate(props.route);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Button
                onClick={handleClick}
                color={isSelected ? 'primary' : 'inherit'}
                style={{
                    textDecoration: isSelected ? 'underline' : 'none',
                    fontWeight: isSelected ? 'bold' : 'normal',
                    fontFamily: '"Montserrat", sans-serif',
                }}
            >
                <Typography color={props.isScrolled ? 'black' : '#e3f2fd'}>
                    {props.text.toUpperCase()}
                </Typography>
            </Button>
            {props.dropdownItems && (
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {props.dropdownItems.map((item) => (
                        <MenuItem key={item.route} onClick={handleClose}>
                            <Link to={item.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                                {item.text}
                            </Link>
                        </MenuItem>
                    ))}
                </Menu>
            )}
            {/*{!props.dropdownItems && (*/}
            {/*    <Link to={props.route} style={{ textDecoration: 'none' }}>*/}
            {/*        <Typography color={props.isScrolled ? 'black' : '#e3f2fd'}>*/}
            {/*            {props.text.toUpperCase()}*/}
            {/*        </Typography>*/}
            {/*    </Link>*/}
            {/*)}*/}
        </Box>
    );
};

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            <Toolbar sx={{ width: '100%', minHeight: 64 }}>
                <Box display="flex" alignItems="center" sx={{ flexGrow: 0 }}>
                    <Link to={PageRoutes[PageName.Home]} style={{ textDecoration: 'none' }}>
                        <img src={logo} alt="Logo" style={{ marginRight: "10px" }} />
                    </Link>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                        flexGrow: 1,
                        justifyContent: "center",
                    }}
                >
                    {NavigationRoutes.map((item) => (
                        <MenuButton
                            key={item.text}
                            text={item.text}
                            route={item.route}
                            isScrolled={isScrolled}
                            dropdownItems={item.dropdownItems}
                        />
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
