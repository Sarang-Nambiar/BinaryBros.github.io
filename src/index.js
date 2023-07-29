import React from 'react';
import ReactDOM from 'react-dom';
import SurveyPage from './survey_page.jsx';
import App from './App.js';
import Header from './Header.js';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <SurveyPage />
  </React.StrictMode>,
  document.getElementById('root')
);

