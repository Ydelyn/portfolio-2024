/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Typography } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  const {t} = useTranslation("common");

  const useStyles = makeStyles((theme) => ({
    "nav": {
      position: "fixed",
      flexDirection: "row-reverse",
      top: theme.spacing(15),
      left: theme.spacing(6),
      zIndex: 1000,
      padding: "4px 10px",
      borderLeft: "solid",
      [theme.breakpoints.down('md')]: {
        display: "none",
    },
    },
    "a": {
      marginLeft: "10px",
      textDecoration: "none",
      "& :hover": {
        color: "rgba(132,74,194,0.7)",
      },
    },
    "active": {
      color: "#884ac2",
      fontWeight: "bold",
    },
  }));

  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <a href="#" 
        onClick={() => setActiveNav('#')}
        className={`${classes.a} ${activeNav === '#' ? classes.active : ''}`}
      >
        <Typography>
          {t('sideNavbar.home')}
        </Typography>
      </a>
      <a href="#works"
        onClick={() => setActiveNav('#works')}
        className={`${classes.a} ${activeNav === '#works' ? classes.active : ''}`}
      >
        <Typography>
          {t('sideNavbar.projects')}
        </Typography>
      </a>
      <a href="#about" 
        onClick={() => setActiveNav('#about')}
        className={`${classes.a} ${activeNav === '#about' ? classes.active : ''}`}
      >
        <Typography>
          {t('sideNavbar.about')}
        </Typography>
      </a>
      <a href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={`${classes.a} ${activeNav === '#contact' ? classes.active : ''}`}
      >
        <Typography>
          {t('sideNavbar.contact')}
        </Typography>
      </a>
    </nav>
  );
};