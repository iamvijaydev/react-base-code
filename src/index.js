import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import whitetheme from '../config/theme/whitetheme';
import darktheme from '../config/theme/darktheme';
import store from './store';
import App from './App';
import './globalStyles';

render(
  <Provider store={store}>
    <ThemeProvider theme={whitetheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
