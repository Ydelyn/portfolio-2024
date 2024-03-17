import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Brightness4, Brightness7 } from "@material-ui/icons";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "fixed",
    bottom: theme.spacing(6),
    right: theme.spacing(6),
    height: "2.5rem",
    width: "2.5rem",
    zIndex: 1000,    
    backdropFilter: 'blur(10px)',
  },
  icon: {
    fontSize: "1.25rem",
  },
}));

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const classes = useStyles();
    const {t} = useTranslation('common');

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
              <Brightness4 className={classes.icon} />
          ) : (
              <Brightness7 className={classes.icon} />
          )}
        </IconButton>
      </Tooltip>
    );
};
