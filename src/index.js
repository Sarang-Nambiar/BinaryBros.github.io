import React from 'react';
import ReactDOM from 'react-dom';
import SurveyPage from './survey_page.jsx';
import App from './App.js';

ReactDOM.render(
  <React.StrictMode>
        <App/>
    <SurveyPage />
  </React.StrictMode>,
  document.getElementById('root')
);

