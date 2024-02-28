import React, {useContext} from "react";

import { ThemeContext } from "../theme/ThemeProvider";

import logoDark from "../../assets/apple-touch-icon-dark.png";
import logoLight from "../../assets/apple-touch-icon-light.png";
import logoHover from "../../assets/apple-touch-icon-hover.png";

import "./Logo.css";

export const Logo = () => {
    // const classes = useStyles();
    const { theme } = useContext(ThemeContext);
    const usedLogo = theme === "light" ? logoDark : logoLight;

    return (
      <div className="logo">
        <img className="logo-main" src={usedLogo} width="50px"/>
        <img className="logo-hover" src={logoHover} width="50px"/>
      </div>
    );
};
