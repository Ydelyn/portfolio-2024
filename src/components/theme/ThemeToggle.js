import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import { Tooltip, IconButton, Zoom } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { styled } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

import { useTranslation } from "react-i18next";


export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { t } = useTranslation('common');
  const th = useTheme();
  const Button = styled(IconButton)({
        position: "fixed",
        bottom: th.spacing(6),
        right: th.spacing(6),
        height: "2.5rem",
        width: "2.5rem",
        zIndex: 1500,
        backdropFilter: 'blur(10px)',
    });

  return (
    <Tooltip
      title={t('theme_toggle.aria_label')}
      placement="right"
      TransitionComponent={Zoom}
    >
      <Button onClick={toggleTheme} color="inherit" aria-label={t('theme_toggle.aria_label')}>
        {theme === "light" ? (
          <DarkModeIcon sx={{ fontSize: "1.25rem" }} />
        ) : (
          <LightModeIcon sx={{ fontSize: "1.25rem" }} />
        )}
      </Button>
    </Tooltip>
  );
};
