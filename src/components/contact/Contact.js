/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from 'sweetalert2';

import emailjs from '@emailjs/browser';

import './Contact.css';

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));



export const Contact = () => {
  const classes = useStyles();
  const {i18n, t} = useTranslation("common");
  const currentLanguage = i18n.language;

  const greetings = "Say hello.";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    const template = currentLanguage === "en" ? 'template_h7675fo' :  'template_xcmkpsg';

    emailjs.sendForm('service_yk2p49j', template, form.current, 'H3Fch4utunMSMloOb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: t('contact.title'),
      showConfirmButton: false,
      timer: 1500
    })
    e.target.reset()
  };



    return (
      <section id="contact">
        <Container component="main" className={classes.main} maxWidth="md">
          <div className="contact">
            <div className="_form_wrapper">
              <form ref={form} onSubmit={sendEmail} className={classes.form}>
                <TextField
                  id="outlined-name-input"
                  label={t('contact.label_name')}
                  type="text"
                  size="small"
                  variant="filled"
                  name="name"
                  className={classes.formfield}
                  required
                />
                <TextField
                  id="outlined-password-input"
                  label={t('contact.label_email')}
                  type="email"
                  size="small"
                  variant="filled"
                  name="email"
                  className={classes.formfield}
                  required
                />
                <TextField
                  id="outlined-password-input"
                  label="Message"
                  type="textarea"
                  size="small"
                  multiline
                  minRows={5}
                  variant="filled"
                  name="message"
                  className={classes.formfield}
                  required
                />
                <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                  <Typography component='span'> {t('contact.submit')}</Typography>
                </button>
              </form>
            </div>
            <h2 className="contact_msg">
              <TextDecrypt text={t('contact.greetings')}/>
            </h2>
          </div>
        </Container>
      </section>
  );
};
