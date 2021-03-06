import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faMobile, faLaptop, faCode} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab, faMobile, faLaptop, faCode);

// import rootReducer from './reducers/index';

// const store = createStore(rootReducer);

ReactDOM.render((
  <App className="mainContainer"/>
), document.getElementById('root'));
