import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);

ReactDOM.render(<App />, document.getElementById('root'));
