import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_de from './translations/ban/common.json';
import common_en from "./translations/en/common.json";
import common_sa from "./translations/sa/common.json";


i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  // lng: lang ? lang : "en",                              // language to use
  lng: "en", // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    ban: {
      common: common_de,
    },
    sa: {
      common: common_sa,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
    </Provider>
  </BrowserRouter>
</React.StrictMode>,
  document.getElementById("root")
);
