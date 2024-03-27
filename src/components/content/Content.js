import React from "react";
import { Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TextDecrypt } from "./TextDecrypt";
import { FaAnglesDown } from "react-icons/fa6";
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
    fontSize: '3rem',
    "@media (max-width: 768px)": {
      fontSize: '2rem',
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
        <FaAnglesDown className={classes.fa} />
      </div>
    </Container>
  );
};
