import jest from 'jest';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { IntlProvider } from 'react-intl';
import App from './../App';
import rootReducer from './../reducers';

const messages = {};
describe('should test application', () => {
  test('should render the application', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App source="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('should render the application with language', () => {
    const div = document.createElement('div');
    // change the language
    Object.defineProperty(navigator, 'language', {
      get: function() {
        return 'somelang';
      }
    });
    ReactDOM.render(<App source="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
