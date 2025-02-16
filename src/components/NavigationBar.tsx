import React, { useState, useEffect, useRef } from "react";
import {
    AppBar,
    Toolbar,
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
    useTheme,
    Paper,
    ClickAwayListener
} from "@mui/material";
import { ExpandLess, ExpandMore, Menu as MenuIcon } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavigationRoutes, PageName, PageRoutes } from "../utils/routes";
import logo from "../assets/logo.svg";

// ✅ **Desktop Dropdown Menu**
const MenuButton = ({ text, route, dropdownItems, isScrolled, closeMenus }) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const navigate = useNavigate();

    const handleClick = () => {
        if (!dropdownItems) {
            navigate(route);
            closeMenus();
        } else {
            setOpen((prevOpen) => !prevOpen);
        }
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    return (
        <Box ref={anchorRef} sx={{ position: "relative" }}>
            <Button onClick={handleClick} sx={{ fontWeight: "bold", color: isScrolled ? "black" : "white" }}>
                {text.toUpperCase()} {dropdownItems && (open ? <ExpandLess sx={{ ml: 1 }} /> : <ExpandMore sx={{ ml: 1 }} />)}
            </Button>

            {dropdownItems && open && (
                <ClickAwayListener onClickAway={handleClose}>
                    <Paper sx={{ position: "absolute", top: "100%", left: 0, zIndex: 9999, minWidth: 200, mt: 1 }}>
                        {dropdownItems.map((item) => (
                            <SubMenuItem key={item.text} item={item} closeMenus={() => { closeMenus();   setOpen(false); }}  />
                        ))}
                    </Paper>
                </ClickAwayListener>
            )}
        </Box>
    );
};

// ✅ **Recursive SubMenu for Desktop**
const SubMenuItem = ({ item, closeMenus }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        if (item.dropdownItems) {
            setOpen((prev) => !prev);
        } else {
            navigate(item.route);
            closeMenus();
        }
    };

    return (
        <Box>
            <MenuItem onClick={handleClick}>
                {item.text} {item.dropdownItems && (open ? <ExpandLess sx={{ ml: 1 }} /> : <ExpandMore sx={{ ml: 1 }} />)}
            </MenuItem>

            {item.dropdownItems && open && (
                <Box sx={{ pl: 2, backgroundColor: "#f8f9fa" }}>
                    {item.dropdownItems.map((subItem) => (
                        <SubMenuItem key={subItem.text} item={subItem} closeMenus={closeMenus} />
                    ))}
                </Box>
            )}
        </Box>
    );
};

// ✅ **Mobile Menu Item (Handles Multi-Level Menus)**
const MobileMenuItem = ({ item, openSubMenus, toggleSubMenu, closeDrawer }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isSelected = location.pathname === item.route;

    const handleClick = () => {
        if (item.dropdownItems) {
            toggleSubMenu(item.text);
        } else {
            navigate(item.route);
            closeDrawer();
        }
    };

    return (
        <Box>
            <ListItem
                button
                onClick={handleClick}
                sx={{
                    pl: 2,
                    fontWeight: isSelected ? "bold" : "normal",
                    backgroundColor: isSelected ? "#f0f0f0" : "transparent",
                    transition: "background 0.2s",
                }}
            >
                <ListItemText primary={item.text} sx={{ fontWeight: isSelected ? "bold" : "normal" }} />
                {item.dropdownItems && (openSubMenus[item.text] ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>

            {/* ✅ **Third-Level Menu Fix** */}
            {item.dropdownItems && (
                <Collapse in={openSubMenus[item.text]} timeout="auto" unmountOnExit>
                    <List disablePadding sx={{ pl: 3 }}>
                        {item.dropdownItems.map((subItem) => (
                            <MobileMenuItem
                                key={subItem.text}
                                item={subItem}
                                openSubMenus={openSubMenus}
                                toggleSubMenu={toggleSubMenu}
                                closeDrawer={closeDrawer}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </Box>
    );
};

// ✅ **Main Navigation Component**
const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openSubMenus, setOpenSubMenus] = useState({}); // Ensures multiple levels work
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileDrawer = () => setMobileOpen(!mobileOpen);

    const toggleSubMenu = (menuText) => {
        setOpenSubMenus((prev) => ({
            ...prev,
            [menuText]: !prev[menuText]
        }));
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: isScrolled ? "#fff" : "transparent",
                    color: isScrolled ? "#000" : "white",
                    boxShadow: isScrolled ? 3 : 0,
                    transition: "all 0.3s",
                    zIndex: 1000,
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Link to={PageRoutes[PageName.Home]} style={{ textDecoration: "none" }}>
                        <img src={logo} alt="Logo" style={{ height: "40px" }} />
                    </Link>

                    {/* **Desktop Navigation (Unchanged)** */}
                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: "20px", flexGrow: 1, justifyContent: "center" }}>
                            {NavigationRoutes.map((item) => (
                                <MenuButton key={item.text} text={item.text} route={item.route} isScrolled={isScrolled} dropdownItems={item.dropdownItems} closeMenus={() => setOpenSubMenus({})} />
                            ))}
                        </Box>
                    )}

                    {/* **Mobile Menu Button** */}
                    <IconButton color="inherit" edge="start" onClick={toggleMobileDrawer} sx={{ display: { xs: "block", md: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* **Mobile Drawer** */}
            <Drawer anchor="right" open={mobileOpen} onClose={toggleMobileDrawer}>
                <Box sx={{ width: "80vw", maxWidth: 300, paddingTop: 2, backgroundColor: "#fff", height: "100%" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                        <img src={logo} alt="Logo" style={{ width: "70%" }} />
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <List>
                        {NavigationRoutes.map((item) => (
                            <MobileMenuItem
                                key={item.text}
                                item={item}
                                openSubMenus={openSubMenus}
                                toggleSubMenu={toggleSubMenu}
                                closeDrawer={toggleMobileDrawer}
                            />
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default NavBar;