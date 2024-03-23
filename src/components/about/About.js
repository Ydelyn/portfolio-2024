/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.png';

import {useTranslation} from "react-i18next";


const useStyles = makeStyles((theme) => ({
  main: {
    margin: "auto",
    marginTop: '3em',
  },
}));

export const About = () => {
  const {t} = useTranslation("common");
  const classes = useStyles();
  const greetings = t('about.greetings');
  const aboutme = t('about.aboutme');
  const aboutme2 =  t('about.aboutme2');

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            
          >
            <div style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}>
            </div>
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            {/* <p className="aboutme2">
              {aboutme2}
            </p> */}
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> {t('about.contact')}</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
