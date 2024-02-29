import React, { useContext, useState } from "react";
import { ThemeContext } from "./LanguageProvider";
import { Tooltip, IconButton, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LanguageIcon from '@material-ui/icons/Language';

import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "fixed",
    bottom: theme.spacing(13),
    right: theme.spacing(6),
    height: "2.5rem",
    width: "2.5rem",
  },
  icon: {
    fontSize: "1.25rem",
  },
}));


export const LanguageSelector = () => {

    const [language, setLanguage] = useState("en");
    const [t, i18n] = useTranslation('common');
    
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
        title={"Change language"}
        placement="right"
        TransitionComponent={Zoom}
      >
        <IconButton
          color="inherit"
          onClick={toggleLanguage}
          aria-label={"Change language"}
          className={classes.iconButton}
        >
            {language === "en" ? (
              <p>EN</p>
          ) : (
              <p>FR</p>
          )}
        <LanguageIcon className={classes.icon}/>
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