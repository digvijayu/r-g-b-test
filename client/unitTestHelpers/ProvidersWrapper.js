import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './../reducers';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const enTranslationData = require('./../translations/en.json');

function providers(component) {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <IntlProvider locale="en" messages={enTranslationData}>
        <HashRouter>{React.cloneElement(component)}</HashRouter>
      </IntlProvider>
    </Provider>
  );
}

export default providers;
