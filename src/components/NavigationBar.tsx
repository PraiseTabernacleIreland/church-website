import React, { useEffect, useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    Menu,
    MenuItem,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    Divider,
    useMediaQuery,
    useTheme
} from "@mui/material";
import { ExpandLess, ExpandMore, Menu as MenuIcon } from '@mui/icons-material';
import logo from '../assets/logo.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavigationRoutes, PageName, PageRoutes } from "../utils/routes";

// Menu Button for Desktop
const MenuButton = ({ text, route, isScrolled, dropdownItems }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const isSelected = location.pathname === route;

    const handleClick = (event) => {
        if (dropdownItems) {
            setAnchorEl(event.currentTarget);
        } else {
            navigate(route);
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
                <Typography color={isScrolled ? 'black' : '#e3f2fd'}>
                    {text.toUpperCase()}
                </Typography>
            </Button>

            {dropdownItems && (
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    {dropdownItems.map((item) => (
                        <MenuItem key={item.route} onClick={handleClose} component={Link} to={item.route}>
                            {item.text}
                        </MenuItem>
                    ))}
                </Menu>
            )}
        </Box>
    );
};

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState({});
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSubMenuToggle = (text) => {
        setOpenSubMenus((prev) => ({ ...prev, [text]: !prev[text] }));
    };

    const drawer = (
        <Box sx={{ width: '80vw', maxWidth: 300, paddingTop: 2, backgroundColor: '#fff', height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <img src={logo} alt="Logo" style={{ width: '70%' }} />
            </Box>
            <Divider sx={{ my: 2 }} />
            <List>
                {NavigationRoutes.map((item) => (
                    <Box key={item.text}>
                        <ListItem
                            button
                            onClick={() => item.dropdownItems ? handleSubMenuToggle(item.text) : handleDrawerToggle()}
                            component={item.dropdownItems ? 'div' : Link}
                            to={item.dropdownItems ? '#' : item.route}
                            sx={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontFamily: '"Montserrat", sans-serif',
                                '&:hover': { backgroundColor: '#f0f0f0' }
                            }}
                        >
                            <ListItemText primary={item.text} />
                            {item.dropdownItems && (openSubMenus[item.text] ? <ExpandLess /> : <ExpandMore />)}
                        </ListItem>

                        {item.dropdownItems && (
                            <Collapse in={openSubMenus[item.text]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.dropdownItems.map((subItem) => (
                                        <ListItem
                                            button
                                            key={subItem.text}
                                            component={Link}
                                            to={subItem.route}
                                            sx={{
                                                pl: 4,
                                                color: '#555',
                                                fontFamily: '"Montserrat", sans-serif',
                                                '&:hover': { backgroundColor: '#f0f0f0' }
                                            }}
                                            onClick={handleDrawerToggle}
                                        >
                                            <ListItemText primary={subItem.text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </Box>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: isScrolled ? '#fff' : 'transparent',
                    color: isScrolled ? '#000' : 'white',
                    boxShadow: isScrolled ? 3 : 0,
                    borderBottom: isScrolled ? '2px solid #ddd' : 'none',
                    transition: 'background-color 0.3s, box-shadow 0.3s, color 0.3s, border-bottom 0.3s',
                    zIndex: 1000,
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to={PageRoutes[PageName.Home]} style={{ textDecoration: 'none' }}>
                        <img src={logo} alt="Logo" style={{ height: '40px' }} />
                    </Link>

                    {/* Desktop Menu */}
                    <Box sx={{
                        ...(isMobile
                            ? { display: { xs: 'none', md: 'flex' }, gap: 2 }
                            : {
                                alignItems: "center",
                                display: "flex",
                                gap: "20px",
                                flexGrow: 1,
                                justifyContent: "center",
                            }),
                    }}>
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

                    {/* Mobile Menu Icon */}
                    <IconButton
                        color="inherit"
                        edge="start"
                        aria-label="menu"
                        sx={{ display: { xs: 'block', md: 'none' } }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default NavBar;