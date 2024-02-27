import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../../assets/apple-touch-icon.png";
// import logoHover from "../../assets/apple-touch-icon-hover.png";

// const useStyles = makeStyles((theme) => ({
//   hover: {
//     backgroundImage: "url(../../assets/apple-touch-icon.png)",
//     "&:hover": {
//         backgroundImage: "url(../../assets/apple-touch-icon-hover.png)",
//     },
//     transition: "all 0.5s ease",
//     width: "50px",
//     height:"50px",
//   },
// }));

export const Logo = () => {
    // const classes = useStyles();

    return (
      <img src={logo} width="50px"/>
    );
};
