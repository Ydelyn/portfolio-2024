import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "fixed",
    bottom: theme.spacing(6),
    right: theme.spacing(6),
    height: "2.5rem",
    width: "2.5rem",
    zIndex: 1500,
    backdropFilter: 'blur(10px)',
  },
  icon: {
    fontSize: "1.25rem",
  },
}));

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const classes = useStyles();
  const { t } = useTranslation('common');

  return (
    <Tooltip
      title={t('theme_toggle.aria_label')}
      placement="right"
      TransitionComponent={Zoom}
    >
      <IconButton
        color="inherit"
        onClick={toggleTheme}
        aria-label={t('theme_toggle.aria_label')}
        className={classes.iconButton}
      >
        {theme === "light" ? (
          <DarkModeIcon className={classes.icon} />
        ) : (
          <LightModeIcon className={classes.icon} />
        )}
      </IconButton>
    </Tooltip>
  );
};
