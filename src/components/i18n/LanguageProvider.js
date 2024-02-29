import React, { useEffect, useState, createContext } from "react";

import { useTranslation } from "react-i18next";


export const ThemeContext = createContext();

export const LanguageProvider = ({children}) => {
    const getInitialMode = () => {
        if (typeof localStorage === "undefined") return true;
        const isReturningUser = "en" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("en"));
        const userPrefersEn = getPrefLangScheme();
        if (isReturningUser) {
            return savedMode;
        }
        return !!userPrefersEn;
    };

    const getPrefLangScheme = () => {
        if (!window.matchMedia) return;

        return window.matchMedia("(prefers-lang-scheme: en)").matches;
    };

    const [language, setLanguage] = useState(getInitialMode() ? "en" : "fr");

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

    useEffect(() => {
        typeof localStorage !== "undefined" &&
            localStorage.setItem("en", JSON.stringify(language === "en"));
    }, [language]);

    return (
        <ThemeContext.Provider
            value={{
                language,
                toggleLanguage,
            }}
        >
        </ThemeContext.Provider>
    );
};
