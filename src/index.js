import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../src/components/App';
import Store from './store';
import { PersistGate } from 'redux-persist/integration/react'

// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';


const rootReactElement = (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
      <Router >
        <App />
      </Router>
      </PersistGate>
    </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
