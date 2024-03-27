import React from "react";
// import renderer from "react-test-renderer";
import ReactDOM from "react-dom";
import { App } from "./app/App";
import "./index.css";

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

import common_en from "./components/i18n/translations/en/common.json";
import common_fr from "./components/i18n/translations/fr/common.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            common: common_en               // 'common' is our custom namespace
        },
        fr: {
            common: common_fr
        },
    },
});

// it('renders correctly', () => {
//     const tree = renderer
//       .create(<I18nextProvider i18n={i18next}><App /></I18nextProvider>, document.getElementById("root"))
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });

ReactDOM.render(<I18nextProvider i18n={i18next}><App /></I18nextProvider>, document.getElementById("root"));
