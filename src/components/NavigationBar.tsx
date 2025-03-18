import React, { useState, useEffect, useRef } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
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

/**
 * Custom logic for placeholders (`"#"`) and partial expansions:
 * - If route = "/", match exactly for Home
 * - If route = "#", skip direct matching, check children only
 * - Else do partial match with startsWith
 */
function isActiveItem(item, currentPath) {
    if (!item) return false;

    if (item.route === "/") {
        return currentPath === "/";
    }

    // If route is "#", never directly match, just check if any child is active
    if (item.route === "#") {
        if (item.dropdownItems) {
            return item.dropdownItems.some((child) => isActiveItem(child, currentPath));
        }
        return false;
    }

    // Otherwise, partial
    if (currentPath.includes(item.route)) {
        return true;
    }

    // Also check children
    if (item.dropdownItems) {
        return item.dropdownItems.some((child) => isActiveItem(child, currentPath));
    }
    return false;
}

/* -----------------------------
   Desktop SubMenuItem
------------------------------ */
const SubMenuItem = ({ item, closeMenus }) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isSelected = isActiveItem(item, location.pathname);

    // Auto-expand if active
    useEffect(() => {
        if (item.dropdownItems && isSelected) {
            setOpen(true);
        }
    }, [item.dropdownItems, isSelected]);

    const handleClick = () => {
        if (item.dropdownItems) {
            setOpen((prev) => !prev);
        } else {
            // If it has a real route, navigate
            if (item.route && item.route !== "#") {
                navigate(item.route);
            }
            closeMenus();
        }
    };

    return (
        <Box>
            <MenuItem
                onClick={handleClick}
                sx={{
                    fontWeight: isSelected ? "bold" : "normal",
                    backgroundColor: isSelected ? "#f0f0f0" : "transparent",
                }}
            >
                {item.text}
                {item.dropdownItems && (open ? <ExpandLess sx={{ ml: 1 }} /> : <ExpandMore sx={{ ml: 1 }} />)}
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

/* -----------------------------
   Desktop MenuButton
------------------------------ */
const MenuButton = ({ text, route, dropdownItems, isScrolled, closeMenus }) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    // If route='#', check child activity
    const isSelected = isActiveItem({ route, dropdownItems }, location.pathname);

    const handleClick = () => {
        if (!dropdownItems) {
            if (route && route !== "#") {
                navigate(route);
            }
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
            <Button
                onClick={handleClick}
                sx={{
                    fontWeight: "bold",
                    color: isScrolled ? "black" : "white",
                    // White underline if active
                    borderBottom: isSelected ? "2px solid #fff" : "none",
                }}
            >
                {text.toUpperCase()}{" "}
                {dropdownItems && (open ? <ExpandLess sx={{ ml: 1 }} /> : <ExpandMore sx={{ ml: 1 }} />)}
            </Button>

            {dropdownItems && open && (
                <ClickAwayListener onClickAway={handleClose}>
                    <Paper
                        sx={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            zIndex: 9999,
                            minWidth: 200,
                            mt: 1,
                        }}
                    >
                        {dropdownItems.map((subItem) => (
                            <SubMenuItem
                                key={subItem.text}
                                item={subItem}
                                closeMenus={() => {
                                    closeMenus();
                                    setOpen(false);
                                }}
                            />
                        ))}
                    </Paper>
                </ClickAwayListener>
            )}
        </Box>
    );
};

/* -----------------------------
   MobileMenuItem
------------------------------ */
// 'level=0' => top-level => exclusive toggle
// 'level>0' => sub-level => open/close independently
const MobileMenuItem = ({ item, openSubMenus, toggleSubMenu, closeDrawer, level = 0 }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // EXACT highlight
    const isSelected = location.pathname === item.route;
    // PARTIAL expand if active
    const isActive = isActiveItem(item, location.pathname);

    // Avoid infinite toggles
    const [autoExpanded, setAutoExpanded] = useState(false);

    // If active => auto expand once
    useEffect(() => {
        if (!autoExpanded && item.dropdownItems && isActive && !openSubMenus[item.text]) {
            toggleSubMenu(item.text, level === 0);
            setAutoExpanded(true);
        }
    }, [autoExpanded, isActive, item.dropdownItems, item.text, level, openSubMenus, toggleSubMenu]);

    const handleClick = () => {
        if (item.dropdownItems) {
            toggleSubMenu(item.text, level === 0);
        } else {
            // Only navigate if route != "#"
            if (item.route && item.route !== "#") {
                navigate(item.route);
            }
            closeDrawer();
        }
    };

    return (
        <Box>
            <ListItem
                button
                onClick={handleClick}
                sx={{
                    pl: 2 + level * 8,
                    fontWeight: isSelected ? "bold" : "normal",
                    backgroundColor: isSelected ? "#f0f0f0" : "transparent",
                    transition: "background 0.2s",
                }}
            >
                <ListItemText
                    primary={item.text}
                    sx={{ fontWeight: isSelected ? "bold" : "normal" }}
                />
                {item.dropdownItems && (openSubMenus[item.text] ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>

            {item.dropdownItems && (
                <Collapse in={openSubMenus[item.text]} timeout="auto" unmountOnExit>
                    <List disablePadding>
                        {item.dropdownItems.map((subItem) => (
                            <MobileMenuItem
                                key={subItem.text}
                                item={subItem}
                                openSubMenus={openSubMenus}
                                toggleSubMenu={toggleSubMenu}
                                closeDrawer={closeDrawer}
                                level={level + 1}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </Box>
    );
};

/* -----------------------------
   Main NavBar
------------------------------ */
const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    // keep track of open menus in an 'accordion' style for top-level
    const [openSubMenus, setOpenSubMenus] = useState({});
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileDrawer = () => {
        setMobileOpen((prev) => !prev);
    };

    const toggleSubMenu = (menuText, exclusive) => {
        setOpenSubMenus((prev) => {
            const next = { ...prev };
            if (exclusive) {
                // close all top-level
                Object.keys(next).forEach((key) => {
                    next[key] = false;
                });
            }
            next[menuText] = !prev[menuText];
            return next;
        });
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

                    {/* DESKTOP NAV */}
                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: "20px", flexGrow: 1, justifyContent: "center" }}>
                            {NavigationRoutes.map((navItem) => (
                                <MenuButton
                                    key={navItem.text}
                                    text={navItem.text}
                                    route={navItem.route}
                                    isScrolled={isScrolled}
                                    dropdownItems={navItem.dropdownItems}
                                    closeMenus={() => setOpenSubMenus({})}
                                />
                            ))}
                        </Box>
                    )}

                    {/* MOBILE ICON */}
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={toggleMobileDrawer}
                        sx={{ display: { xs: "block", md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* MOBILE DRAWER */}
            <Drawer anchor="right" open={mobileOpen} onClose={toggleMobileDrawer}>
                <Box sx={{ width: "80vw", maxWidth: 300, paddingTop: 2, backgroundColor: "#fff", height: "100%" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                        <img src={logo} alt="Logo" style={{ width: "70%" }} />
                    </Box>
                    <Divider sx={{ my: 2 }} />
                    <List>
                        {NavigationRoutes.map((navItem) => (
                            <MobileMenuItem
                                key={navItem.text}
                                item={navItem}
                                openSubMenus={openSubMenus}
                                toggleSubMenu={toggleSubMenu}
                                closeDrawer={toggleMobileDrawer}
                                level={0}
                            />
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default NavBar;