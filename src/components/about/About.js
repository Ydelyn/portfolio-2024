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
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const {t} = useTranslation("common");
  const classes = useStyles();
  const greetings = t('about.greetings');
  const aboutme = `Hello I'm ${FirstName} ${LastName}, a junior developer specializing in React, React Native, and PHP. Passionate about creating high-performance web and mobile applications, I combine front-end expertise and back-end skills to develop comprehensive solutions.`;
  const aboutme2 =  `My curiosity for technology and commitment to continuous learning drive me to explore new techniques and tackle challenges in the development field. I am always looking to collaborate on innovative projects and contribute to a dynamic team, while developing my technical expertise and sharing my passion for coding.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
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
              <Typography component='span'> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
