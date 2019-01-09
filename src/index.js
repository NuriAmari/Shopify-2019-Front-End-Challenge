import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './reset.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);
library.add(faSearch);

ReactDOM.render(<App />, document.getElementById('root'));
