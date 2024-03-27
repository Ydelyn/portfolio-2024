import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
  tooltip: {
    backdropFilter: "blur(10px)",
    backgroundColor: 'rgba(132,74,194,0.2)',
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
      classes={classes.tooltip}
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
