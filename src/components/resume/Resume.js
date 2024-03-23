import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link, IconButton } from '@material-ui/core';
import { TextDecrypt } from '../content/TextDecrypt';
import ResumePDFUK from './../../assets/Lorris_Colini_Resume_UK.pdf';
import ResumePDFFR from './../../assets/Lorris_Colini_Resume_FR.pdf';
import { FaRegFilePdf } from "react-icons/fa6";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'fixed',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
    borderRadius: "1.25em",
  },
  iconButton: {
    borderRadius: "1.25em",
    padding: "2px 5px",   
  },
  icon: {
    marginRight: '10px',
    fontSize: "1.25rem",
  },
}));

export const Resume = () => {
  const classes = useStyles();
  const {i18n, t} = useTranslation("common");
  const currentLanguage = i18n.language;
  const resume = currentLanguage === "en" ? ResumePDFUK : ResumePDFFR;

  return (
    <Link
      color='inherit'
      underline='none'
      href= {`${resume}`}
      target='_blank'
      rel='noopener noreferrer'
      className={classes.footerText}
    >
    <IconButton
    color="inherit"
    className={classes.iconButton}
  >    
      <FaRegFilePdf className={classes.icon}/>
      <Typography component='span'>
        <TextDecrypt text={t('resume')} />
      </Typography>
    </IconButton>
    </Link>
  );
};
