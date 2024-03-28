import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import { BsChevronCompactDown } from "react-icons/bs";
import { FirstName, Pseudo, LastName } from "../../utils/getName";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "auto",
    textAlign: "center",
  },
  jobs: {
    "@media (max-width: 768px)": {
      fontSize: '3rem',
    },
  },
  fa: {
    display: 'inherit',
    margin: '-55px auto',
    "@media (max-width: 768px)": {
      fontSize: '3rem',
      margin: '-35px auto',
    },
  },
  faUp: {
    fontSize: '5rem',
    transformOrigin: "0 100%",
    animation: "$chevronAnimation 3s infinite",
    "@media (max-width: 768px)": {
      fontSize: '3rem',
      margin: '-35px auto',
    },
  },
  faDown: {
    fontSize: '4.5rem',
    transformOrigin: "0 100%",
    animation: "$chevronAnimation 3s infinite",
    animationDelay: "0.25s",
    "@media (max-width: 768px)": {
      fontSize: '2.8rem',
      margin: '-35px auto',
    },
  },
  "@keyframes chevronAnimation": {
    "0%": {
      color: "transparent",
      transform: "translateY(0)",
    },
    "50%": {
      color: "inherit", /* Changez ici la couleur souhaitée */
      transform: "translateY(20%)",
    },
    "100%": {
      color: "transparent",
      transform: "translateY(0)",
    },
  },
}));

export const Content = () => {
  const classes = useStyles();
  const {t} = useTranslation("common");

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        <Typography variant="h5" component="h2">
            <TextDecrypt text={`${FirstName} (${Pseudo}) ${LastName}`} />
        </Typography>
        <Typography variant="h1" component="h1" className={classes.jobs}>
            <TextDecrypt text={t('content.job1')} />
            <TextDecrypt text={t('content.job2')} />
        </Typography>
        <BsChevronCompactDown className={`${classes.fa} ${classes.faUp}`} />
        <BsChevronCompactDown className={`${classes.fa} ${classes.faDown}`} />
      </div>
    </Container>
  );
};