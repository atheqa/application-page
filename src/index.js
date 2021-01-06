import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle, { theme } from './styles/';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <App />
      </div>
  </ThemeProvider>,
  document.getElementById('root'),
);
