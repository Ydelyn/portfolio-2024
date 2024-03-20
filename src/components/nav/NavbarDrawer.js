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


export const NavbarDrawer = () => {
    /*
    react useState hook to save the current open/close state of the drawer,
    normally variables dissapear afte the function was executed
    */
    const [open, setState] = useState(false);
    const { theme } = useContext(ThemeContext);

    const { t } = useTranslation("common");


    const drawerColor = theme === "light" ? "#eaeaea" : "#222222";
    const textColor = theme === "light" ? "#111111" : "#fafafa";


    const useStyles = makeStyles((theme) => ({
        "nav": {
            display: "none",
            position: "fixed",
            top: theme.spacing(6),
            right: theme.spacing(13),
            zIndex: 1000,
            backdropFilter: "blur(10px)",
            [theme.breakpoints.down('md')]: {
                display: "block",
            },
        },
        "drawer": {
            backgroundColor: drawerColor,
            padding: "15px 30px",
            height: "100vh",
        },
        "icons": {
            color: "#884ac2",
            fontSize: "1.5rem",
        },
        "text": {
            color: textColor,
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

    return (
        <nav className={classes.nav}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>

            {/* The outside of the drawer */}
            <Drawer
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
                    <IconButton className={classes.text} sx={{ mb: 2 }}>
                        <CloseIcon className={classes.text} onClick={toggleDrawer(false)} />
                    </IconButton>

                    <Divider sx={{ mb: 2 }} />

                    <Box sx={{ mb: 2 }}>
                        <a href="#home" >
                            <ListItemButton>
                                <ListItemIcon>
                                    <IoMdHome className={classes.icons} />
                                </ListItemIcon>
                                <Typography className={classes.text}>
                                    {t('sideNavbar.home')}
                                </Typography>
                            </ListItemButton>
                        </a>
                        <a href="#works" >
                            <ListItemButton>
                                <ListItemIcon>
                                    <GrProjects className={classes.icons} />
                                </ListItemIcon>
                                <Typography className={classes.text}>
                                    {t('sideNavbar.projects')}
                                </Typography>
                            </ListItemButton>
                        </a>
                        <a href="#about" >
                            <ListItemButton>
                                <ListItemIcon>
                                    <SiAboutdotme className={classes.icons} />
                                </ListItemIcon>
                                <Typography className={classes.text}>
                                    {t('sideNavbar.about')}
                                </Typography>
                            </ListItemButton>
                        </a>
                        <a href="#contact" >
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
                </Box>
            </Drawer>
        </nav>

    );
}