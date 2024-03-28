import React, { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { Typography } from "@material-ui/core";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { IoIosContact } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../theme/ThemeProvider";
import { useTranslation } from "react-i18next";
import { GrProjects } from "react-icons/gr";
import { IoMdHome } from "react-icons/io";

import Resume from '../../settings/resume.json';



export const NavbarDrawer = () => {
    /*
    react useState hook to save the current open/close state of the drawer,
    normally variables dissapear afte the function was executed
    */
    const [open, setState] = useState(false);
    const [isHoveredMenu, setIsHoveredMenu] = useState(false);
    const [isHoveredClose, setIsHoveredClose] = useState(false);

    const handleMouseEnterMenu = () => {
        setIsHoveredMenu(true);
    };

    const handleMouseLeaveMenu = () => {
        setIsHoveredMenu(false);
    };

    const handleMouseEnterClose = () => {
        setIsHoveredClose(true);
    };

    const handleMouseLeaveClose = () => {
        setIsHoveredClose(false);
    };

    const { theme } = useContext(ThemeContext);

    const { t } = useTranslation("common");

    const textColor = theme === "light" ? "#111111" : "#fafafa";
    const drawerBg = theme === "light" ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)";

    const baseStyleMenu = {
        backgroundColor: 'rgba(132,74,194,0.2)',
    };

    const hoverStyleMenu = {
        backgroundColor: 'rgba(132,74,194,0.7)',
    };

    //TODO: refactor this some day
    const baseStyleClose = {
        backgroundColor: 'transparent',
    };

    const hoverStyleClose = {
        backgroundColor: 'transparent',
    };


    const useStyles = makeStyles((theme) => ({
        "nav": {
            display: "none",
            position: "fixed",
            top: theme.spacing(6),
            right: theme.spacing(13),
            zIndex: 1000,
            backdropFilter: "blur(10px)",
            borderRadius: "50%",
            [theme.breakpoints.down('md')]: {
                display: "block",
            },
        },
        "drawer": {
            backgroundColor: "transparent",
            backdropFilter: "blur(10px)",
            padding: "15px 40px",
            height: "100vh",
        },
        "icons": {
            color: "#884ac2",
            fontSize: "1.5rem",
        },
        "text": {
            color: textColor,
        },
        "closeIcon": {
            color: textColor,
            boxShadow: "none",
            marginLeft: "-23px",
        },
    }));

    const classes = useStyles();

    /*
    function that is being called every time the drawer should open or close,
    the keys tab and shift are excluded so the user can focus between
    the elements with the keys
    */
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        //changes the function state according to the value of open
        setState(open);
    };

    const socialItems = Resume.basics.profiles.map((socialItem) => (
        <a href={socialItem.url}
            key={socialItem.network.toLowerCase()}
            target='_blank'
            rel='noopener noreferrer'
            underline='none'
            onClick={toggleDrawer(false)}>
            <ListItemButton>
                <ListItemIcon>
                    <i className={`${classes.icons} ${socialItem.x_icon}`}></i>
                </ListItemIcon>
                <Typography className={classes.text}>
                    {socialItem.network}
                </Typography>
            </ListItemButton>
        </a>
    ));

    return (
        <nav className={classes.nav}>
            <IconButton
                style={isHoveredMenu ? { ...baseStyleMenu, ...hoverStyleMenu } : baseStyleMenu}
                onMouseEnter={handleMouseEnterMenu}
                onMouseLeave={handleMouseLeaveMenu}
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>

            {/* The outside of the drawer */}
            <Drawer
                PaperProps={{
                    sx: {
                        backgroundColor: drawerBg,
                    },
                }}
                //from which side the drawer slides in
                anchor="right"
                //if open is true --> drawer is shown
                open={open}
                //function that is called when the drawer should close
                onClose={toggleDrawer(false)}
                //function that is called when the drawer should open
                onOpen={toggleDrawer(true)}
            >
                {/* The inside of the drawer */}
                <Box className={classes.drawer}>

                    {/* 
                  when clicking the icon it calls the function toggleDrawer 
                  and closes the drawer by setting the variable open to false
                  */}
                    <IconButton 
                        className={classes.closeIcon} 
                        sx={{ mb: 2 }}
                        style={isHoveredClose ? { ...baseStyleClose, ...hoverStyleClose } : baseStyleClose}
                        onMouseEnter={handleMouseEnterClose}
                        onMouseLeave={handleMouseLeaveClose}
                    >
                        <CloseIcon className={classes.closeIcon} onClick={toggleDrawer(false)} />
                    </IconButton>

                    <Divider sx={{ mb: 2 }} />

                    <Box sx={{ mb: 2 }}>
                        <a href="#home" onClick={toggleDrawer(false)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <IoMdHome className={classes.icons} />
                                </ListItemIcon>
                                <Typography className={classes.text}>
                                    {t('sideNavbar.home')}
                                </Typography>
                            </ListItemButton>
                        </a>
                        <a href="#works" onClick={toggleDrawer(false)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <GrProjects className={classes.icons} />
                                </ListItemIcon>
                                <Typography className={classes.text}>
                                    {t('sideNavbar.projects')}
                                </Typography>
                            </ListItemButton>
                        </a>
                        <a href="#about" onClick={toggleDrawer(false)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SiAboutdotme className={classes.icons} />
                                </ListItemIcon>
                                <Typography className={classes.text}>
                                    {t('sideNavbar.about')}
                                </Typography>
                            </ListItemButton>
                        </a>
                        <a href="#contact" onClick={toggleDrawer(false)}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <IoIosContact className={classes.icons} />
                                </ListItemIcon>
                                <Typography className={classes.text}>
                                    {t('sideNavbar.contact')}
                                </Typography>
                            </ListItemButton>
                        </a>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    <Box sx={{ mb: 2 }}>
                        {socialItems}
                    </Box>
                </Box>
            </Drawer>
        </nav>

    );
}
