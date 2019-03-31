import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import { HashRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';

import messages_de from './translations/de.json';
import messages_en from './translations/en.json';
import rootReducer from './reducers';
import { ROUTES, DEFAULT_LANGUAGE } from './utils/constants';
import { isSupportedLanguage } from './utils';
import Home from './pages/Home';
import Page from './pages/Page';
import { Link } from 'react-router-dom';

const messages = {
  de: messages_de,
  en: messages_en
};

addLocaleData([...locale_en, ...locale_de]);

const store = createStore(rootReducer);

class App extends Component {
  render() {
    let language = navigator.language.split(/[-_]/)[0]; // language without region code
    language = isSupportedLanguage(language) ? language : DEFAULT_LANGUAGE;

    return (
      <Provider store={store}>
        <IntlProvider locale={language} messages={messages[language]}>
          <HashRouter>
            <main className="h-100">
              <Link to={ROUTES.home}>Home</Link>
              <br />
              <Link to={ROUTES.page}>Page</Link>
              <Switch>
                <Route exact path={ROUTES.home} component={Home} />
                <Route path={ROUTES.page} component={Page} />
              </Switch>
            </main>
          </HashRouter>
        </IntlProvider>
      </Provider>
    );
  }
}

// App.propTypes = {
//
// };
//
// App.defaultProps = {
//
// };

export default App;
