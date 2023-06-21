import React from 'react';
import ReactDOM from 'react-dom';
import SurveyPage from './survey_page.jsx';
import ResponsePage from './response_page.jsx';

ReactDOM.render(
  <React.StrictMode>
    <ResponsePage />
  </React.StrictMode>,
  document.getElementById('root')
);

