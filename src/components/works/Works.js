/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Point Fibre Optique', 
      description: `Your go-to platform for comparing and finding the best fiber optic Internet deals available in France.`,
      alter: 'Point Fibre Optique Project',
      image: `${Portfolio}`,
    },
    { 
      id: 2,
      title: 'Performances Business', 
      description: `A comprehensive online platform dedicated to enhancing business efficiency and productivity through insightful articles, tools, and resources.`,
      alter: 'Performances Business Project',
      image: `${Veritru}`,
    },
    { 
      id: 3,
      title: 'Locations Luberon', 
      description: `Offers a diverse selection of vacation rentals in the beautiful Luberon region, providing visitors with an authentic and immersive experience in the heart of Provence.`,
      alter: 'Locations Luberon Project',
      image: `${Lofo}`,
    },
    { 
      id: 4,
      title: 'Imagine Toi', 
      description: `A website dedicated to providing personalized and immersive virtual reality experiences for educational and recreational purposes.`,
      alter: 'Imagine Toi Project',
      image: `${Startup}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
