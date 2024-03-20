/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

import Pfo from '../../assets/recentprojects/pfo.png';
import Pb from '../../assets/recentprojects/pb.png';
import Ll from '../../assets/recentprojects/ll.png';
import It from '../../assets/recentprojects/it.png';

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "auto",
    marginTop: '3em',
  },
}));

export const Works = () => {
  const classes = useStyles();
  const {t} = useTranslation("common");
  const [projects, setProjects] = useState([ //WIP: changer le usestate pour permettre la modif du translate
    {
      id: 1,
      title: 'Point Fibre Optique',
      description: 'pfo',
      alter: 'Point Fibre Optique Project',
      image: `${Pfo}`,
      url: `https://pointfibreoptique.com`,
    },
    {
      id: 2,
      title: 'Performances Business',
      description: 'pb',
      alter: 'Performances Business Project',
      image: `${Pb}`,
      url: `https://performancesbusiness.com`,
    },
    {
      id: 3,
      title: 'Locations Luberon',
      description: 'll',
      alter: 'Locations Luberon Project',
      image: `${Ll}`,
      url: `https://locations-luberon.fr`,
    },
    {
      id: 4,
      title: 'Imagine Toi',
      description: 'it',
      alter: 'Imagine Toi Project',
      image: `${It}`,
      url: `https://imaginetoi.be`,
    },
  ]);

  return (
    <section id="works">
      <h2 className="works_title">
        <TextDecrypt text={t('works.title')}/>
      </h2>
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <a className="project" key={project.id} href={project.url} target="_blank" rel="noreferrer">
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.title} />
              </h3>
              <p className="description">
                {t('works.'+project.description)}
              </p>
            </div>
          </a>
        ))}
      </Container>
    </section>
  );
};
