import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
// import { ThemeProvider } from 'styled-components';
import { App } from 'components';
// import './index.css';
// import { GlobalStyles, theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <GlobalStyles />
//       <App isNightTheme={theme.isNightTheme} />
//     </ThemeProvider>
//   </React.StrictMode>
// );
