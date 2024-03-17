import React, { useState } from "react";
import { Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "fixed",
    bottom: theme.spacing(13),
    right: theme.spacing(6),
    height: "2.5rem",
    width: "2.5rem",
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
    "@media (max-width: 768px)" : {
        bottom: theme.spacing(6),
        right: theme.spacing(13),    
    }
  },
  icon: {
    fontSize: "1.25rem",
  },
}));

export const LanguageSelector = () => {

    const [language, setLanguage] = useState("en");
    const {i18n, t} = useTranslation('common');
    
    const toggleLanguage = () => {
        if (language === "fr") {
            setLanguage("en");
            i18n.changeLanguage('en');
        } else {
            setLanguage("fr");
            i18n.changeLanguage('fr');
        }
    };
    const classes = useStyles();

    return (
      <Tooltip
        title={t('language_selector.aria_label')}
        placement="right"
        TransitionComponent={Zoom}
      >
        <IconButton
          color="inherit"
          onClick={toggleLanguage}
          aria-label={t('language_selector.aria_label')}
          className={classes.iconButton}
        >
            {language === "en" ? (
              <p className={classes.icon}>FR</p>
          ) : (
              <p className={classes.icon}>EN</p>
          )}
        </IconButton>
      </Tooltip>
    );
};


// export const LanguageSelector = () => {
//     const [t, i18n] = useTranslation('common');
//     return (
//         <div>
//             <span>{t('language-selector.label')} </span>
//             <button onClick={() => i18n.changeLanguage('fr')}>{t('language-selector.languages.fr')}</button>
//             &nbsp;
//             <button onClick={() => i18n.changeLanguage('en')}>{t('language-selector.languages.en')}</button>
//         </div>
//     )
// }